"use strict";


const mainsection = document.getElementById('mainsection');
const article = document.getElementById('article');

article
let mainimg = document.getElementById('mainimg');
mainsection.appendChild(mainimg);


let names = document.getElementById('name');
article.appendChild(names);


let data = JSON.parse(localStorage.getItem('key'));
for (let i = 0; i < data.length; i++) {
    
    mainimg.src = data[i].path;

names.textContent = data[i].name;
}


// let datas = JSON.parse(localStorage.getItem('keyf'));
// if(datas){
//     mainimg.src = datas[0].path;

//     names.textContent = datas[0].name;
// }
