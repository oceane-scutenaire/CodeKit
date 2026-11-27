"use strict";


const btnPrev = document.querySelector(".slider__btn--prev button");
const btnNext = document.querySelector(".slider__btn--next button");

if(btnNext && btnPrev){
    btnNext.addEventListener("click", sliderNext);
    btnPrev.addEventListener("click", sliderPrev);

    document.addEventListener("keydown", function(event){
        if(event.code == "ArrowLeft"){
            sliderPrev();
        }else if(event.code =="ArrowRight"){
            sliderNext();
        }
    });
}

function sliderNext(){
    const elShow = document.querySelector(".slider__el--show");
    const elNext = elShow.nextElementSibling;

    elShow.classList.remove("slider__el--show");

    if(elNext){
        elNext.classList.add("slider__el--show");
    } else{
        const elFirst = elShow.parentElement.firstElementChild;
        elFirst.classList.add("slider__el--show");
    }
}

function sliderPrev(){
    const elShow = document.querySelector(".slider__el--show");
    const elPrev = elShow.previousElementSibling;

    elShow.classList.remove("slider__el--show");

    if(elPrev){
        elPrev.classList.add("slider__el--show");
    } else{
        const elLast = elShow.parentElement.lastElementChild;
        elLast.classList.add("slider__el--show");
    }
}






