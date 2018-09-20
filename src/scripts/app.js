
// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
let menu = document.querySelector("nav");
// On click
hamburger.addEventListener("click", function() {
// Toggle class "is-active"
hamburger.classList.toggle("is-active");
// Do something else, like open/close menu
menu.classList.toggle("activeMenu");
});


