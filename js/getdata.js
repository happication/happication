"use strict";


const mainsection = document.getElementById('mainsection');
const article = document.getElementById('article');

article
let mainimg = document.getElementById('mainimg');
mainsection.appendChild(mainimg);


let names = document.getElementById('name');
article.appendChild(names);


let data = JSON.parse(localStorage.getItem('key'));

mainimg.src = data[0].path;

names.textContent = data[0].name;

