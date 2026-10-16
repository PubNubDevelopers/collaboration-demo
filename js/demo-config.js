// Only for the hosted demo at pubnubdevelopers.github.io/collaboration-demo/ (the interactive demo on pubnub.com).
// Not part of the tutorial: on your own copy this file does nothing and js/config.js uses your keys.
// The hosted demo runs on PubNub's demo keyset, which has Access Manager on. Before js/config.js creates the
// client, this file swaps in the demo keys and gets an Access Manager token for the client's User ID from
// PubNub's demo token server, the same way the demo worked before the 2026 refresh.
;(function () {
  if (window.location.hostname !== 'pubnubdevelopers.github.io' && sessionStorage.getItem('codoodler-demo-keys') !== 'on') return

  const DEMO_PUBLISH_KEY = 'pub-c-b8772a67-0f83-478d-a25a-3fffef982565'
  const DEMO_SUBSCRIBE_KEY = 'sub-c-cb5cda16-3e13-42d1-af5d-9ff3ab0f352f'
  const TOKEN_SERVER = 'https://devrel-demos-access-manager.netlify.app/.netlify/functions/api/collaboration/grant'
  const SDK = window.PubNub

  // js/config.js calls new PubNub(...): create the client with the demo keys and give it a token.
  function DemoPubNub (configuration) {
    const pubnub = new SDK({ ...configuration, publishKey: DEMO_PUBLISH_KEY, subscribeKey: DEMO_SUBSCRIBE_KEY })
    try {
      // Synchronous on purpose: js/app.js starts right after js/config.js, and its first requests need the token.
      const request = new XMLHttpRequest()
      request.open('POST', TOKEN_SERVER, false)
      request.setRequestHeader('Content-Type', 'application/json')
      request.send(JSON.stringify({ UUID: configuration.userId }))
      const token = JSON.parse(request.responseText).body.token
      if (token) pubnub.setToken(token)
    } catch (error) {
      console.log('Demo token request failed:', error)
    }
    return pubnub
  }
  Object.setPrototypeOf(DemoPubNub, SDK) // Keep the SDK's static members.
  window.PubNub = DemoPubNub
})()
