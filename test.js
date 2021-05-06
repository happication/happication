"use strict";

let ulElement = document.getElementById('list');
let form = document.getElementById('form');


let allTest = [];
function Test(name) {
    this.name = name;
    allTest.push(this);
}


form.addEventListener('submit', render);


function render(event) {
    event.preventDefault();
    location.reload();
    let datas = JSON.parse(localStorage.getItem('key'));
    if(datas){
        console.log(datas)
  
        for (let index = 0; index < datas.length; index++) {
    
            new Test (datas[index].name);
            
        }
    }
   
    let name = event.target.name.value
    let names = new Test (name);
    localStorage.setItem('key',(JSON.stringify(allTest)))
    ulElement.innerHTML =''
    result();
    console.log(allTest);
    form.reset();
}

function result() {
    let data = JSON.parse(localStorage.getItem('key'));
   if(data){
    for (let index = 0; index < data.length; index++) {
        let liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = data[index].name;
    }
   }

}




if(location.reload){
    result();
}
