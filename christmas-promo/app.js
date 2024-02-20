const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  const christmasTree = document.querySelector('.christmas-tree');
  christmasTree.src = 'src/colored-chr-tree-2.svg';
  btn.innerHTML = `Congratulations!`;
});
