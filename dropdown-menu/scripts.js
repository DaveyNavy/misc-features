const openMenuButton = document.querySelector(".open");
const closeMenuButton = document.querySelector(".close");
const menu = document.querySelector("nav");

openMenuButton.addEventListener("click", () => {
  menu.classList.remove("hidden");
  openMenuButton.classList.add("hidden");
});

closeMenuButton.addEventListener("click", () => {
  console.log("here");
  menu.classList.add("hidden");
  openMenuButton.classList.remove("hidden");
});
