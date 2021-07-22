const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const newYear = "Januar 01 2022";

function countDown() {
    const newYearDate = new Date(newYear);
    const currDate = new Date();

    //miliseconds
    var diff = Math.abs(newYearDate - currDate);

    const seconds = getBetterTime(Math.floor((diff / 1000) % 60));
    const minutes = getBetterTime(Math.floor(((diff / 1000) / 60) % 60));
    const hours = getBetterTime(Math.floor((diff / 1000 / (60 * 60)) % 24));
    const days = Math.floor(diff /1000 / 60 / 60 / 24); 

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}

function getBetterTime(time) {
    if(time < 10) {
        return '0'+time;
    }
    return time;
}

countDown();
setInterval(countDown, 1000);