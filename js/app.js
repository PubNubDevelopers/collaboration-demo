// Properties
var CHANNEL = 'collaboration-demo';
var users = {}; //Houses the users connected to app.
var plots = []; //Contains the records of drawing actions.
var oldCoordinates = {}; //Contains the starting coordinates of the mouse click.
var batchSize = 10; //How many records of coordinates are sent at a time per PubNub publish.
var idleTime = 0; //Remove and unsubscribe users after 30 seconds of sitting idle.
const PUBLIC_KEY = "pub-c-b8772a67-0f83-478d-a25a-3fffef982565";
const SUBSCRIBE_KEY = "sub-c-cb5cda16-3e13-42d1-af5d-9ff3ab0f352f";

// PubNub Connection Object.
var pubnub = new PubNub({
    publishKey: PUBLIC_KEY,
    subscribeKey: SUBSCRIBE_KEY,
    uuid:self.crypto.randomUUID(),
    presenceTimeout:20
});

//The placeholer name is replaced for the user name upon first logging in and whenever they attempt to delete their name.
var placeholder = "ANON_" + pubnub.getUUID().substring(0,4);
var username = placeholder;
setText(username);

// Canvas and Drawing Settings
var canvas = document.getElementById('drawCanvas');
var ctx = canvas.getContext('2d');
var color = document.querySelector(':checked').getAttribute('data-color');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = color;
ctx.lineWidth = '3';
ctx.lineCap = ctx.lineJoin = 'round';

// Mouse and touch events	
//Used to track Idle time for users. Will unsubscribe users from channel who remain idle for more than 30 seconds.
window.onload = resetIdleTime;
document.onmousemove = resetIdleTime;
document.ontouchstart = resetIdleTime;
document.onkeydown = resetIdleTime;

document.getElementById('colorSwatch').addEventListener('click', function() {
    color = document.querySelector(':checked').getAttribute('data-color');
}, false);

// Clear Canvas Button Press. Clears entire canvas for just that user.
document.getElementById('clearSelfCanvasButton').addEventListener('click', function(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    //  DEMO: used by the interactive demo
    actionCompleted({
        action: 'Clear your canvas',
        debug: false
    })
});

// Clear All Canvas Button Press. Clears canvas for every user. Passes a boolean flag to clear the canvas for all subscribers.
document.getElementById('clearAllCanvasButton').addEventListener('click', function(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    publish({clear:true});
  
    //  DEMO: used by the interactive demo
    actionCompleted({
        action: 'Clear the canvas for all',
        debug: false
    })
 });

//Listen for user keyboard input. The placeholder name will be replaced once users start typing.
document.getElementById('nameInput').addEventListener('keydown', function(e) {
    var ch = e.key;
    if(ch.toLowerCase() == "backspace" && username != placeholder){
        //If the last letter is about to be removed, replace with the placeholder.
        if(username.length - 1 > 0) {       
            username = username.substring(0,username.length-1);
        }
        else {
            username = placeholder;
        } 
    }
    else {
        if(ch.length == 1) {
            if (username == placeholder) {
                username = ch;
            }
            else {
                username += ch; 
            }

            //  DEMO: used by the interactive demo
            actionCompleted({
                action: 'Give yourself a name',
                debug: false
            })
        } 
    }
    setText(username);
});

//Don't allow for selecting text in text input (interferes with logic for hover name).
document.getElementById('nameInput').addEventListener('select', function(e) {
    this.selectionStart = this.selectionEnd;
});

var isTouchSupported = 'ontouchstart' in window;
var downEvent = isTouchSupported ? 'touchstart' : 'mousedown';
var moveEvent = isTouchSupported ? 'touchmove' : 'mousemove';
var upEvent = isTouchSupported ? 'touchend' : 'mouseup';
       
canvas.addEventListener(downEvent, startDraw, false);
canvas.addEventListener(moveEvent, draw, false);
canvas.addEventListener(upEvent, endDraw, false);

// Events and Listeners
pubnub.addListener({
    message: function(m) {
        if(m.message && m.message.clear && m.message.clear == true) {
           ctx.clearRect(0,0,canvas.width,canvas.height);
       }
       else {
           // Update canvas when other users draw.  
           drawFromStream(m.message)
       }   

    },
    presence: function(m) {
        // Update occupancy
        var occupancy = m.occupancy;
        if(occupancy > 1){ 
            document.getElementById('unit').textContent = 'doodlers';
            
            //  DEMO: used by the interactive demo
            actionCompleted({
                action: 'Draw with another user (You might need to open a new tab)',
                debug: false
            })
        }

        document.getElementById('occupancy').textContent = occupancy;

        //Handle other user mice actions based on presence event.
        if(m.uuid === pubnub.getUUID()) return; //skip self
        switch(m.action) {
            case 'join':
            case'state-change':
                updateUser(m.uuid, m.state);
                break;
            case 'leave':
            case 'timeout':
                removeUser(m.uuid, m.state);
                break;
            default:
                break;
        }     
    }
});

