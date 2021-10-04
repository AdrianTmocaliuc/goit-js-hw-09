import { getRandomHexColor } from './functions.js';


const bodyStyle = document.querySelector('body');
const startBUtton = document.querySelector('button')

console.log(startBUtton.dataset.start)

startBUtton.addEventListener('click', e => {
    // e.target.dataset.start = bodyStyle.style.backgroundColor = 'black';
    if (e.target.dataset.start) {
        bodyStyle.style.backgroundColor = 'black';
    };
    if (e.target.dataset.stop) {
        bodyStyle.style.backgroundColor = 'red';
    };
});
// console.log(getRandomHexColor());
bodyStyle.style.backgroundColor = 'black';
