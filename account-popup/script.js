const avatar = document.querySelector('.avatar');
const details = document.querySelector('.details');

avatar.addEventListener('click', () => {
  details.classList.toggle('hidden');
  avatar.classList.toggle('opacity-70');
});
