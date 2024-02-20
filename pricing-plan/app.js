const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.btn');
let titleMessage = document.querySelector('.titleMessage');
let message = document.querySelector('.message');

const basicBtn = document.getElementById('basic');
const proBtn = document.getElementById('pro');

function startBasic() {
  modal.classList.remove('hiddenM');
  overlay.classList.remove('hiddenM');
  titleMessage.innerHTML = `Your acquired the Basic plan.`;
  message.innerHTML = `We hope you will enjoy our free product!`;
}

function startPro() {
  modal.classList.remove('hiddenM');
  overlay.classList.remove('hiddenM');
  titleMessage.innerHTML = `Your purchased the Pro plan.`;
  message.innerHTML = `Thank you for being our valued customer!`;
}

basicBtn.addEventListener('click', startBasic);
proBtn.addEventListener('click', startPro);

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
