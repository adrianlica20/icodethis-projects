const allTasks = document.querySelector('#all-tasks-container');
const addTaskBtn = document.querySelector('#add-task-btn');
const confirmTaskBtn = document.querySelector('.confirm-task-btn');
let taskName = document.querySelector('.task-name');
let tasksNumber = document.querySelector('#tasks-number');

// Removes the modal and opens the task input
addTaskBtn.addEventListener('click', () => {
  taskName.value = '';
  modal.classList.remove('hiddenM');
  overlay.classList.remove('hiddenM');
});

// Add new task to the list
confirmTaskBtn.addEventListener('click', createTasks);

// Index number used for the label and input id
let idx = 1;

function createTasks() {
  let taskText = document.createElement('label');
  taskText.classList.add('task', 'flex', 'justify-between', 'items-center');
  taskText.setAttribute('for', `task-${idx}`);
  taskText.innerText = taskName.value;

  let checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('id', `task-${idx}`);

  taskText.appendChild(checkbox);
  allTasks.appendChild(taskText);

  checkbox.addEventListener('click', () => {
    taskText.classList.toggle('line-through');
    taskText.classList.toggle('text-gray-300');
  });

  tasksNumber.innerText = idx;
  idx++;
}

// MODAL CLOSING SCRIPT
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

confirmTaskBtn.addEventListener('click', closeModal);
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
