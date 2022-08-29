const refs = {
    start: document.querySelector ('button[data-start]'),
    stop: document.querySelector ('button[data-stop]'),
    body: document.querySelector ('body')
}

const TIMER_DELAY = 1000
let timerId = null
refs.stop.disabled = true



refs.start.addEventListener ('click', onStartBtn)
refs.stop.addEventListener ('click', onStopBtn)

function onStartBtn (){
    refs.body.style.backgroundColor = getRandomHexColor()
    refs.start.disabled = true
    refs.stop.disabled = false

   timerId = setInterval (() => {
     refs.body.style.backgroundColor = getRandomHexColor()
    }, 1000)
}

function onStopBtn () {
    clearInterval(timerId)

    refs.start.disabled = false
    refs.stop.disabled = true
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

