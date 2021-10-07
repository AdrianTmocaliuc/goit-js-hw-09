import { getRandomHexColor } from './functions.js';


const refs = {
    bodyStyle: document.querySelector('body'),
    startButton: document.querySelector('button[data-start]'),
    stopButton: document.querySelector('button[data-stop]'),
}
// const bodyStyle = document.querySelector('body');
// const startButton = document.querySelector('button[data-start]');
// const stopButton = document.querySelector('button[data-stop]');
refs.stopButton.disabled = true;

let getInterval;

const changeColor = () => {
        refs.bodyStyle.style.backgroundColor = getRandomHexColor();
    getInterval = setInterval(() => {
        refs.bodyStyle.style.backgroundColor = getRandomHexColor();
    }, 1000)
    refs.startButton.disabled = true;
    refs.stopButton.disabled = false;
};
refs.startButton.addEventListener('click', changeColor);

refs.stopButton.addEventListener('click', () => {
    clearInterval(getInterval);
    refs.stopButton.disabled = true;
    refs.startButton.disabled = false;
});

