const body = document.querySelector('body');
const start = document.querySelector('[data-action="start"]');
const stop = document.querySelector('[data-action="stop"]');
let stopBtn;
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const switchColor = () =>{
    stopBtn = setInterval(() => {
      let arrayElement = colors[randomIntegerFromInterval(0, colors.length - 1)]
      body.style.backgroundColor = arrayElement;
    }, 1000);
  }
  start.addEventListener('click', () => {
    switchColor();
    start.disabled = true;
  })

  stop.addEventListener('click', () => {
    clearTimeout(stopBtn);
    start.disabled = false;
  })
