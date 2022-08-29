import { Notify } from 'notiflix/build/notiflix-notify-aio';


const refs = {
  delay: document.querySelector ('input[name="delay"]'),
  step: document.querySelector ('input[name="step"]'),
  amount: document.querySelector ('input[name="amount"]'),
  form: document.querySelector ('.form')
}

refs.form.addEventListener ('submit', formSubmit)

function formSubmit (e) {
  e.preventDefault()

  let delay = Number(refs.delay.value)
  let step = Number(refs.step.value)
  let amount = Number (refs.amount.value)

  for (let i = 1; i <= amount; i += 1) {
    let position = i
    createPromise (position, delay).then(Notify.success).catch (Notify.failure)
    delay += step
  }
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3
    return new Promise ((resolve, reject) => {
      setTimeout (() => {
        if (shouldResolve) {
          resolve (`✅ Fulfilled promise ${position} in ${delay}ms`)
        } else {
          reject (`❌ Rejected promise ${position} in ${delay}ms`)
        }
      }, delay)
    })
}