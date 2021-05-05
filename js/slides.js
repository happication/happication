"use strict";


let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("bPhoto");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000);
}

let leftButton = document.getElementById('leftButton');

leftButton.onclick = function () {
    window.location=("./booking.html");
    
}

let rightButton = document.getElementById('rightButton');

rightButton.onclick = function () {
    window.location=("./add-farm.html");
    
}