const msgNotification = document.getElementById('msg-notification');
const list = document.getElementById('users-list');
const msgsContainer = document.getElementById('msgs-container');
const closeBtn = document.getElementById('close-btn');

// Creates a list of users that will be displayed as messages
const users = [
  {
    id: 1,
    username: 'Caleb Waters',
    time: '3 hours ago',
    message: 'Planning to visit Las Vegas or any other vacational',
    favorite: true,
  },
  {
    id: 2,
    username: 'Manuel Lindsey',
    time: '2 hours ago',
    message: 'Chances are unless you are very lucky you will go thru many',
    favorite: false,
  },
  {
    id: 3,
    username: 'Mark George',
    time: 'Yesterday',
    message: 'Planning to visit Las Vegas or any other vacational',
    favorite: false,
  },
  {
    id: 4,
    username: 'Lou Fields',
    time: 'Yesterday',
    message: 'Planning to visit Las Vegas or any other vacational',
    favorite: true,
  },
  {
    id: 5,
    username: 'Devin Smith',
    time: '18 Jun',
    message: 'Planning to visit Las Vegas or any other vacational',
    favorite: false,
  },
];

users.forEach((user) => {
  // Creates a new list item using the data from the 'users' Array of Objects
  const newLi = document.createElement('li');
  // Gives the list items a dynamic structure with the information from the users Array
  newLi.innerHTML = `
            <button class="absolute right-0 top-0 flex items-center justify-center h-full text-[#6c779d]">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots-vertical" width="24" height="24"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                    <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                    <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                </svg>
            </button>
            <div class="flex justify-between text-sm">
                <div class="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="star-icon ${
                      user.favorite ? 'text-yellow-500' : 'text-[#222c4d]'
                    }" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" stroke-width="0" fill="currentColor"></path>
                    </svg>
                    <p>${user.username}</p>
                </div>
                <span class="text-[#6c779d] text-xs">${user.time}</span>
            </div>
            <p class="text-xs text-[#6c779d]">${user.message}</p>
`;

  // Adds TailwindCSS classes to each list item
  newLi.classList.add(
    'user-msg',
    'bg-[#11182E]',
    'space-y-1',
    'p-4',
    'px-8',
    'relative',
    'transition-all',
    'before:opacity-0',
    'hover:before:opacity-100',
    'hover:cursor-pointer',
    'hover:shadow-lg',
    'hover:scale-[1.02]',
    'before:transition-all',
    'before:absolute',
    'before:content-[""]',
    'before:left-0',
    'before:top-0',
    'before:bg-green-500',
    'before:w-1',
    'before:h-full'
  );

  // Appends the list items to the ul (defined with the variable 'list')
  list.appendChild(newLi);
});

// Hides the notification tab and displays the list of messages
msgNotification.addEventListener('click', () => {
  msgsContainer.classList.toggle('hidden');
  msgNotification.classList.toggle('hidden');
});

// Hides the list of messages and displays the notification tab
closeBtn.addEventListener('click', () => {
  msgsContainer.classList.toggle('hidden');
  msgNotification.classList.toggle('hidden');
});

// Search through users
const searchbar = document.getElementById('searchbar');

function filterUsers() {
  let userMsgs = document.querySelectorAll('.user-msg');
  let searchQuery = searchbar.value;
  for (let i = 0; i < userMsgs.length; i++) {
    if (users[i].username.toLowerCase().includes(searchQuery.toLowerCase())) {
      userMsgs[i].classList.remove('hidden');
    } else {
      userMsgs[i].classList.add('hidden');
    }
  }
}

searchbar.addEventListener('input', filterUsers);
