import { blogData } from "./data.js";

const viewMoreMenu = document.getElementById("view-more-menu");
const viewMoreHamburgerIcon = document.getElementById(
  "view-more-hamburger-menu-icon"
);
const viewMoreViewPostBtn = document.getElementById("view-more-view-more-btn");
const viewMoreCloseBtn = document.getElementById("view-more-close-btn");
const viewMoreBlogContainer = document.getElementById(
  "view-more-blog-container"
);

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
  viewMoreBlogContainer.innerHTML = htmlString;
}

viewMoreHamburgerIcon.addEventListener("click", function () {
  viewMoreMenu.classList.add("show");
});
viewMoreCloseBtn.addEventListener("click", function () {
  viewMoreMenu.classList.remove("show");
});