//Subscribing to channels allows user to receive drawing strokes from other users.
pubnub.subscribe({
    channels : [CHANNEL],
    withPresence: true 
});

//Publish data to PubNub network for subscribers (Data contains color, previous and new coordinates).
async function publish(data) {	
    try {
        const result = await pubnub.publish({
            message: data,
            channel: CHANNEL				
        });
    } catch (status) {
        console.log(status);
    }		
}

//Used for tracking location of mouse and updating position for other users connected to app.
window.onmousemove = function(event) {
    var rect = event.target.getBoundingClientRect();
    var xy = { x: rect.left + event.offsetX, y: rect.top + event.offsetY, name: username};
    setPos(xy);
};

//Draw on canvas
function drawOnCanvas(color, startCoordinates, endCoordinates) {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(startCoordinates.x, startCoordinates.y);
    ctx.lineTo(endCoordinates.x, endCoordinates.y);
    ctx.stroke();          
}

//Update canvas when other users draw.
function drawFromStream(message) {
    if(!message && message.data.length == 0) return;

    //  DEMO: used by the interactive demo
    actionCompleted({
        action: `View the other user's artwork`,
        debug: false
    })

    for (var i = 0; i < message.data.length;i++) {
        drawOnCanvas(message.data[i].color, message.data[i].oldCoordinates, message.data[i].newCoordinates);
    }
}

//On MouseMove Event.
function draw(e) {
    e.preventDefault(); // prevent continuous touch event process e.g. scrolling
    //If touch is detected or primary mouse button pressed down while moving, draw on canvas.
    if((isTouchSupported && e.touches.length == 1) || e.buttons == 1) {
        document.getElementById('nameInput').blur(); //Stop focus on input text once user starts drawing.
        var x = isTouchSupported ? (e.targetTouches[0].pageX - canvas.offsetLeft) : (e.offsetX || e.layerX - canvas.offsetLeft);
        var y = isTouchSupported ? (e.targetTouches[0].pageY - canvas.offsetTop) : (e.offsetY || e.layerY - canvas.offsetTop);
        var newCoordinates = {x: (x << 0), y: (y << 0)}; // round numbers for touch screens
        
        //  DEMO: used by the interactive demo
        actionCompleted({
            action: 'Draw on the canvas',
            debug: false
        })
        
        drawOnCanvas(color, oldCoordinates, newCoordinates);

        var data = {
            color:color,
            oldCoordinates: oldCoordinates,
            newCoordinates: newCoordinates
        }
        plots.push(data);
        //Sending requests in batches due to browsers like Chrome throttling number of requests allowed to be sent out at a time.
        if(plots.length >= batchSize) {
            publish({
                data:plots
            });
            plots = [];
        }
        oldCoordinates = newCoordinates; //Update oldCoordinates       
    }          
}


//On MouseDown, obtain current coordinates and save as starting coordinates.
function startDraw(e) {
    e.preventDefault();
    var x = isTouchSupported ? (e.targetTouches[0].pageX - canvas.offsetLeft) : (e.offsetX || e.layerX - canvas.offsetLeft);
    var y = isTouchSupported ? (e.targetTouches[0].pageY - canvas.offsetTop) : (e.offsetY || e.layerY - canvas.offsetTop);
    oldCoordinates = {x: (x << 0), y: (y << 0)};
}

//On MouseUp, publish any remaining coordinates and reset.
function endDraw(e) {
    e.preventDefault();
    //Batch process what's left.
    if(plots.length > 0) {
        publish({
            data:plots
        });
    }
    plots = []           
    oldCoordinates = {};
}

//Unsubscribes user from channel after being idle for more than 30 seconds and sends to timeout page.
function idleUnsubscribe() {
    //Unsubscribe user to be removed from other screens.
    pubnub.unsubscribe({
        channels: [CHANNEL]
    });

    //Send user to timeout screen.
    window.location.replace("./timeout.html");
}

