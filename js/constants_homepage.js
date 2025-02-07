const IDLE_TIMEOUT = false
const DRAW_WIDTH = 6
const PENCIL_IMAGE = 'images/pencil2.png'
const PENCIL_WIDTH = '22px'
const PENCIL_HEIGHT = '22px'
const PENCIL_TRANSFORM = 'rotate(0deg)'
const PENCIL_X_OFFSET = 125
const PENCIL_Y_OFFSET = 125
const PENCIL_SPRITE_X_ADJUST = 2
const PENCIL_SPRITE_Y_ADJUST = 80
const ERASE_WIDTH = DRAW_WIDTH + 2
const CLEAR_LINE_OFFSET_DURATION = 1000
var visible = document.visibilityState == 'visible'
var timerHandle = null

const PUBLISH_KEY = 'pub-c-dab42aa6-7dfe-431f-a1c2-f286ff85b7d9'
const SUBSCRIBE_KEY = 'sub-c-a279d57d-7905-42cd-9a43-97ce0433d98f'

// PubNub Connection Object.
var pubnub = new PubNub({
  publishKey: PUBLISH_KEY,
  subscribeKey: SUBSCRIBE_KEY,
  uuid: '' + self.crypto.getRandomValues(new Uint32Array(1))
})

async function loadCollaborationHomepage(){
  loginHomepage(pubnub.getUUID()).then((token) => {
    if(token != null){
      try {
        const ttl = pubnub.parseToken(token).ttl  //  minutes
        pubnub.setToken(token);
        setTimeout(refreshToken, (((ttl * 60) - 45) * 1000))  //  Refresh the token 45s before it expires
        //  Ideally this code needs refactoring but since app.js is largely legacy, this approach
        //  is the least risky
        let scriptEle = document.createElement("script");
        scriptEle.setAttribute("src", "https://pubnubdevelopers.github.io/collaboration-demo/js/app.js");
        document.body.appendChild(scriptEle);
      }
      catch(e){
        console.log(e);
      }
    }  
  });
}

async function refreshToken()
{
  var token = await loginHomepage(pubnub.getUUID());
  if(token != null){
    try {
      const ttl = pubnub.parseToken(token).ttl  //  minutes
      pubnub.setToken(token);
      setTimeout(refreshToken, (((ttl * 60) - 45) * 1000))  //  Refresh the token 45s before it expires
    }
    catch(e){
      console.log(e);
    }
  }
}

document.addEventListener('visibilitychange', onVisibilityChange)
window.addEventListener('resize', onWindowResize, false)

function onVisibilityChange (evt) {
  visible = document.visibilityState == 'visible'
  if (visible) {
    if (timerHandle === null) {
      //  Window is visible Start the simulated users
      timerHandle = setTimeout(simulateUser, 1100)
    }
  } else {
    if (timerHandle != null) {
      clearTimeout(timerHandle)
      timerHandle = null
    }
  }
}

function onWindowResize () {
  resizeCanvas()
}

function homepageLoad () {
  resizeCanvas()

  //  Start the simulated (ghost) users
  if (timerHandle === null) {
    //  Window is visible Start the simulated users
    timerHandle = setTimeout(simulateUser, 1100)
  }
}

function resizeCanvas () {
  //  The homepage sits within several styles which is causing an issue with the default drawing logic
  //  for canvas.  Reset the width and height after the page loads or on resize.
  var canvas = document.getElementById('drawCanvas')
  if (window.innerWidth != 0) {
    var ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    ctx.lineCap = ctx.lineJoin = 'round'
  }
}

//  Simulate users on the homepage to show how to use the demo & make it feel more interactive
async function simulateUser () {
  //  Random wait in between animations
  try {
    startWorkerSimulator(
      messages[getRandomInt(0, messages.length - 1)],
      names[getRandomInt(0, names.length - 1)]
    )
  } catch (ex) {
    //  Most likely, the deferred script has not loaded
    console.log('Could not load simulated users, will retry...')
  }
  var randomWait = getRandomInt(10000, 20000) //  Delay inbetween each drawing (including the time to draw the current drawing)
  timerHandle = setTimeout(simulateUser, randomWait)
}

//  Invoke the UI directly to draw the animation
//  Another option would be to host a backend which is pumping updates --> longer term goal
async function startWorkerSimulator (msgs, name) {
  if (typeof updateUser !== 'function') {
    return;
  }
  var packet = []
  for (var i = 0; i < msgs.length; i++) {
    if (!visible) {
      removeUser('Helper')
      return
    }
    packet.push(msgs[i].data[0])
    updateUser('Helper', {
      x: msgs[i].data[0].newCoordinates.x,
      y: msgs[i].data[0].newCoordinates.y,
      name: name
    })
    drawFromStream({ data: packet })
    await sleep(30)
    packet = []
  }
  removeUser('Helper')
}

//  Helper
function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

//  Helper
function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function setRandomSpriteColor () {
  //  Sprite colour is handled in CSS
  return
}

function actionCompleted () {
  //  Override for interactive demo - do nothing
  return
}
