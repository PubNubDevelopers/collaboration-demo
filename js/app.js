// CoDoodler: draw together on one canvas.
// Strokes are messages, cursor positions are signals, names are Presence state.
// The pubnub client is created in js/config.js.

// Properties
const CHANNEL = 'collaboration-demo'
const BATCH_SIZE = 10 // How many line segments go into one publish.
const SIGNAL_INTERVAL = 50 // Send your cursor position at most every 50 ms.
const NAME_DELAY = 300 // Wait until you stop typing for 300 ms before sending your name.
const IDLE_TIMEOUT = 30000 // Leave the channel after 30 seconds without input.
const MAX_NAME_LENGTH = 20
const DRAW_WIDTH = 3
const PENCIL_IMAGE = 'images/pencil.png'
const PENCIL_SIZE = '45px'
const PENCIL_TRANSFORM = 'rotate(130deg)'
const PENCIL_X_OFFSET = 140
const PENCIL_Y_OFFSET = 80

const users = {} // Cursors of the users on the channel, by User ID.
let plots = [] // Line segments not published yet.
let oldCoordinates = {} // Where the current line segment starts.
let idleTimer = 0
let nameTimer = 0
let lastSignal = 0
let positionTimer = 0

// Your name starts as a placeholder and is replaced as soon as you type one.
const placeholder = placeholderName(pubnub.getUserId())
let username = placeholder

// Canvas and drawing settings
const canvas = document.getElementById('drawCanvas')
const ctx = canvas.getContext('2d')
const spriteContainer = document.getElementById('sprite-container')
const nameInput = document.getElementById('nameInput')
let color = document.querySelector(':checked').getAttribute('data-color')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
ctx.lineCap = ctx.lineJoin = 'round'

// Subscribe to the channel to get strokes (messages), cursors (signals) and who's online (presence events).
const subscription = pubnub.channel(CHANNEL).subscription({ receivePresenceEvents: true })

subscription.onMessage = event => {
  if (event.publisher === pubnub.getUserId()) return // You already drew it.
  const message = event.message
  if (message && message.clear === true) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  } else if (message && Array.isArray(message.data)) {
    drawFromStream(message.data)
  }
}

subscription.onSignal = event => {
  if (event.publisher === pubnub.getUserId()) return
  const position = event.message || {}
  if (Number.isFinite(position.x) && Number.isFinite(position.y)) {
    getUser(event.publisher).moveTo(position.x, position.y)
  }
}

subscription.onPresence = event => {
  if (event.action !== 'state-change') setOccupancy(event.occupancy) // state-change events carry no occupancy.
  if (event.action === 'interval') { // On busy channels PubNub batches joins and leaves into interval events.
    if (event.hereNowRefresh) loadUsers() // Without Presence Deltas the event has no lists, so ask again.
    ;[...(event.leave || []), ...(event.timeout || [])].forEach(removeUser)
    return
  }
  if (event.uuid === pubnub.getUserId()) return
  switch (event.action) {
    case 'join':
    case 'state-change':
      if (event.state) getUser(event.uuid).setName(cleanName(event.state.name) || placeholderName(event.uuid))
      break
    case 'leave':
    case 'timeout':
      removeUser(event.uuid)
      break
  }
}

pubnub.addListener({
  status: statusEvent => {
    if (statusEvent.category === 'PNConnectedCategory') {
      sendName() // Your name goes out once you're on the channel.
      loadUsers()
    }
  }
})

subscription.subscribe()

// Leave the channel when the tab closes, so your cursor disappears for the others right away.
window.addEventListener('pagehide', () => subscription.unsubscribe())
// Back button: the browser restored this page from its cache, so subscribe again.
window.addEventListener('pageshow', event => {
  if (event.persisted) subscription.subscribe()
})

// Ask PubNub who is on the channel now, with their names.
async function loadUsers () {
  try {
    const result = await pubnub.hereNow({ channels: [CHANNEL], includeState: true })
    setOccupancy(result.totalOccupancy)
    const occupants = (result.channels[CHANNEL] && result.channels[CHANNEL].occupants) || []
    const present = new Set(occupants.map(occupant => occupant.uuid))
    Object.keys(users).forEach(userId => { // Remove cursors of users who left while you weren't listening.
      if (userId !== pubnub.getUserId() && !present.has(userId)) removeUser(userId)
    })
    occupants.forEach(occupant => {
      if (occupant.uuid === pubnub.getUserId()) return
      const state = occupant.state || {}
      getUser(occupant.uuid).setName(cleanName(state.name) || placeholderName(occupant.uuid))
    })
  } catch (error) {
    console.log(error)
  }
}

