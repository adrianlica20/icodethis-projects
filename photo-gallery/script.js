const imgs = document.querySelectorAll('img');
const imgDetails = document.querySelectorAll('.img-details');

imgs.forEach((img, imgIndex) => {
  img.addEventListener('mouseenter', () => {
    imgDetails.forEach((detail, detailIndex) => {
      if (imgIndex === detailIndex) {
        detail.classList.remove('hidden');
      }
    });
  });
});

imgs.forEach((img, imgIndex) => {
  img.addEventListener('mouseleave', () => {
    imgDetails.forEach((detail, detailIndex) => {
      if (imgIndex === detailIndex) {
        detail.classList.add('hidden');
      }
    });
  });
});
