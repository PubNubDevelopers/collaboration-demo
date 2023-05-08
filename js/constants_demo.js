const IDLE_TIMEOUT = true
const NAME_AUTOFOCUS = true
const DRAW_WIDTH = 3
const PENCIL_IMAGE = 'images/pencil.png'
const PENCIL_WIDTH = '45px'
const PENCIL_HEIGHT = '45px'
const PENCIL_TRANSFORM = 'rotate(130deg)'
const PENCIL_X_OFFSET = 140
const PENCIL_Y_OFFSET = 80
const PENCIL_SPRITE_X_ADJUST = 0
const PENCIL_SPRITE_Y_ADJUST = 0

const PUBLISH_KEY = 'pub-c-b8772a67-0f83-478d-a25a-3fffef982565'
const SUBSCRIBE_KEY = 'sub-c-cb5cda16-3e13-42d1-af5d-9ff3ab0f352f'
const UUID = '' + self.crypto.getRandomValues(new Uint32Array(1));
var token = null;
// PubNub Connection Object.
var pubnub = new PubNub({
  publishKey: PUBLISH_KEY,
  subscribeKey: SUBSCRIBE_KEY,
  uuid: UUID,
  presenceTimeout: 20
});

async function loadCollaboration(){
  token = await login(UUID);

  if(token != null){
    try {
      //  Although the Access Manager token will timeout after a pre-set period of time
      //  this time is set to greater than the IDLE_TIMEOUT (The latter is 30 seconds,
      //  the former is a few hours)
      pubnub.setToken(token);
      let scriptEle = document.createElement("script");
      scriptEle.setAttribute("src", "https://pubnubdevelopers.github.io/collaboration-demo/js/app.js");
      document.body.appendChild(scriptEle);
    }
    catch(e){
      console.log(e);
    }
  }
}

function setRandomSpriteColor (ele) {
  var rgb = {
    r: Math.floor(Math.random() * 255),
    g: Math.floor(Math.random() * 255),
    b: Math.floor(Math.random() * 255)
  }
  ele.div.style.backgroundColor = `rgba(${rgb.r},${rgb.g},${rgb.b}, 0.75)`
  ele.div.style.borderColor = `rgba(${rgb.r},${rgb.g},${rgb.b}, 1)`
}