// Publish line segments to everyone on the channel.
async function publish (data) {
  try {
    await pubnub.publish({ channel: CHANNEL, message: data })
  } catch (error) {
    console.log(error)
  }
}

// Store your name in Presence state. The others get it as a state-change event.
async function sendName () {
  try {
    await pubnub.setState({ channels: [CHANNEL], state: { name: username } })
  } catch (error) {
    console.log(error)
  }
}

// Send your cursor position as a signal: small, fast and not stored.
function sendPosition (x, y) {
  clearTimeout(positionTimer)
  const wait = SIGNAL_INTERVAL - (Date.now() - lastSignal)
  if (wait > 0) { // Too soon: send this position when the interval is over, unless a newer one comes first.
    positionTimer = setTimeout(() => sendPosition(x, y), wait)
    return
  }
  lastSignal = Date.now()
  pubnub.signal({ channel: CHANNEL, message: { x, y } }).catch(error => console.log(error))
}

function setOccupancy (occupancy) {
  if (!Number.isFinite(occupancy)) return
  document.getElementById('occupancy').textContent = occupancy
  document.getElementById('unit').textContent = occupancy === 1 ? 'doodler' : 'doodlers'
}

// Letters, digits, spaces and _ only. Anyone with the keys can set state, so names from the network go through this too.
function cleanName (name) {
  return String(name ?? '').replace(/[^\p{L}\p{N}_ ]/gu, '').substring(0, MAX_NAME_LENGTH).trim()
}

function placeholderName (userId) {
  return 'ANON_' + String(userId).slice(-4)
}

// Controls
document.getElementById('colorSwatch').addEventListener('click', () => {
  color = document.querySelector(':checked').getAttribute('data-color')
})

// Clear: clears only your canvas.
document.getElementById('clearSelfCanvasButton').addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
})

// Clear All: clears your canvas and tells everyone else to clear theirs.
document.getElementById('clearAllCanvasButton').addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  publish({ clear: true })
})

// Your name: shown on your cursor at once, sent when you stop typing.
nameInput.addEventListener('input', () => {
  username = cleanName(nameInput.value) || placeholder
  getUser(pubnub.getUserId()).setName(username)
  clearTimeout(nameTimer)
  nameTimer = setTimeout(sendName, NAME_DELAY)
})

// Don't allow selecting text in the name input (it interferes with the cursor label).
nameInput.addEventListener('select', function () {
  this.selectionStart = this.selectionEnd
})

// Track your cursor: move your own label and send the position to the others.
window.addEventListener('pointermove', event => {
  getUser(pubnub.getUserId()).moveTo(event.clientX, event.clientY)
  sendPosition(event.clientX, event.clientY)
})

// Leave the channel after 30 seconds without input. Any input resets the timer.
; ['pointermove', 'pointerdown', 'keydown'].forEach(type => document.addEventListener(type, resetIdleTime))
resetIdleTime()

function resetIdleTime () {
  clearTimeout(idleTimer)
  idleTimer = setTimeout(idleUnsubscribe, IDLE_TIMEOUT)
}

function idleUnsubscribe () {
  subscription.unsubscribe() // The others get a leave event and remove your cursor.
  window.location.replace('./timeout.html')
}

// Drawing: pointer events cover the mouse, pens and touch.
let drawing = false
canvas.addEventListener('pointerdown', startDraw)
canvas.addEventListener('pointermove', draw)
canvas.addEventListener('pointerup', endDraw)
canvas.addEventListener('pointercancel', endDraw)

function drawOnCanvas (color, startCoordinates, endCoordinates) {
  ctx.strokeStyle = color
  ctx.lineWidth = DRAW_WIDTH
  ctx.beginPath()
  ctx.moveTo(startCoordinates.x, startCoordinates.y)
  ctx.lineTo(endCoordinates.x, endCoordinates.y)
  ctx.stroke()
}

// Draw the line segments another user published. Skip anything that isn't a segment.
function drawFromStream (segments) {
  segments.forEach(segment => {
    if (!segment || typeof segment.color !== 'string') return
    const { oldCoordinates: start, newCoordinates: end } = segment
    if (isPoint(start) && isPoint(end)) drawOnCanvas(segment.color, start, end)
  })
}

