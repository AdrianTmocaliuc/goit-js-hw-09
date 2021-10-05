import flatpickr from "flatpickr";
import { convertMs } from './functions.js'
import "flatpickr/dist/flatpickr.min.css";


const inputDate = document.querySelector('#date-selector');
const startButton = document.querySelector('button[data-start]');
const stopBUtton = document.querySelector('button[data-stop]');
const timer = document.querySelector('#timer');
const chronTimer = document.querySelector('#filed');
const valueTimer = document.querySelector('#value');
const ladelTimer = document.querySelector('#label');
startButton.disabled = true;


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
        const dif = selectedDates[0] - options.defaultDate;
        console.log(convertMs(dif).days);
    },
};

// console.log(options.onClose(selectedDates));

flatpickr(inputDate, options);
// console.log(document.querySelector('#value').textContent);

