document.addEventListener("DOMContentLoaded", function () {
  const savedUser = localStorage.getItem("username");

  if (!savedUser) {
    document.getElementById("loginPopup").classList.remove("hidden");
  } else {
    document.getElementById("usernameDisplay").innerText = savedUser;
  }
});

function submitLogin() {
  const username = document.getElementById("usernameInput").value;
  const finalName = username.trim() === "" ? "Guest" : username;

  localStorage.setItem("username", finalName);
  document.getElementById("loginPopup").classList.add("hidden");
  document.getElementById("usernameDisplay").innerText = finalName;
}

// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

