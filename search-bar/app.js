let dropdownBtn = document.querySelector('.link');
let dropdownMenu = document.querySelector('.dropdown-menu');

dropdownBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('active');
});
