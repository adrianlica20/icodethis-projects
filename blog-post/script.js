const bookmark = document.getElementById('bookmark');

bookmark.addEventListener('click', () => {
  bookmark.classList.add('fill-[#20b820]');
  bookmark.classList.add('scale-150');
  bookmark.setAttribute('stroke', '#20b820');
});
