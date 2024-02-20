const followBtn = document.getElementById('follow-btn');
const followText = document.getElementById('follow-text');

followBtn.addEventListener('click', () => {
  followText.textContent =
    followText.textContent === 'FOLLOW' ? 'FOLLOWING' : 'FOLLOW';
});

const disclaimer = document.querySelector('.disclaimer');
const chatContainer = document.querySelector('.chat-container');
const chatBox = document.querySelector('.chat-box');
const agreeBtn = document.querySelector('.agree-btn');
const openChatBtn = document.querySelector('.open-chat-btn');
const closeChatBtn = document.querySelector('.close-chat-btn');
const card = document.getElementById('card');

// Change chat box height to full for mobile
if (window.matchMedia('(max-width: 640px)').matches) {
  document
    .querySelector('.fullMobile')
    .classList.add('h-full', 'justify-between');
} else {
  document
    .querySelector('.fullMobile')
    .classList.remove('h-full', 'justify-between');
}

// Start chatting
openChatBtn.addEventListener('click', () => {
  if (chatContainer.classList.contains('hidden')) {
    chatContainer.classList.remove('hidden');
    card.classList.add('hidden');
  } else {
    chatContainer.classList.add('hidden');
  }
});

// Accepting privacy policy
agreeBtn.addEventListener('click', () => {
  if (disclaimer.classList.contains('hidden')) {
    disclaimer.classList.remove('hidden');
    chatBox.classList.add('hidden');
  } else {
    disclaimer.classList.add('hidden');
    chatBox.classList.remove('hidden');
  }
});

// Close chatting
closeChatBtn.addEventListener('click', () => {
  if (!chatContainer.classList.contains('hidden')) {
    chatContainer.classList.add('hidden');
    card.classList.remove('hidden');
    userContainer.forEach(
      userTemplates.forEach((userTemplate) => userTemplate.remove())
    );
  } else {
    chatContainer.classList.remove('hidden');
  }
});

// Working chat
const userContainer = document.querySelector('.chatting-section');
const userTemplates = document.getElementsByClassName('user-template');
const userTemplate = userTemplates.length ? userTemplates[0] : null;

// Send messages
const userInput = document.getElementById('user-input');
const submitBtn = document.getElementById('submit-input');

function sendMessage(messageText) {
  const messageElement = userTemplate.cloneNode(true);
  messageElement.classList.remove('hidden'); // remove hidden class from cloned element
  const userMessage = messageElement.querySelector('.user-message');
  userMessage.textContent = messageText;
  userContainer.appendChild(messageElement);
  userContainer.scrollTop = userContainer.scrollHeight;
}

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  sendMessage(userInput.value);
  userInput.value = '';
});

userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    sendMessage(userInput.value);
    userInput.value = '';
  }
});

const buyBtn = document.getElementById('buy-btn');
let overlay;
let modal;

buyBtn.addEventListener('click', () => {
  addOverlay();
  showModal();
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
    'bg-black/70',
    'opacity-80'
  );
  document.body.appendChild(overlay);
};

const showModal = () => {
  modal = document.createElement('div');
  modal.classList.add(
    'bg-black/95',
    'w-full',
    'rounded',
    'max-w-[400px]',
    'md:w-72',
    'p-7',
    'fixed',
    'top-1/2',
    '-translate-y-1/2',
    'left-1/2',
    '-translate-x-1/2',
    'z-50',
    'text-center',
    'flex',
    'flex-col',
    'gap-y-6',
    'items-center',
    'text-white'
  );
  const modalText = document.createTextNode(
    'Get ready for the strongest coffee of your life!'
  );
  const backBtn = document.createElement('button');
  backBtn.classList.add(
    'p-2',
    'px-6',
    'rounded',
    'bg-red-600',
    'text-white',
    'hover:bg-red-700',
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
