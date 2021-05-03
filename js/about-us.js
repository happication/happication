'use strict';
let infos = document.getElementsByClassName('info');
let image = document.getElementsByClassName('studentImg')
let show = document.getElementById('detailsButton')


    for( let i=0; i< infos.length; i++){
        infos[i].style.display='none';
    }


function details(){
    for( let i=0; i<infos.length; i++){
        infos[i].style.display='block';
        show.innerHTML='';
    }
}
