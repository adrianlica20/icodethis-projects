const btn = document.querySelectorAll('.follow-btn');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.btn');

function unfollowFunc() {
  modal.classList.remove('hiddenM');
  overlay.classList.remove('hiddenM');
}

function closeModal() {
  modal.classList.add('hiddenM');
  overlay.classList.add('hiddenM');
}

closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

btn.forEach((element) => {
  element.addEventListener('click', () => {
    if (element.textContent === 'Follow') {
      element.textContent = 'Unfollow';
      element.classList.add('bg-none');
      element.classList.add('text-[#1863d6]');
    } else {
      unfollowFunc();
      closeModalBtn.addEventListener('click', () => {
        element.textContent = 'Follow';
        element.classList.remove('bg-none');
        element.classList.remove('text-[#1863d6]');
      });
    }
  });
});
