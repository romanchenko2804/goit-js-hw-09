const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

const colorChanger = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;

    this.intervalId = setInterval(() => {
      bodyBGColorChanger();
    }, 1000);

    refs.start.setAttribute('disabled', 'disabled');
  },

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    refs.start.removeAttribute('disabled');
  },
};

refs.start.addEventListener('click', () => {
  colorChanger.start();
});

refs.stop.addEventListener('click', () => {
  colorChanger.stop();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function bodyBGColorChanger() {
  refs.body.style.backgroundColor = getRandomHexColor();
}
