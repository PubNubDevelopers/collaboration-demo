CoDoodler Collaboration Application
===================================

Welcome to PubNub's collaboration demo where you can draw with others in real-time.

<img src="/images/demo-example.png"/>

This is a multi-user drawing web application built using [PubNub's real-time network JavaScript API](https://www.pubnub.com/docs/sdks/javascript), [Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial), and vanilla JavaScript/HTML/CSS. No other libraries or frameworks are necessary.

You can draw with others connected to the application and see these results on their screen in real-time. The connected users' mice movements are tracked as they are drawing and moving around the canvas, and includes a text bubble that showcases a user-input name that is updated in real-time across all user instances.

## Features

* Users can draw and see each others' artwork update in real-time.
* Mouse movements are also tracked in real-time, so users can see the mouse movements of all those connected.
* Each user connected can type in a name, which appears under their stylus mouse. The names can be updated and will be updated in real-time.
* Clear your screen, or clear everyone's screen, by pressing on the waste basket icons.
* The number of users connected is tracked and updated in the top right-corner of the screen by making use of PubNub's Presence detection.
* Receive and display push notifications, regardless of application state.

## Demo
Try the [application!](www.pubnub.com/demos/codoodler-collaboration-demo/)

## Installing / Getting started
If you would like to build, run, and expand upon this application yourself, please follow the sections below. There is also a detailed tutorial on how this applciation was built located on PubNub's website.

### Requirements
- [Git](https://www.atlassian.com/git/tutorials/install-git)
- Your favorite IDE or code editor, such as [Visual Studio Code](https://code.visualstudio.com/).
- [PubNub Account](#pubnub-account) (*Free*)

<a href="https://dashboard.pubnub.com/signup">
	<img alt="PubNub Signup" src="https://i.imgur.com/og5DDjf.png" width=260 height=97/>
</a>

### Get Your PubNub Keys
1. Sign in to your [PubNub Dashboard](https://admin.pubnub.com/). You are now in the Admin Portal.
2. Go to Apps using the left-hand side navigation.
3. Click the Create New App button in the top-right of the Portal.
4. Give your app a name.
5. Click Create.
6. Click your new app to open its settings.
7. When you create a new app, the first set of keys are generated automatically. However, a single app can have as many keysets as you like. PubNub recommends that you create separate keysets for production and test environments.
8. Click on the keyset.
9. Enable two features for the keyset to be able to connect to the PubNub Network: Presence and Stream Controller.
10. Enable Presence by clicking on the slider to turn it on. A pop-up will require that you enter in “ENABLE”. Enter in “ENABLE” in all caps and then press the “Enable” button. Enable the "Generate Leave on TCP FIN or RST checkbox", which generates leave events when clients close their connection (used to track occupancy and remove non-connected clients in app). You can leave the rest of the default settings.
11. Enable Stream Controller by clicking on the slider to turn it on if it is already not enabled. You can leave the default settings.
12. Click on save changes.
13. Save the Publish and Subscribe Keys.

### Building and Running
1. Clone the GitHub repository.

	```bash
	git clone https://github.com/PubNubDevelopers/collaboration-demo.git
	```
2. Navigate to the folder, and open the js/app.js file.
3. Replace your publish and subscribe keys with the PUBLIC_KEY and SUBSCRIBE_KEY constants at the top of the file.
4. Open the index.html file in a browser. Enter in your name, move the mouse to see your name tracked with you.
5. Draw by holding down left click while moving.
6. Clear your screen by clicking on the top left waste basket icon.
7. Clear everyone's screen by clicking on the bottom left waste basket icon.
8. Open index.html in a new tab to have a new user join the drawing channel.
9. You can see their mouse movements and drawings in real-time. The occupancy count also reflects the users in the channel.

## Links

- Project homepage: https://pubnub.com
- Demo Link: https://www.pubnub.com/demos/codoodler-collaboration-demo/
- Tutorial Link: https://www.pubnub.com/tutorials/codoodler-collaboration/
- How-To create collaborative applications:
- Blog post on collaborative applications:

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
```
