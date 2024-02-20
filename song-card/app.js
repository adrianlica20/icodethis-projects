const dislikeBtn = document.getElementsByClassName('dislike-btn')[0];
const likeBtn = document.getElementsByClassName('like-btn')[0];
const titleContainer = document.getElementsByClassName('title-container')[0];

dislikeBtn.addEventListener('click', () => {
  let dislikeMsg;
  dislikeMsg = document.createElement('div');
  dislikeMsg.innerHTML = `<p class="text-[0.6em] bg-[#9191913d] p-1 w-20 rounded md:hidden">You can't possibly dislike this song.</p>`;
  titleContainer.appendChild(dislikeMsg);
  dislikeMsg.classList.add('absolute');
  dislikeMsg.classList.add('top-5');
  dislikeMsg.classList.add('-left-4');
  dislikeBtn.classList.add('stroke-[#191414]');
  dislikeBtn.classList.add('hover:cursor-default');
});

likeBtn.addEventListener('click', () => {
  likeBtn.classList.toggle('fill-[#1db954]');
  likeBtn.classList.toggle('scale-125');
  likeBtn.classList.toggle('stroke-1');
});
