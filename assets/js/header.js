function hamburger() {
    // var hamburger = document.getElementsByClassName("nav-container");
    var burgerMenu = document.getElementsByClassName("hamburger-menu")[0];
    if (burgerMenu.style.display == 'none' || burgerMenu.style.display == '') {
        burgerMenu.style.display = 'block'
    }
    else {
        burgerMenu.style.display = 'none'
    }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdown(ele) {
    var menu = ele.parentElement.children[1];
    menu.classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');

            }
        }
    }
}