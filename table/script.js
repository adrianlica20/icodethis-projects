const downArrows = document.querySelectorAll(".chevron-down");
const userProfiles = document.querySelectorAll(".user-profile");

downArrows.forEach(arrow => {
  arrow.addEventListener("click", () => {
    if (arrow.classList.contains("rotate-180")) {
      arrow.classList.remove("rotate-180");
    } else {
      arrow.classList.add("rotate-180");
    }
  });
});
