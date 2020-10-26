let HamburgerMenuStatus = false;


function hamburgerMenuToggle() {
    let getHamburgerMenu = document.querySelector("header");
    let spanVisible = document.querySelector(".navbar");

    if (HamburgerMenuStatus === false) {
        getHamburgerMenu.style.height = "100%";
        spanVisible.style.display = "unset";

        HamburgerMenuStatus = true;
    }


    else if (HamburgerMenuStatus === true) {
        getHamburgerMenu.style.height = "4rem";
        spanVisible.style.display = "none";

        HamburgerMenuStatus = false;
    }


}



// function for animation to fade in, prob in css.