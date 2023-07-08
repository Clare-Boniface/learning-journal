const menu = document.getElementById("menu");
const hamburgerIcon = document.getElementById("hamburger-menu-icon");
const closeBtn = document.getElementById("close-btn");

hamburgerIcon.addEventListener("click", function () {
  console.log("clicked");
  menu.classList.add("show");
});

closeBtn.addEventListener("click", function () {
  menu.classList.remove("show");
});
