// //  get all thumbnails by class
// let allThumImg = document.getElementsByClassName('thumbnail');
// let allExtarImg = document.getElementsByClassName('extraImag');

// // loop all allThumImg & add listener
// for (let i = 0; i < allThumImg.length; i++) {
//     allThumImg[i].addEventListener('click', render);
// }

// // add listener function
// function render(event) {
//     // change to none from grid
//     if (document.getElementById(event.target.id + "-extra").style.display === 'grid') {
//         document.getElementById(event.target.id + "-extra").style.display = 'none';

//         // change to grid from none
//     } else {
//         for (let i = 0; i < allExtarImg.length; i++) {
//             allExtarImg[i].style.display = 'none'
//         }
//         document.getElementById(event.target.id + "-extra").style.display = 'grid';
//     }
// }