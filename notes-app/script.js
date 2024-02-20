// Burger menus
document.addEventListener('DOMContentLoaded', function () {
  // open
  const burger = document.querySelectorAll('.navbar-burger');
  const menu = document.querySelectorAll('.navbar-menu');

  if (burger.length && menu.length) {
    for (let i = 0; i < burger.length; i++) {
      burger[i].addEventListener('click', function () {
        for (let j = 0; j < menu.length; j++) {
          menu[j].classList.toggle('hidden');
        }
      });
    }
  }

  // close
  const close = document.querySelectorAll('.navbar-close');
  const backdrop = document.querySelectorAll('.navbar-backdrop');

  if (close.length) {
    for (let i = 0; i < close.length; i++) {
      close[i].addEventListener('click', function () {
        for (let j = 0; j < menu.length; j++) {
          menu[j].classList.toggle('hidden');
        }
      });
    }
  }

  if (backdrop.length) {
    for (let i = 0; i < backdrop.length; i++) {
      backdrop[i].addEventListener('click', function () {
        for (let j = 0; j < menu.length; j++) {
          menu[j].classList.toggle('hidden');
        }
      });
    }
  }
});

const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('bg-[#111111]');
  document.querySelector('.heading-section').classList.toggle('bg-[#2a2a2a]');
  document.querySelector('.writing-space').classList.toggle('bg-[#2a2a2a]');
  document.getElementById('sessions').classList.toggle('bg-[#2a2a2a]');
  document.querySelector('h1').classList.toggle('text-[#bb86fc]');
  document.querySelector('main').classList.toggle('bg-[#111111]');
  document.querySelector('main').classList.toggle('shadow-none');
  document.getElementById('notes-app').classList.toggle('bg-[#111111]');
  document.getElementById('notes-app').classList.toggle('sm:border-[#ba89f8]');
  themeToggle.classList.toggle('stroke-[#bb86fc]');
  const p = document.querySelectorAll('p');
  p.forEach((paragraph) => paragraph.classList.toggle('text-[#e1e1e1]'));
  const h3 = document.querySelectorAll('h3');
  h3.forEach((hh3) => hh3.classList.toggle('text-[#bb86fc]'));
  const burgerLinks = document.querySelectorAll('.burger-link');
  burgerLinks.forEach((burgerLink) =>
    burgerLink.classList.toggle('text-[#bb86fc]')
  );
  document
    .querySelector('.navbar-backdrop')
    .classList.toggle('stroke-[#bb86fc]');
  const h2 = document.querySelectorAll('h2');
  h2.forEach((hh2) => hh2.classList.toggle('text-[#bb86fc]'));

  document.getElementById('addBtn').classList.toggle('fill-red');
});
