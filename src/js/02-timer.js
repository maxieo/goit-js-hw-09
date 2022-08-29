import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"
import Notiflix from "notiflix";
import { Notify } from 'notiflix/build/notiflix-notify-aio';



const refs = {
    input: document.querySelector ('#datetime-picker'),
    startBtn: document.querySelector ('button[data-start]'),
    days: document.querySelector ('.value[data-days]'),
    hours: document.querySelector ('.value[data-hours]'),
    minutes: document.querySelector ('.value[data-minutes]'),
    seconds: document.querySelector ('.value[data-seconds]'),
}
let time = null
const TIMER_DELAY = 1000

refs.startBtn.addEventListener ('click', () => {timerOn.start()})
refs.startBtn.disabled = true

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      time = selectedDates[0]
      if (time < Date.now()) {
        Notify.failure ("Please choose a date in the future")
        
      }else {
        refs.startBtn.disabled = false
      }
      return time
    },
  };

  flatpickr('#datetime-picker', options);



  class Timer {
    constructor ({onTick}) {
        this.intervalId = null
        this.onTick = onTick
    }
    start () {
        refs.input.disabled = true
        refs.startBtn.disbled = true
        this.intervalId = setInterval (() => {
            const currentTime = Date.now ()
            const deltaTime = time - currentTime
            const { days, hours, minutes, seconds } = this.convertMs(deltaTime)
            const timer = { days, hours, minutes, seconds }
            
            this.onTick (timer)
            if (days === '00' && hours === '00' && minutes === '00' && seconds === '00'){
                clearInterval (this.intervalId)
                refs.input.disabled = false
            }
        }, TIMER_DELAY)
    }
  
   addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }
     convertMs(ms) {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
    
        const days = this.addLeadingZero(Math.floor(ms / day));
        const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
        const minutes = this.addLeadingZero(Math.floor(((ms % day) % hour) / minute));
        const seconds = this.addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
    
        return { days, hours, minutes, seconds };
  }
}



  const timerOn = new Timer ({
    onTick: updateTimer
  })

  function updateTimer ({ days, hours, minutes, seconds }) {
    refs.days.textContent = days
    refs.hours.textContent = hours
    refs.minutes.textContent = minutes
    refs.seconds.textContent = seconds
  }
