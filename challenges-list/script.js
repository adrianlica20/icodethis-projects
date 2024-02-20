let overlay;
let modal;

const allBtns = document.querySelectorAll('button');

allBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.textContent === 'SUBMIT') {
      addOverlay();
      showModal();
      btn.textContent = 'SUBMITTED';
      btn.classList.add('bg-gray-600');
    }
  });
});

const addOverlay = () => {
  overlay = document.createElement('div');
  overlay.classList.add(
    'w-screen',
    'h-screen',
    'fixed',
    'top-0',
    'left-0',
    'z-10',
    'bg-slate-800/50',
    'opacity-60'
  );
  document.body.appendChild(overlay);
};

const showModal = () => {
  modal = document.createElement('div');
  modal.classList.add(
    'bg-white',
    'border',
    'border-purple-200',
    'rounded-lg',
    'w-full',
    'max-w-[400px]',
    'md:w-72',
    'p-5',
    'fixed',
    'top-1/2',
    '-translate-y-1/2',
    'left-1/2',
    '-translate-x-1/2',
    'z-50',
    'text-center',
    'flex',
    'flex-col',
    'gap-4',
    'items-center'
  );
  const modalText = document.createTextNode('Thanks for your submission!');
  const backBtn = document.createElement('button');
  backBtn.classList.add(
    'p-1',
    'px-6',
    'bg-purple-600',
    'text-white',
    'rounded-lg',
    'hover:bg-purple-500',
    'hover:shadow-lg',
    'text-sm',
    'w-max',
    'transition-all'
  );
  backBtn.textContent = 'BACK';

  document.body.appendChild(modal);
  modal.appendChild(modalText);
  modal.appendChild(backBtn);

  backBtn.addEventListener('click', () => {
    modal.remove();
    overlay.remove();
  });
};
