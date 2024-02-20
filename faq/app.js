const expandBtn = document.querySelectorAll('.expand-btn');
const answer = document.querySelector('.display-on-click');

expandBtn.forEach((element) => {
  element.addEventListener('click', () => {
    answer.classList.toggle('hidden');
  });
});
