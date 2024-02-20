const closeBtn = document.getElementById('close-btn');
const popup = document.getElementById('pop-up');
const coffee = document.getElementById('coffee');

closeBtn.addEventListener('click', () => {
  popup.classList.add('scale-0', 'origin-top-right');
  coffee.classList.add('scale-100');
});

coffee.addEventListener('click', () => {
  popup.classList.add('origin-center');
  popup.classList.remove('scale-0', 'origin-top-right');
  coffee.classList.remove('scale-100');
});
