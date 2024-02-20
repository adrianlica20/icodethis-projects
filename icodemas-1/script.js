const daysEl = document.querySelector('.days');
const hoursEl = document.querySelector('.hours');
const minutesEl = document.querySelector('.minutes');
const secondsEl = document.querySelector('.seconds');

function christmasCounter() {
  const christmas = new Date('December 25, 2024 00:00:00').getTime();
  const today = new Date().getTime();
  const timeRemaining = christmas - today;

  let seconds = Math.floor(timeRemaining / 1000) % 60;
  let minutes = Math.floor(timeRemaining / (1000 * 60)) % 60;
  let hours = Math.floor(timeRemaining / (1000 * 60 * 60)) % 24;
  let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

  daysEl.textContent = days.toString().padStart(2, '0');
  hoursEl.textContent = hours.toString().padStart(2, '0');
  minutesEl.textContent = minutes.toString().padStart(2, '0');
  secondsEl.textContent = seconds.toString().padStart(2, '0');
}

setInterval(christmasCounter, 1000);
