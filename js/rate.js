"use strict";

const star1 = document.getElementById('star1')

const star2 = document.getElementById('star2')

const star3 = document.getElementById('star3')

const star4 = document.getElementById('star4')

const star5 = document.getElementById('star5')

const rateresult = document.getElementById('rateresult');
star1.onclick = function () {
    star1.style.color = 'orange';
    star2.style.color = 'black';
    star3.style.color = 'black';
    star4.style.color = 'black';
    star5.style.color = 'black';
    rateresult.textContent = '';
    rateresult.textContent = 2;
}


star2.onclick = function () {
    star1.style.color = 'orange';
    star2.style.color = 'orange';
    star3.style.color = 'black';
    star4.style.color = 'black';
    star5.style.color = 'black';
    rateresult.textContent = '';
    rateresult.textContent = 2.5;
}

star3.onclick = function () {
    star1.style.color = 'orange';
    star2.style.color = 'orange';
    star3.style.color = 'orange';
    star4.style.color = 'black';
    star5.style.color = 'black';
    rateresult.textContent = '';
    rateresult.textContent = 3;
}

star4.onclick = function () {
    star1.style.color = 'orange';
    star2.style.color = 'orange';
    star3.style.color = 'orange';
    star4.style.color = 'orange';
    star5.style.color = 'black';
    rateresult.textContent = '';
    rateresult.textContent = 3.5;
}

star5.onclick = function () {
    star1.style.color = 'orange';
    star2.style.color = 'orange';
    star3.style.color = 'orange';
    star4.style.color = 'orange';
    star5.style.color = 'orange';
    rateresult.textContent = '';
    rateresult.textContent = 4;
}






