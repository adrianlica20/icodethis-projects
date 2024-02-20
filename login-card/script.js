const closeBtn = document.getElementsByClassName("close-btn")[0];
const loginContainer = document.getElementsByClassName("login-container")[0];
const openBtn = document.getElementsByClassName("open-login")[0];

closeBtn.addEventListener("click", () => {
  loginContainer.classList.add("hidden");
  openBtn.classList.remove("hidden");
});

openBtn.addEventListener("click", () => {
  loginContainer.classList.remove("hidden");
  openBtn.classList.add("hidden");
});

// MODAL CODE
const submitBtn = document.querySelector(".submit-btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".btn");
const email = document.querySelector(".email");

submitBtn.addEventListener("click", e => {
  e.preventDefault();
  if (email.value) {
    activateModal();
  }
});

function activateModal() {
  modal.classList.remove("hiddenM");
  overlay.classList.remove("hiddenM");
}

function closeModal() {
  modal.classList.add("hiddenM");
  overlay.classList.add("hiddenM");
}

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hiddenM")) {
    closeModal();
  }
});
