import { getRandomHexColor } from './functions.js';

const bodyStyle = document.querySelector('body');
const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
stopBUtton.disabled = true;

let getInterval;

const changeColor = () => {
        bodyStyle.style.backgroundColor = getRandomHexColor();
    getInterval = setInterval(() => {
        bodyStyle.style.backgroundColor = getRandomHexColor();
    }, 1000)
    startButton.disabled = true;
    stopButton.disabled = false;
};
startButton.addEventListener('click', changeColor);

stopButton.addEventListener('click', () => {
    clearInterval(getInterval);
    stopButton.disabled = true;
    startButton.disabled = false;
});

