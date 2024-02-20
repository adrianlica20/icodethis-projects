const body = document.querySelector('body');

const yearly = document.getElementById('yearly');
const monthly = document.getElementById('monthly');
const selected = document.getElementById('selected');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.btn');
let titleMessage = document.querySelector('.titleMessage');
let message = document.querySelector('.message');

const starterBtn = document.getElementById('starter');
const proBtn = document.getElementById('pro');

yearly.addEventListener('click', () => {
  body.classList.add('bg-[#002227]');
  document.querySelector('h1').classList.add('text-white');

  selected.classList.add('right-0.5');
  selected.classList.remove('left-0.5');

  let starterPrice = document.getElementsByClassName('starter-price')[0];
  let professionalPrice =
    document.getElementsByClassName('professional-price')[0];
  let billed = document.querySelectorAll('.billed');
  starterPrice.textContent = '$89.99 / year';
  professionalPrice.textContent = '$219.99 / year';
  billed.forEach((element) => {
    element.textContent = 'Billed yearly';
  });
});

monthly.addEventListener('click', () => {
  body.classList.remove('bg-[#002227]');
  document.querySelector('h1').classList.remove('text-white');

  selected.classList.remove('right-0.5');
  selected.classList.add('left-0.5');

  let starterPrice = document.getElementsByClassName('starter-price')[0];
  let professionalPrice =
    document.getElementsByClassName('professional-price')[0];
  let billed = document.querySelectorAll('.billed');
  starterPrice.textContent = '$8.99 / year';
  professionalPrice.textContent = '$21.99 / year';
  billed.forEach((element) => {
    element.textContent = 'Billed monthly';
  });
});

function starterPlan() {
  modal.classList.remove('hiddenM');
  overlay.classList.remove('hiddenM');
  titleMessage.innerHTML = `Your acquired the Starter plan.`;
}

function proPlan() {
  modal.classList.remove('hiddenM');
  overlay.classList.remove('hiddenM');
  titleMessage.innerHTML = `Your purchased the Pro plan.`;
}

starterBtn.addEventListener('click', starterPlan);
proBtn.addEventListener('click', proPlan);

function closeModal() {
  modal.classList.add('hiddenM');
  overlay.classList.add('hiddenM');
}

closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hiddenM')) {
    modalClose();
  }
});
