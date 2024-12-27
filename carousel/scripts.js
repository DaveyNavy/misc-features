const container = document.querySelector("#container");
const slideShow = document.querySelector(".slides");
const slides = Array.from(document.querySelectorAll(".slide"));
const n = slides.length;
const width = 500;
let timeout;

function next() {
  slideShow.style.left = (parseInt(slideShow.style.left) || 0) - width + "px";
  if (parseInt(slideShow.style.left) <= -width * n) {
    slideShow.style.left = 0 + "px";
  }
  clearTimeout(timeout);
  timeout = setTimeout(next, 5000);
}

function prev() {
  slideShow.style.left = (parseInt(slideShow.style.left) || 0) + width + "px";
  if (parseInt(slideShow.style.left) > 0) {
    slideShow.style.left = -width * (n - 1) + "px";
  }
  clearTimeout(timeout);
  timeout = setTimeout(next, 5000);
}

function jump(slide) {
  slideShow.style.left = slide * -width + "px";
  clearTimeout(timeout);
  timeout = setTimeout(next, 5000);
}

const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");

nextButton.addEventListener("click", next);
prevButton.addEventListener("click", prev);

const dotsContainer = document.querySelector(".dots-container");
for (let i = 0; i < n; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dot.addEventListener("click", () => {
    jump(i);
  });
  dotsContainer.appendChild(dot);
}

timeout = setTimeout(next, 5000);
