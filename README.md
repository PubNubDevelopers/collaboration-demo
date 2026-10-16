CoDoodler Collaboration Application
===================================

Welcome to PubNub's collaboration demo where you can draw with others in real-time.

<img src="/images/demo-example.png"/>

This is a multi-user drawing web application built using [PubNub's real-time network JavaScript API](https://www.pubnub.com/docs/sdks/javascript), [Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial), and vanilla JavaScript/HTML/CSS. No other libraries or frameworks are necessary.

You can draw with others connected to the application and see these results on their screen in real-time. The connected users' mice movements are tracked as they are drawing and moving around the canvas, and includes a text bubble that showcases a user-input name that is updated in real-time across all user instances.

## Features

* Users draw and see each other's artwork in real time (PubNub messages).
* Everyone's cursor moves in real time (PubNub signals).
* Each user can type a name, which appears on their cursor for everyone (Presence state).
* Clear your screen, or everyone's screen, with the waste basket icons.
* The number of users on the canvas shows in the top-right corner (Presence).

Tested with the PubNub JavaScript SDK 13.1.2 (October 2026).

## Demo
Try the [application](https://www.pubnub.com/demos/codoodler-collaboration-demo/).

## Installing / Getting started
There is a step-by-step [tutorial](https://www.pubnub.com/tutorials/collaboration-codoodler/) on PubNub's website.

### Requirements
- A current browser: Chrome, Firefox, Safari or Edge
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- A code editor, such as [Visual Studio Code](https://code.visualstudio.com/)
- A free [PubNub account](https://admin.pubnub.com/signup)

### Get your PubNub keys
1. Sign in to the [Admin Portal](https://admin.pubnub.com/).
2. Go to **Apps & Keysets**, click **Create app** and give it a name.
3. Open the app and click **Create keyset**. Enter a name, keep the environment on **Testing** and click **Next**.
4. Presence is already on. Under **Presence**, choose **All channels**, then click **Create**. With the default, **Selected channels only**, the cursors, names and user count stay empty until you add a Presence rule for `collaboration-demo`.
5. Copy the **Publish key** and the **Subscribe key**.

You can also create the keyset from your AI coding tool with the [PubNub MCP Server](https://www.pubnub.com/docs/ai-development/set-up-mcp-server).

### Building and running
1. Clone the repository:

	```bash
	git clone https://github.com/PubNubDevelopers/collaboration-demo.git
	```
2. Open `js/config.js` and replace `YOUR_PUBLISH_KEY` and `YOUR_SUBSCRIBE_KEY` with your keys.
3. Open `index.html` in a browser. Type your name and move the mouse: your name follows your cursor.
4. Draw by holding down the left mouse button while you move.
5. Open `index.html` in a second browser window to join as another user. You see each other's drawings, cursors and names, and the user count goes up.
6. **Clear** (top left) clears your screen; **Clear All** (bottom left) clears everyone's.

After 30 seconds without input you leave the canvas and see a timeout page.

### Interactive demo on pubnub.com

The interactive demo on pubnub.com embeds this app from GitHub Pages (`pubnubdevelopers.github.io/collaboration-demo/?identifier=<visitor ID>`). Three files exist only for it and aren't part of the tutorial; you can delete them in your own copy:

- `js/demo-config.js` runs only on `pubnubdevelopers.github.io`. The hosted demo uses PubNub's demo keyset, which has Access Manager on, so this file swaps in the demo keys and gets a token from PubNub's demo token server before `js/config.js` creates the client. On your copy it does nothing.
- `js/demo-tracking.js` and `features.json` tick off the features in `features.json` as the visitor tries them. Without `?identifier=` the script does nothing.

## Links

- Demo Link: https://www.pubnub.com/demos/codoodler-collaboration-demo/
- Tutorial Link: https://www.pubnub.com/tutorials/collaboration-codoodler/

## License
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

