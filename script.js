document.addEventListener("DOMContentLoaded", function () {
  // JavaScript code for index.html
  const menu = document.getElementById("menu");
  const hamburgerIcon = document.getElementById("hamburger-menu-icon");
  const closeBtn = document.getElementById("close-btn");
  const viewPostBtn = document.getElementById("view-more-btn");
  const extraPosts = document.getElementById("extra-posts");

  if (hamburgerIcon) {
    hamburgerIcon.addEventListener("click", function () {
      menu.classList.add("show");
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      menu.classList.remove("show");
    });
  }

  if (viewPostBtn && extraPosts) {
    viewPostBtn.addEventListener("click", function () {
      extraPosts.classList.toggle("hidden-posts");
      viewPostBtn.textContent.trim() === "View More"
        ? (viewPostBtn.textContent = "View Less")
        : (viewPostBtn.textContent = "View More");
    });
  }

  // JavaScript code for about-me.html
  const aboutMeMenu = document.getElementById("menu");
  const aboutMeHamburgerIcon = document.getElementById("hamburger-menu-icon");
  const aboutMeCloseBtn = document.getElementById("close-btn");

  if (aboutMeHamburgerIcon) {
    aboutMeHamburgerIcon.addEventListener("click", function () {
      aboutMeMenu.classList.add("show");
    });
  }

  if (aboutMeCloseBtn) {
    aboutMeCloseBtn.addEventListener("click", function () {
      aboutMeMenu.classList.remove("show");
    });
  }
});
