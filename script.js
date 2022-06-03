const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

/* Open */
function openNav() {
  document.getElementById("mobile__navbar-menu").style.height = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("mobile__navbar-menu").style.height = "0%";
}