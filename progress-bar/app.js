const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.plus');
let percentValue = document.querySelector('.progress-percent');
let progressBar = document.querySelector('.progress-bar');

let width = 63;

minusBtn.addEventListener('click', () => {
  let newWidth = (progressBar.style.width = `${--width}%`);
  percentValue.innerHTML = newWidth;
  console.log(newWidth);
});

plusBtn.addEventListener('click', () => {
  let newWidth = (progressBar.style.width = `${++width}%`);
  percentValue.innerHTML = newWidth;
  console.log(newWidth);
});
