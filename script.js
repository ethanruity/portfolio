// JQuery for about me section
$("#ones").click(() => {
  $("#ones-drop").slideToggle("slow");
});

$("#threes").click(() => {
  $("#threes-drop").slideToggle("slow");
});

$("#red").click(() => {
  me.src = "imgs/me/me-one.png";
});

$("#purple").click(() => {
  me.src = "imgs/me/purple-ones.png";
});

$("#blue").click(() => {
  me.src = "imgs/me/blue-ones.png";
});

$("#green").click(() => {
  me.src = "imgs/me/green-ones.png";
});

$("#white").click(() => {
  me.src = "imgs/me/white-threes.png";
});

$("#black").click(() => {
  me.src = "imgs/me/black-threes.png";
});

$("#fe").click(() => {
  $("#fe-logo").slideToggle("fast");
});

$("#be").click(() => {
  $("#be-logo").slideToggle("fast");
});

$("#db").click(() => {
  $("#db-logo").slideToggle("fast");
});

$("#ot").click(() => {
  $("#ot-logo").slideToggle("fast");
});

// Revealing elements on scroll
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});
allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

//Gem image slides
const gemSlider = new Swiper(".gemSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".gem-right",
    prevEl: ".gem-left",
  },
});

//Google image slides
const googleSlider = new Swiper(".googleSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".google-right",
    prevEl: ".google-left",
  },
});

//Snake Game slides
const snakeSlider = new Swiper(".snakeSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".snake-right",
    prevEl: ".snake-left",
  },
});

//Resume modal
const resumeModal = document.getElementById("resume-modal");
const resumeHandler = document.querySelectorAll(".resume");
const resumeClose = document.getElementById("resume-close");

resumeHandler.forEach((el) => {
  el.addEventListener("click", function () {
    resumeModal.style.display = "block";
  });
});

resumeClose.addEventListener("click", function () {
  resumeModal.style.display = "none";
});

window.onclick = function (event) {
  if (event.target == resumeModal) {
    resumeModal.style.display = "none";
  }
};
