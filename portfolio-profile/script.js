const like = document.querySelector('.addLike');
const heart = document.getElementById('heart');
const followBtn = document.getElementById('follow');
let followText = document.getElementById('follow-text');

let currentLikes = 354;

like.addEventListener('click', () => {
  like.innerText = `${++currentLikes}`;
  heart.classList.add('red-heart');
});

followBtn.addEventListener('click', () => {
  followText.innerText = 'Unfollow';
});
