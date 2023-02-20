const IDLE_TIMEOUT = false
const DRAW_WIDTH = 6
const PENCIL_IMAGE = "images/pencil2.png"
const PENCIL_WIDTH = "22px";
const PENCIL_HEIGHT = "22px"
const PENCIL_TRANSFORM = "rotate(0deg)";
const PENCIL_X_OFFSET = 125;
const PENCIL_Y_OFFSET = 125;
const PENCIL_SPRITE_X_ADJUST = 2;
const PENCIL_SPRITE_Y_ADJUST = 80;
const ERASE_WIDTH = DRAW_WIDTH + 2;
const CLEAR_LINE_OFFSET_DURATION = 1000;

const PUBLIC_KEY = "pub-c-b8772a67-0f83-478d-a25a-3fffef982565";
const SUBSCRIBE_KEY = "sub-c-cb5cda16-3e13-42d1-af5d-9ff3ab0f352f";
//const PUBLIC_KEY = "";
//const SUBSCRIBE_KEY = "";

// PubNub Connection Object.
var pubnub = new PubNub({
    publishKey: PUBLIC_KEY,
    subscribeKey: SUBSCRIBE_KEY,
    uuid:("" + self.crypto.getRandomValues(new Uint32Array(1))),
    presenceTimeout:20
});

function setRandomSpriteColor()
{
    //  Sprite colour is handled in CSS
    return;
}

function actionCompleted()
{
    //  Override for interactive demo - do nothing
    return;
}
