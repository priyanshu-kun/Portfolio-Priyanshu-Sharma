//************************ navigation menu animation ************************

const Button = document.querySelector(".menu-btn");
const overlay = document.querySelector(".overlay-and-navitems");
const menuMsg = document.querySelector(".menu-mes");
const listItems = document.querySelectorAll(".nav-items li");
const headingText = document.querySelector(".heading-text");
let flag = true;

Button.addEventListener("click", (e) => {
    if (flag) {

        // animate hamburger icon to open
        Button.classList.add("open");

        // animate overlay with adding class to open
        overlay.classList.add("open-overlay");

        // add settimeout to change menu msg to close
        setTimeout(() => {
            menuMsg.innerHTML = "close";
            menuMsg.style.color = "#fff";
            headingText.children[0].style.color = "#fff";
            headingText.children[1].style.color = "#fff";
        }, 200);


        //**************** animate link items by sliding them right to center*************************
        listItems.forEach(item => {
            item.classList.add("animate-li");
        })
        // ****************END*************************

        flag = false;
    }
    else {

        // animate hamburger icon to close 
        Button.classList.remove("open");

        // animate overlay with to close
        overlay.classList.remove("open-overlay");

        // readding "menu" and remove "close" text
        menuMsg.innerHTML = "menu";
        menuMsg.style.color = "";
        headingText.children[0].style.color = "";
        headingText.children[1].style.color = "";


        //**************** removeing animate link items by sliding them right to center*************************
        setTimeout(() => {
            listItems.forEach(item => {
                item.classList.remove("animate-li");
            })
        }, 200);
        // ****************END*************************

        flag = true;
    }
})

// *****************************END******************************************