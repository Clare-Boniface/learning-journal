import { blogData } from "./data.js";

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
      class="blog-img"
      alt=${blogData[i].alt}
    />
    <p class="blog-date">${blogData[i].date}</p>
    <h3 class="blog-title">${blogData[i].title}</h3>
    <p class="blog-text">${blogData[i].text}
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
