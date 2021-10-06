import flatpickr from "flatpickr";
import { convertMs } from './functions.js'
import "flatpickr/dist/flatpickr.min.css";


const inputDate = document.querySelector('#date-selector');
const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

startButton.disabled = true;

// timer.style.display = flex;

let differents;

const options = {
    enableTime: true, //Enables time picker
    time_24hr: true, //Displays time picker in 24 hour mode without AM/PM selection when enabled.
    defaultDate: new Date(), //Sets the initial selected date(s).
        minuteIncrement: 1, //Adjusts the step for the minute input (incl. scrolling)
        onClose(selectedDates) { //Function(s) to trigger on every time the calendar is closed. See Events API
            
            if (selectedDates[0] <= options.defaultDate) {
            return alert('Please choose a date in the future')
        }
        else {
            startButton.disabled = false;
        }
        differents = (selectedDates[0] - options.defaultDate);
        // console.log(convertMs(dif).days);
    },
};


flatpickr(inputDate, options);

const addLeadingZero = function (value) {
    if (value.length < 2) {
      return value.padStart(2, '0');
    }
    return value;
};
// const intervalId;
startButton.addEventListener('click', () => {
    startButton.disabled = true;
    const intervalId = setInterval(() => {
        const { days, hours, minutes, seconds } = convertMs(differents);
        differents -= 1000;
        document.querySelector('span[data-days]').textContent = addLeadingZero(`${days}`)
        document.querySelector('span[data-hours]').textContent = addLeadingZero(`${hours}`)
        document.querySelector('span[data-minutes]').textContent = addLeadingZero(`${minutes}`)
        document.querySelector('span[data-seconds]').textContent = addLeadingZero(`${seconds}`)
        if (differents < 1) clearInterval(intervalId);
    }, 1000);
})
// stopButton.addEventListener('click', () => {
//     clearInterval(intervalId);
//     stopButton.disabled = true;
//     startButton.disabled = false;
// })

