function hamburger() {
    // var hamburger = document.getElementsByClassName("nav-container");
    var burgerMenu = document.getElementsByClassName("hamburger-menu")[0];
    if ( burgerMenu.style.display  == 'none' || burgerMenu.style.display  == ''  ) {
        burgerMenu.style.display = 'block'
    }
    else {
        burgerMenu.style.display = 'none'
    }
}