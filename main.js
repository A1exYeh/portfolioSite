//media queries
const mediaWidthMd = window.matchMedia("(min-width: 768px)");

//toggle button
const toggleButton = document.getElementById("navToggle");
//navbar Links
const navLinks = document.querySelectorAll("#navLink");
//navbar links as a whole
const navLinksALL = document.getElementById("navLinks");
let toggleOpen = false;

//slot
const slotEffect = document.getElementById("slotEffect");
const slotWords = document.getElementsByClassName("slotWord");
let currentIndex = 0;

//project cards
const projectCards = document.querySelectorAll(".projectCard");

//project card ::after text
const projectCardInfo = [
  "A full stack web app that allows users to keep track of their past/current maximum weights for various exercises and last gym visit.",
  "A test module for a second project.",
];

//projectButton
const projectButtonGym = document.getElementById("projectButtonGym");
const projectButtonGymIcon = document.getElementById("projectButtonGymIcon");

//checks the width of the screen and shows/hides the toggle button accordingly
function checkNavWdith() {
  if (mediaWidthMd.matches) {
    //hide the toggle button
    toggleButton.style.opacity = "0";
    toggleButton.style.visibility = "hidden";
    //show the links
    navLinks.forEach((link) => {
      link.style.visiblity = "visible";
      link.style.opacity = "1";
    });
    navLinks.forEach((link) => {
      link.style.width = "auto";
    });
    if (toggleOpen) {
      navLinksALL.style.flexDirection = "row";
      navLinksALL.style.alignItems = "center";
      navLinksALL.style.paddingBottom = "0.6em";
    }
  } else {
    //show the toggle
    toggleButton.style.opacity = "1";
    toggleButton.style.visibility = "visible";
    //hide the links
    navLinks.forEach((link) => {
      // link.style.visibility = "hidden";
      link.style.opacity = "0";
    });
    navLinks.forEach((link) => {
      link.style.width = "1px";
    });
  }
}

//cycles through words for slot effect
function rotateWords() {
  // Remove previous class from all words
  for (let word of slotWords) {
    word.classList.remove("prev");
  }

  // Add prev class to current word
  slotWords[currentIndex].classList.add("prev");
  slotWords[currentIndex].classList.remove("active");

  // Move to next word
  currentIndex = (currentIndex + 1) % slotWords.length;

  // Add active class to new word
  slotWords[currentIndex].classList.add("active");
}

//on document load we:
// *do an initial check of the screen width to hide/show toggle button
// *attach a listener to the mediaWithLg query to constantly call checkNavWidth
//  if the media width changes

// *add the active class to the first slotWord in slotEffect
// *call the function to rotate the words and set it to a 2s setInterval
document.addEventListener("DOMContentLoaded", function () {
  checkNavWdith();
  mediaWidthMd.onchange = (e) => {
    checkNavWdith();
  };

  if (slotWords.length > 0) {
    slotWords[0].classList.add("active");
    setInterval(rotateWords, 2000);
  }

  projectCards.forEach((card, index) => {
    if (projectCardInfo[index]) {
      card.setAttribute("data-card-info", projectCardInfo[index]);
    }
  });
});

//toggles the opening of the menu on click
toggleButton.addEventListener("click", function () {
  if (toggleOpen) {
    navLinksALL.style.flexDirection = "row";
    navLinksALL.style.alignItems = "center";
    navLinksALL.style.paddingBottom = "0.6em";
    navLinks.forEach((link) => {
      link.style.visiblity = "Hidden";
      link.style.opacity = "0";
      link.style.width = "1px";
    });
    toggleOpen = false;
  } else if (!toggleOpen) {
    navLinksALL.style.flexDirection = "column";
    navLinksALL.style.alignItems = "flex-start";
    navLinksALL.style.paddingBottom = "2em";
    navLinks.forEach((link) => {
      link.style.visiblity = "visible";
      link.style.opacity = "1";
      link.style.width = "auto";
    });
    toggleOpen = true;
  }
});

// code for a proposed function that would've made the icon grow on hover
// projectButtonGym.addEventListener("mouseenter", function () {
//   // projectButtonGymIcon.style.color = "rgb(48, 209, 88)";
//   // projectButtonGymIcon.classList.remove("bi-arrow-up-right-square");
//   // projectButtonGymIcon.classList.add("bi-arrow-up-right-square-fill");
//   projectButtonGymIcon.classList.add("scale");
//   console.log("scale add");
// });

// projectButtonGym.addEventListener("mouseleave", function () {
//   // projectButtonGymIcon.style.color = "black";
//   // projectButtonGymIcon.classList.add("bi-arrow-up-right-square");
//   // projectButtonGymIcon.classList.remove("bi-arrow-up-right-square-fill");
//   projectButtonGymIcon.classList.remove("scale");
//   console.log("scale remove");
// });