function isPoint (point) {
  return !!point && Number.isFinite(point.x) && Number.isFinite(point.y)
}

function pointerPosition (e) {
  return { x: e.offsetX << 0, y: e.offsetY << 0 } // Whole pixels.
}

// Pointer down: remember where the line starts.
function startDraw (e) {
  e.preventDefault()
  canvas.setPointerCapture(e.pointerId) // Keep getting moves even if the pointer leaves the canvas.
  drawing = true
  oldCoordinates = pointerPosition(e)
}

// Pointer move while drawing: draw, and publish every BATCH_SIZE segments.
function draw (e) {
  if (!drawing) return
  const newCoordinates = pointerPosition(e)
  drawOnCanvas(color, oldCoordinates, newCoordinates)
  plots.push({ color, oldCoordinates, newCoordinates })
  // Publishing in batches keeps the number of requests down; browsers throttle many parallel requests.
  if (plots.length >= BATCH_SIZE) {
    publish({ data: plots })
    plots = []
  }
  oldCoordinates = newCoordinates
}

// Pointer up: publish what's left.
function endDraw () {
  if (!drawing) return
  drawing = false
  if (plots.length > 0) publish({ data: plots })
  plots = []
  oldCoordinates = {}
  nameInput.focus()
}

// Cursors
function getUser (userId) {
  if (!users[userId]) users[userId] = new Sprite(userId === pubnub.getUserId(), placeholderName(userId))
  return users[userId]
}

function removeUser (userId) {
  if (users[userId]) {
    users[userId].remove()
    delete users[userId]
  }
}

// A cursor: a pencil with a name label that glides to the last position it got.
function Sprite (isSelf, name) {
  this.x = this.tx = 100
  this.y = this.ty = 100
  this.animating = false
  this.div = document.createElement('div')
  this.div.classList.add('sprite')
  if (!isSelf) this.div.classList.add('remoteSprite')
  this.div.style.display = 'none' // Hidden until the first position arrives.
  this.div.style.pointerEvents = 'none' // Clicks go through to the canvas.

  this.label = document.createElement('span')
  this.label.textContent = name // textContent, so a name can't inject HTML.
  this.div.appendChild(this.label)
  setRandomSpriteColor(this.div)

  const img = document.createElement('img')
  img.src = PENCIL_IMAGE
  img.style.position = 'absolute'
  img.style.width = img.style.height = PENCIL_SIZE
  img.style.transform = PENCIL_TRANSFORM
  img.style.left = 100 - PENCIL_X_OFFSET + 'px'
  img.style.bottom = 100 - PENCIL_Y_OFFSET + 'px'
  this.div.appendChild(img)

  spriteContainer.appendChild(this.div)
}

Sprite.prototype.setName = function (name) {
  this.label.textContent = name
}

Sprite.prototype.moveTo = function (x, y) {
  const bounds = spriteContainer.getBoundingClientRect()
  this.tx = Math.min(x, bounds.width + 40)
  this.ty = Math.min(y, bounds.height + 20)
  if (this.div.style.display === 'none') { // First position: jump there.
    this.x = this.tx
    this.y = this.ty
    this.div.style.display = 'block'
  }
  if (!this.animating) {
    this.animating = true
    this.update()
  }
}

// Move 4 px per frame towards the target, then stop.
Sprite.prototype.update = function () {
  const speed = 4
  const dx = this.tx - this.x
  const dy = this.ty - this.y
  if (Math.sqrt(dx * dx + dy * dy) < speed) {
    this.x = this.tx
    this.y = this.ty
    this.animating = false
  } else {
    this.x += Math.abs(dx) > speed ? Math.sign(dx) * speed : dx
    this.y += Math.abs(dy) > speed ? Math.sign(dy) * speed : dy
    requestAnimationFrame(() => this.update())
  }
  this.div.style.left = this.x + 'px'
  this.div.style.top = this.y + 'px'
}

Sprite.prototype.remove = function () {
  this.div.remove()
}

function setRandomSpriteColor (div) {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)
  div.style.backgroundColor = `rgba(${r},${g},${b}, 0.75)`
  div.style.borderColor = `rgba(${r},${g},${b}, 1)`
}
