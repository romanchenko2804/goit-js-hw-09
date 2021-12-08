const formRef = document.querySelector('.form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  
  let mainDelay = e.currentTarget.delay.valueAsNumber;
  const delayStep = e.currentTarget.step.valueAsNumber;
  const amountOfPromise = e.currentTarget.amount.valueAsNumber;
  

  for (let position = 1; position <= amountOfPromise; position += 1) {
    createPromise(position, mainDelay);
    mainDelay += delayStep;
  };
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  promise.then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    }).catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
