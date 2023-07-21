import { blogData } from "../data.js";

const aboutMeMenu = document.getElementById("about-me-menu");
const aboutMeHamburgerIcon = document.getElementById(
  "about-me-hamburger-menu-icon"
);
const aboutMeViewPostBtn = document.getElementById("about-me-view-more-btn");
const aboutMeCloseBtn = document.getElementById("about-me-close-btn");
const aboutMeBlogContainer = document.getElementById("about-me-blog-container");

renderBlogs(3);
function renderBlogs(num) {
  let htmlString = "";
  for (let i = 0; i < num; i++) {
    htmlString += `<div class="blog-post">
    <img
      src=${blogData[i].src}
      class="blog-img new-img"
      alt=${blogData[i].alt}
    />
    <p class=${blogData[i].date}>July 7, 2023</p>
    <h3 class="blog-title">${blogData[i].title}</h3>
    <p class=${blogData[i].text}>
      I'm excited to start a new learning journey as a Scrimba Bootcamp
      student! After several months of learning in the Frontend
      Developer Career Path.
    </p>
  </div>
  `;
  }
  aboutMeBlogContainer.innerHTML = htmlString;
}

aboutMeHamburgerIcon.addEventListener("click", function () {
  aboutMeMenu.classList.add("show");
});
aboutMeCloseBtn.addEventListener("click", function () {
  aboutMeMenu.classList.remove("show");
});
