"use strict";

/*
1  cibler les éléments 
déclarer les variables

2 ajouter les comportements

3 déclarer nos function
*/

const backToTop = document.querySelector(".backToTop");

if(backToTop){
    window.addEventListener("scroll", scrollListener);
}

function scrollListener(){
    const currentScroll = window.scrollY;

    //console.log(currentScroll);
    if(currentScroll > 300){
        backToTop.classList.add("backToTop--show");
    } else {
        backToTop.classList.remove("backToTop--show");
    }
}
