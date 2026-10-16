// Feature tracking for the interactive demo on pubnub.com. Not part of the tutorial.
// The demo page embeds this app with ?identifier=<visitor ID> and ticks off the features listed in
// features.json as the visitor tries them. Without that parameter this file does nothing.
// It watches the page on its own, so js/app.js doesn't know about it.
;(function () {
  const identifier = new URLSearchParams(window.location.search).get('identifier')
  if (!identifier || !/^[A-Za-z0-9_-]{1,64}$/.test(identifier)) return

  // PubNub's keys for the demo page (the 'demo' channel), not the keys in js/config.js.
  const pub = 'pub-c-c8d024f7-d239-47c3-9a7b-002f346c1849'
  const sub = 'sub-c-95fe09e0-64bb-4087-ab39-7b14659aab47'
  const sent = new Set()

  // Publish { id, feature } once per feature with the REST API.
  function trackFeature (feature) {
    if (sent.has(feature)) return
    sent.add(feature)
    const message = encodeURIComponent(JSON.stringify({ id: identifier, feature }))
    fetch('https://ps.pndsn.com/publish/' + pub + '/' + sub + '/0/demo/myCallback/' + message +
      '?store=0&uuid=' + encodeURIComponent(identifier)).catch(() => {})
  }

  document.getElementById('nameInput').addEventListener('input', event => {
    if (event.target.value.trim()) trackFeature('Give yourself a name')
  })
  document.getElementById('drawCanvas').addEventListener('pointermove', event => {
    if (event.buttons === 1) trackFeature('Draw on the canvas')
  })
  document.getElementById('clearSelfCanvasButton').addEventListener('click', () => trackFeature('Clear your canvas'))
  document.getElementById('clearAllCanvasButton').addEventListener('click', () => trackFeature('Clear the canvas for all'))

  const occupancy = document.getElementById('occupancy')
  new MutationObserver(() => {
    if (Number(occupancy.textContent) > 1) trackFeature('Draw with another user (You might need to open a new tab)')
  }).observe(occupancy, { childList: true, characterData: true, subtree: true })
})()
