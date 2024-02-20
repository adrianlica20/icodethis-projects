const thanks = document.querySelector('.thanks');
const container = document.querySelector('.container');
const submitBtn = document.getElementById('submit');
const backBtn = document.getElementById('back');

submitBtn.addEventListener('click', () => {
  container.classList.add('hidden');
  thanks.classList.remove('hidden');
  thanks.classList.add('block');
});

backBtn.addEventListener('click', () => {
  container.classList.remove('hidden');
  container.classList.add('block');
  thanks.classList.add('hidden');
});

let success = document.getElementById('success-input');
const progressBar = document.getElementsByClassName('progress-bar')[0];
let percent = document.getElementsByClassName('percent')[0];

let no = document.getElementById('no-input');
const progressBarNo = document.getElementsByClassName('progress-bar')[1];
let percentNo = document.getElementsByClassName('percent')[1];

let only = document.getElementById('only-input');
const progressBarOnly = document.getElementsByClassName('progress-bar')[2];
let percentOnly = document.getElementsByClassName('percent')[2];

success.addEventListener('click', () => {
  const computedStyle = getComputedStyle(progressBar);
  const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
  progressBar.style.setProperty('--width', width + 1);
  percent.innerText = `${width + 1}%`;
});

no.addEventListener('click', () => {
  const computedStyleNo = getComputedStyle(progressBarNo);
  const widthNo = parseFloat(computedStyleNo.getPropertyValue('--width')) || 0;
  progressBarNo.style.setProperty('--width', widthNo + 1);
  percentNo.innerText = `${widthNo + 1}%`;
});

only.addEventListener('click', () => {
  const computedStyleOnly = getComputedStyle(progressBarOnly);
  const widthOnly =
    parseFloat(computedStyleOnly.getPropertyValue('--width')) || 0;
  progressBarOnly.style.setProperty('--width', widthOnly + 1);
  percentOnly.innerText = `${widthOnly + 1}%`;
});
