const submitBtn = document.getElementById("submit-btn");
const formContainer = document.querySelector(".form-container");
const socialsContainer = document.querySelector(".socials-container");
const tyMessage = document.getElementById("ty-message");
const backBtn = document.getElementById("back-btn");
const backToFormBtn = document.querySelector(".back-to-form-btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

function checkForm(event) {
  event.preventDefault();
  let form = document.getElementById("myForm");
  if (form.checkValidity()) {
    formContainer.classList.add("hidden");
    socialsContainer.classList.add("hidden");
    tyMessage.classList.remove("hidden");
  } else {
    errorForm();
  }
}

submitBtn.addEventListener("click", checkForm);

backBtn.addEventListener("click", () => {
  formContainer.classList.remove("hidden");
  socialsContainer.classList.remove("hidden");
  tyMessage.classList.add("hidden");
});

function errorForm() {
  modal.classList.remove("hiddenM");
  overlay.classList.remove("hiddenM");
}

function closeModal() {
  modal.classList.add("hiddenM");
  overlay.classList.add("hiddenM");
}

backToFormBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hiddenM")) {
    modalClose();
  }
});
