function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
    start: document.querySelector('[data-start]'),
    stop: document.querySelector('[data-stop]'),
    body: document.querySelector('body'),
};

refs.body.style.backgroundColor = getRandomHexColor;

refs.start.addEventListener('click', () => {

});

refs.stop.addEventListener('click', () => {
    
});


setInterval(() => {
    
}, 1000);