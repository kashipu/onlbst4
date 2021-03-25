/* Scroll menú */
window.onscroll = function () {
    navegacionScroll()
    tableScroll()
};

var navbar = document.getElementById("navbar-bar");
var sticky = navbar.offsetTop;

var tableCont = document.getElementById("tablaContenido")
var tableSticky = tableCont.offsetTop

function navegacionScroll() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

function tableScroll() {
    if (window.pageYOffset >= tableSticky) {
        tableCont.classList.add("stickytable")
    } else {
        tableCont.classList.remove("stickytable");
    }
}

