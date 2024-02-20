const monthsEl = document.getElementById('months');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const quitting = '1 Feb 2024';

function countdown() {
  const quittingDate = new Date(quitting);
  const currentDate = new Date();
  const remainingTime = quittingDate.getTime() - currentDate.getTime();

  const months = Math.floor(remainingTime / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor((remainingTime / (1000 * 60 * 60 * 24)) % 30);
  const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
  const seconds = Math.floor((remainingTime / 1000) % 60);

  monthsEl.innerHTML = roundTime(months);
  daysEl.innerHTML = roundTime(days);
  hoursEl.innerHTML = roundTime(hours);
  minsEl.innerHTML = roundTime(minutes);
  secondsEl.innerHTML = roundTime(seconds);
}

function roundTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
