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

const PUBLISH_KEY = 'pub-c-dab42aa6-7dfe-431f-a1c2-f286ff85b7d9'
const SUBSCRIBE_KEY = 'sub-c-a279d57d-7905-42cd-9a43-97ce0433d98f'
const UUID = '' + self.crypto.getRandomValues(new Uint32Array(1));
var token = null;
// PubNub Connection Object.
var pubnub = new PubNub({
  publishKey: PUBLISH_KEY,
  subscribeKey: SUBSCRIBE_KEY,
  uuid: UUID
});

async function loadCollaboration(){
  token = await login(UUID);

  if(token != null){
    try{
      pubnub.setToken(token);
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
