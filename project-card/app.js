let imgWrapper = document.querySelectorAll('.img-wrapper');
let twitterTag = document.querySelectorAll('.twitter-tag');

imgWrapper.forEach((element, index) => {
  element.addEventListener('click', () => {
    twitterTag.forEach((tag, tagIndex) => {
      if (tagIndex === index) {
        tag.classList.toggle('hidden');
      } else {
        tag.classList.add('hidden');
      }
    });
  });
});
