import Notiflix from "notiflix";

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((res, rej) =>{
      setTimeout(() => {
      if (shouldResolve) {
        res({ position, delay }); //res принимает только один параметр 
      } else {
        rej({ position, delay }) // по этому деструктуризируем 
      }
    }, delay)
    });
};

const form = document.querySelector('.form');
form.addEventListener('submit', e => {
  e.preventDefault(); // не сработает на кнопке
  // const amount = +e.target.elements['amount'].value;
  // const step = +e.target.elements['step'].value;
  // const delay = +e.target.elements['delay'].value;
  const { amount, step, delay } = form.elements;
  const amountNr = Number(amount.value);
  const stepNr = Number(step.value);
  const delayNr = Number(delay.value);
  for (let i = 0; i < amountNr; i++) {

    createPromise(i + 1, delayNr + stepNr * i)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});



