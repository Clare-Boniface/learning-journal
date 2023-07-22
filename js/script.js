import { blogData } from "./data.js";

const menu = document.getElementById("menu");
const hamburgerIcon = document.getElementById("hamburger-menu-icon");
const closeBtn = document.getElementById("close-btn");
const viewPostBtn = document.getElementById("view-more-btn");
const blogContainer = document.getElementById("blog-container");

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
  blogContainer.innerHTML = htmlString;
}

function toggleViewMore() {
  if (viewPostBtn.textContent === "View More") {
    renderBlogs(blogData.length);
    viewPostBtn.textContent = "View Less";
  } else if (viewPostBtn.textContent === "View Less") {
    renderBlogs(3);
    viewPostBtn.textContent = "View More";
  }
}
viewPostBtn.addEventListener("click", toggleViewMore);

hamburgerIcon.addEventListener("click", function () {
  menu.classList.add("show");
});
closeBtn.addEventListener("click", function () {
  menu.classList.remove("show");
});
