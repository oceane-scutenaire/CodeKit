"use strict";

const tabLinks = document.querySelectorAll(".tab__el a");

/* parcourir les éléments de la nodeliste pour ajouter le listener*/
if(tabLinks.length > 0){

    for(let tabLink of tabLinks){
    tabLink.addEventListener("click", tabTrigger);
    }
}

function tabTrigger(event){
    event.preventDefault();

    //closet pour sélectionner le parent le plus proche dans le DOM
    //event.currentTarget c'est le lien clické
    const parentTab = event.currentTarget.closest(".tab");
    const activeLink = parentTab.querySelector(".tab__el--active");
    activeLink.classList.remove("tab__el--active");

    event.currentTarget.parentElement.classList.add("tab__el--active");

    //Tab content
    const activeTab = parentTab.querySelector(".tab__content--active");
    activeTab.classList.remove("tab__content--active");

    const tabID = event.currentTarget.getAttribute("href");
    const tabSelect = parentTab.querySelector(tabID);
    tabSelect.classList.add("tab__content--active");
}
