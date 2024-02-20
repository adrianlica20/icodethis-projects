const upperContainer = document.getElementById('upperContainer');
const bottomContainer = document.getElementById('bottomContainer');
const wheel = document.getElementById('wheel');

const openEnvelope = () => {
  upperContainer.classList.add('-translate-y-full', 'transition-all');
  upperContainer.classList.remove('translate-y-0');
  bottomContainer.classList.add('envelope');
};

const closeEnvelope = () => {
  upperContainer.classList.add('translate-y-0');
  upperContainer.classList.remove('-translate-y-full');
  bottomContainer.classList.remove('envelope');
  wheel.classList.remove('spin');
};

wheel.addEventListener('click', () => {
  wheel.classList.add('spin');
  setTimeout(openEnvelope, 2000);
});

upperContainer.addEventListener('click', () => {
  closeEnvelope();
});
