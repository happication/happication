"use strict";


const mainsection = document.getElementById('mainsection');


let mainimg = document.getElementById('mainimg');
mainsection.appendChild(mainimg);


let names = document.getElementById('name');
mainsection.appendChild(names);


let data = JSON.parse(localStorage.getItem('keyes'));

mainimg.src = data[0].path;

names.textContent = data[0].name;

