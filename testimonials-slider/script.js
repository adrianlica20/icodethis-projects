const testimonialsContainer = document.getElementById('testimonials-container');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const testimonials = document.querySelectorAll('.testimonial');

let idx = 0;
let interval = setInterval(run, 4000);

function run() {
  idx++;
  changeTestimonial();
}

function changeTestimonial() {
  if (idx > testimonials.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = testimonials.length - 1;
  }
  testimonialsContainer.style.transform = `translateX(${-idx * 600}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 4000);
}

rightBtn.addEventListener('click', () => {
  idx++;
  changeTestimonial();
  resetInterval();
});

leftBtn.addEventListener('click', () => {
  idx--;
  changeTestimonial();
  resetInterval();
});
