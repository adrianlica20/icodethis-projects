const donateBtn = document.querySelector(".donate-btn");
const container = document.querySelector(".container");
const backBtn = document.querySelector(".back-btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const donations = document.querySelectorAll(".donations");

donateBtn.addEventListener("click", () => {
  modal.classList.remove("hiddenM");
  overlay.classList.remove("hiddenM");
  container.classList.add("hidden");
});

backBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

function closeModal() {
  modal.classList.add("hiddenM");
  overlay.classList.add("hiddenM");
  container.classList.remove("hidden");
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hiddenM")) {
    closeModal();
  }
});
