
let modal = document.getElementById('myModal');


let btn = document.getElementById("addcottage");


let span = document.getElementById("close");



btn.onsubmit = function (e) {
    e.preventDefault();
    modal.style.display = "block";
}


span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
   
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


