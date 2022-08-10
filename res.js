burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navlist = document.querySelector(".navlist");
rightNav = document.querySelector(".rightNav");

burger.addEventListener("click", ()=>{
    navbar.classList.toggle("res-navbar");
    navlist.classList.toggle("resnbar");
    rightNav.classList.toggle("resnbar");


})

