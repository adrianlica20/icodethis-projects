const dropdownBtn = document.querySelector('.link');
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownMenuDownIcon = document.querySelector('.icon-chevron-down');

dropdownBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('active');
  dropdownMenuDownIcon.classList.toggle('rotate-180');
});

const mainComponent = document.querySelector('#main-component');
const logInBtn = document.querySelector('#login-btn');
const logInScreen = document.querySelector('#login-screen');
const userPassword = document.querySelector('#password');
const loggedUser = document.querySelector('#logged-user');

logInBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (userPassword.value.length < 6) {
    alert('Your password must have at least 6 characters.');
  } else {
    logInScreen.classList.add('hidden');
    loggedUser.classList.remove('hidden');
    mainComponent.classList.add('bg-blue-50');
  }
});

const targetsComponent = document.getElementById('targets-component');
const allTargetsComponent = document.getElementById('all-targets-component');

targetsComponent.addEventListener('click', () => {
  loggedUser.classList.add('hidden');
  allTargetsComponent.classList.remove('hidden');
});

const allTargets = document.querySelector('#all-targets');
const addTargetBtn = document.querySelector('#add-target-btn');
const confirmTargetBtn = document.querySelector('.confirm-target-btn');
let targetName = document.querySelector('.target-name');

// Removes the modal and opens the target input
addTargetBtn.addEventListener('click', () => {
  targetName.value = '';
  modal.classList.remove('hiddenM');
  overlay.classList.remove('hiddenM');
});

// Add new target to the list
confirmTargetBtn.addEventListener('click', addTargets);

// Index number used for the label and input id
let idx = 1;

function addTargets() {
  let targetDetails = document.createElement('label');
  targetDetails.classList.add(
    'target',
    'flex',
    'justify-between',
    'items-center',
    'bg-white',
    'p-2',
    'py-3',
    'rounded',
    'shadow-lg',
    'text-xs',
    'transition-all',
    'hover:bg-gray-50'
  );
  targetDetails.setAttribute('for', `target-${idx}`);
  targetDetails.innerText = targetName.value;

  let checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('id', `target-${idx}`);

  targetDetails.appendChild(checkbox);
  allTargets.appendChild(targetDetails);

  checkbox.addEventListener('click', () => {
    if (!targetDetails.classList.contains('line-through')) {
      targetDetails.classList.add('line-through');
      targetDetails.classList.add('text-gray-400');
      targetDetails.classList.add('bg-transparent');
      targetDetails.classList.remove('shadow-lg');
    } else {
      targetDetails.classList.remove('line-through');
      targetDetails.classList.remove('text-gray-400');
      targetDetails.classList.remove('bg-transparent');
      targetDetails.classList.add('shadow-lg');
    }
  });

  // targetNumber.innerText = idx;
  idx++;
}

const backArrow = document.querySelector('.back-arrow');

backArrow.addEventListener('click', () => {
  loggedUser.classList.remove('hidden');
  allTargetsComponent.classList.add('hidden');
});

// MODAL CLOSING SCRIPT
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

confirmTargetBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

function closeModal() {
  modal.classList.add('hiddenM');
  overlay.classList.add('hiddenM');
}

window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hiddenM')) {
    closeModal();
  }
});