//Tracks how long the user has been idle, and will unsubscribe the user if they have been idle
// for more than 30 seconds. Timer is reset whenever the user has moved, typed, etc.
function resetIdleTime() {
    clearTimeout(idleTime);
    idleTime = setTimeout(idleUnsubscribe, 30000)
}

// Mouse Tracking
function Sprite(state) {
    this.x = 100;
    this.y = 100;
    this.div = document.createElement('div');
    this.div.innerHTML = state.name;
    this.div.readOnly = true;
    this.div.style.pointerEvents = "none"; //Make the textbox non interactive with the cursor in order to be able to change color.
    this.div.style.left = this.x+'px';
    this.div.style.top  = this.y+'px';
    this.div.classList.add('sprite');
    
    //Random color for Mouse Name.
    var rgb = {
        r: Math.floor(Math.random() * 255),
        g: Math.floor(Math.random() * 255),
        b: Math.floor(Math.random() * 255)
    }; 
    this.div.style.backgroundColor = `rgba(${rgb.r},${rgb.g},${rgb.b}, 0.75)`;
    this.div.style.borderColor = `rgba(${rgb.r},${rgb.g},${rgb.b}, 1)`;

    //Create Pencil icon to mimic user cursor. 
    this.img = document.createElement('img');
    this.img.src = "images/pencil.png";
    this.img.style.position = "absolute";
    this.img.style.width = "45px";
    this.img.style.height = "45px";
    this.img.style.transform = "rotate(130deg)";
    this.img.style.left = this.x - 140 + 'px';
    this.img.style.bottom = this.y - 80 + 'px';
    this.div.appendChild(this.img);

    var spriteContainer = document.getElementById("sprite-container");
    spriteContainer.appendChild(this.div);
    var self = this;
    this.setState = function(state) {//Called whenever user moves mouse.
        if(!state) return;
        if(state.txt !== undefined) {
            //Replace just the text of the div (until reach the img tag)
            var replace = this.div.innerHTML.substring(this.div.innerHTML.indexOf("<img"));
            this.div.innerHTML = state.txt + replace;          
        } 

        if(state.x && state.y) {
            var bounds = spriteContainer.getBoundingClientRect();
            state.x = Math.min(state.x, bounds.width-100);
            state.y = Math.min(state.y, bounds.height-50);
            self.moveTo(state.x,state.y);
        }
    };
    this.remove = function() {
        this.div.parentNode.removeChild(this.div);
    };
    this.update = function() {//Updates the user mouse position by controlling speed and animation.
        var diffx = this.x-this.tx;
        var diffy = this.y-this.ty;
        var dist = Math.sqrt((diffx*diffx) + (diffy*diffy));
        if(dist < 4) {
            this.x = this.tx;
            this.y = this.ty;
            this.div.style.left = this.x+'px';
            this.div.style.top  = this.y+'px';
        } else {
            var speed = 4;
            if(this.x < this.tx-speed) this.x += speed;
            if(this.x > this.tx+speed) this.x -= speed;
            if(this.y < this.ty-speed) this.y += speed;
            if(this.y > this.ty+speed) this.y -= speed;
            this.div.style.left = this.x+'px';
            this.div.style.top  = this.y+'px';
            requestAnimationFrame(this.update.bind(this));
        }
    };
    this.moveTo = function(x,y) {
        this.tx = x;
        this.ty = y;
        this.update();
    }
}

//Sets the users' text near their stylus pen.
function setText(txt) {
    updateUser(pubnub.getUUID(),{txt:txt});
    pubnub.setState({
        channels:[CHANNEL],
        state: {
            txt:txt            
        }
    });
}

//Sets the position of other users' mice in the canvas.
var lastsent = 0;
function setPos(xy) {
    updateUser(pubnub.getUUID(),{x:xy.x, y:xy.y, name:xy.name});
    var now = new Date().getTime();
    if(now-lastsent < 50) return;
    lastsent = now;
    pubnub.setState({
        channels:[CHANNEL],
        state: {
            x:xy.x,
            y:xy.y,
            name:xy.name
        }
    });
}

//Creates new users if they do not exist yet, otherwise updates the position of the mouse.
function updateUser(uuid,state) {
    if(!users[uuid]) {
        users[uuid] = new Sprite(state !== undefined ? state: "");
    }  
    users[uuid].setState(state);
}

//Removes the specified uuid from the list if users for tracking mouse movements.
function removeUser(uuid) {
    if(users[uuid]) {
        users[uuid].remove();
        delete users[uuid];
    }
}