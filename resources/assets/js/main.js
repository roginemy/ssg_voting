import appFunctions from './app.js';

let navbarToggler = document.getElementById("navbar-toggler")
let navbarClose = document.getElementById("navbar-close")
let navbar = document.querySelector("nav")

navbarToggler.onclick = () => {
    appFunctions.navbarOffcanvasOpen(navbar)
}
navbarClose.onclick = () => {
    appFunctions.navbarOffcanvasClose(navbar)
}