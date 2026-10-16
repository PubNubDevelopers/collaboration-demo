// Set your PubNub keys here (step 2 of the tutorial).
const pubnub = new PubNub({
  publishKey: 'YOUR_PUBLISH_KEY',
  subscribeKey: 'YOUR_SUBSCRIBE_KEY',
  userId: 'doodler-' + self.crypto.getRandomValues(new Uint32Array(1))[0], // A new random User ID for every page load.
  presenceTimeout: 20 // Seconds without a heartbeat before PubNub reports a timeout.
})
