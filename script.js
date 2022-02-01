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

// const revealSection = function (entries, observer) {
//   const [entry] = entries;
//   if (!entry.isIntersecting) return;
//   entry.target.classList.remove("section--hidden");
//   observer.unobserve(entry.target);
// };

// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.1,
// });
// allSections.forEach((section) => {
//   sectionObserver.observe(section);
//   section.classList.add("section--hidden");
// });

const hiddenGemPics = [
  "imgs/projects/hidden-gem-1.png",
  "imgs/projects/hidden-gem-2.png",
  "imgs/projects/hidden-gem-3.png",
  "imgs/projects/hidden-gem-4.png",
  "imgs/projects/hidden-gem-5.png",
];

const hiddenGemPicture = document.getElementById("hidden-gem-pic");

const nextPicture = (arr) => {};
