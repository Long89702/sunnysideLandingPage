//Hamburger button
const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar-links");
toggleButton.addEventListener("click", event=>{
    event.preventDefault();
    navbarLinks.classList.toggle("active");
});
