const body = document.querySelector('body');
const main = document.getElementById('main');
const showMoreBtn = document.getElementById('show-more');
const checkmarksContainer = document.getElementById('checkmarks-container');
const skip = document.getElementById('skip-btn');
const showWhenSkipped = document.getElementById('show-when-skipped');
const getStartedBtn = document.getElementById('get-started');
const goBack = document.getElementById('go-back');

showMoreBtn.addEventListener('click', () => {
  if (checkmarksContainer.classList.contains('hidden')) {
    checkmarksContainer.classList.remove('hidden');
    showMoreBtn.classList.remove('rotate-180');
  } else {
    checkmarksContainer.classList.add('hidden', 'transition-class');
    showMoreBtn.classList.add('rotate-180');
  }
});

skip.addEventListener('click', () => {
  main.classList.add('hidden');
  if (main.classList.contains('hidden')) {
    showWhenSkipped.classList.remove('hidden');
  }
});

showWhenSkipped.addEventListener('click', () => {
  if (main.classList.contains('hidden')) {
    main.classList.remove('hidden');
    showWhenSkipped.classList.add('hidden');
  }
});

const checkmarks = document.querySelectorAll('.checkmarks');
const progressBar = document.getElementById('progress-bar');
let progressText = document.getElementById('progress-text');
const counterText = document.getElementById('counter-text');
let count = 2;
let currWidth = 40;

checkmarks.forEach((checkmark) => {
  checkmark.addEventListener('click', () => {
    if (checkmark.classList.contains('bg-[#18182e]')) {
      checkmark.classList.remove('bg-[#18182e]');
      currWidth -= 20;
      count -= 1;
    } else {
      checkmark.classList.add('bg-[#18182e]');
      currWidth += 20;
      count += 1;
    }
    progressBar.setAttribute('style', `width: ${currWidth}%`);
    progressText.textContent = `${currWidth}%`;
    counterText.textContent = count;

    if (progressBar.getAttribute('style') == 'width: 80%') {
      progressBar.classList.add('bg-[#414AAF]');
      progressText.classList.add('text-[#414AAF]');
      getStartedBtn.classList.add('bg-[#414AAF]');
    } else {
      progressBar.classList.remove('bg-[#414AAF]');
      progressText.classList.remove('text-[#414AAF]');
      getStartedBtn.classList.remove('bg-[#414AAF]');
    }

    if (progressBar.getAttribute('style') == 'width: 100%') {
      progressBar.classList.add('bg-[#4aaf41]');
      progressText.classList.add('text-[#4aaf41]');
      getStartedBtn.classList.add('bg-[#4aaf41]');
    } else {
      progressBar.classList.remove('bg-[#4aaf41]');
      progressText.classList.remove('text-[#4aaf41]');
      getStartedBtn.classList.remove('bg-[#4aaf41]');
    }
  });
});

getStartedBtn.addEventListener('click', () => {
  if (currWidth === 100) {
    main.classList.add('hidden');
    goBack.classList.remove('hidden');
  }
});

goBack.addEventListener('click', () => {
  main.classList.remove('hidden');
  goBack.classList.add('hidden');
  progressBar.classList.remove('bg-[#4aaf41]');
  progressText.classList.remove('text-[#4aaf41]');
  getStartedBtn.classList.remove('bg-[#4aaf41]');
  currWidth = 0;
  count = 0;
  checkmarks.forEach((checkmark) => {
    checkmark.classList.remove('bg-[#18182e]');
  });
  progressBar.setAttribute('style', `width: ${currWidth}%`);
  progressText.textContent = `${currWidth}%`;
  counterText.textContent = count;
});
