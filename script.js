const menu = document.getElementById("menu");
const hamburgerIcon = document.getElementById("hamburger-menu-icon");
const closeBtn = document.getElementById("close-btn");
const viewPostBtn = document.getElementById("view-more-btn");
const extraPosts = document.getElementById("extra-posts");

hamburgerIcon.addEventListener("click", function () {
  console.log("clicked");
  menu.classList.add("show");
});

closeBtn.addEventListener("click", function () {
  menu.classList.remove("show");
});

/*viewPostBtn.addEventListener("click", function () {
  if (viewPostBtn.textContent === "View More") {
    extraPosts.classList.remove("hidden-posts");
    viewPostBtn.textContent = "View Less";
  } else {
    extraPosts.classList.add("hidden-posts");
    viewPostBtn.textContent = "View More";
  }
});*/

/*const viewMoreText = "View More";
const viewLessText = "View Less";

viewPostBtn.addEventListener("click", function () {
  const viewMoreText = "View More";
  const viewLessText = "View Less";
  extraPosts.classList.toggle("hidden-posts");
  viewPostBtn.textContent =
    viewPostBtn.textContent === viewMoreText ? viewLessText : viewMoreText;
});*/

/*viewPostBtn.addEventListener("click", function () {
  extraPosts.classList.toggle("hidden-posts");
  viewPostBtn.textContent =
    viewPostBtn.textContent === "View More"
      ? (viewPostBtn.textContent = "View Less")
      : (viewPostBtn.textContent = "View More");
});*/

viewPostBtn.addEventListener("click", function () {
  extraPosts.classList.toggle("hidden-posts");
  viewPostBtn.textContent.trim() === "View More"
    ? (viewPostBtn.textContent = "View Less")
    : (viewPostBtn.textContent = "View More");
});
