"use strict";
/* BURGER MENU / 
/ 1 cibler les éléments 
    declarer les variables
    2 Ajouter les comportements */

var btnMenu = document.querySelector(".btn--menu");
var menu = document.querySelector(".menu");

btnMenu.addEventListener("click", toggleMenu);

function toggleMenu() {
    menu.classList.toggle("menu--open");
}

const btnReadAll = document.querySelector(".btn--readAll");


btnReadAll.addEventListener("click", markReadAll);

console.log(notifUnreads);

function markReadAll(){
    const notifUnreads = document.querySelectorAll(".notifel--unread");

    for(let i = 0; i < notifUnreads.length; i++){
        notifUnreads[i].classList.remove("notifel--unread");
    }

    for(let notifUnread of notifUnreads){
        notifUnreads.classList.remove("notif__el--unread");
    }
}