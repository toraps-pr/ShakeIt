const openBtn = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".close-icon");
const menu = document.querySelector(".navbar-menu");
const navContainer = document.querySelector(".nav-container");

openBtn.addEventListener("click",()=>{
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    menu.classList.toggle("hidden");
});

closeBtn.addEventListener("click",()=>{
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    menu.classList.toggle("hidden");
});


const menuItems = document.querySelectorAll(".navbar-menu-item");

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        menu.classList.toggle("hidden");
        
        openBtn.classList.toggle("hide");
        closeBtn.classList.toggle("hide");
    });
});