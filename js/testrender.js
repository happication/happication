// // "use strict";



// // const trys = document.getElementById('try');

// // const form = document.getElementById('form');

// // let locations = document.querySelector('select').value



// let imgs = ['./img/bird/thum.jpg', './img/Byblos/thum.jpg','./img/Deer/thum.jpg','./img/Dream/thum.jpg',
// './img/Eva Farm/thum.jpg','./img/Farah/thum.jpg','./img/Hawaii/thum.jpg','./img/Mariam/thum.jpeg','./img/mountain/thum.jpg'
// ,'./img/Philadelphia/thum.jpg','./img/Sky village/thum.jpg','./img/Switch Villa/thum.jpg','./img/Teresa Chalet/thum.jpeg'
// ,'./img/Zaid/thum.jpg','./img/adam/thum.jpg','./img/paradise/thum.jpg','./img/sawa /thum.jpg','./img/wings/thum.jpg'
// ,'./img/yafa/thum.jpg','./img/yalla/thum.jpg'];

// // let heads = ['BIRD VILLA', 'BYBLOS VILLA','DEER VILLA','DREAM VILLA','EVA VILLA','FARAH VILLA','HAWAII VILLA','MARIAM VILLA'
// // ,'MOUNTAIN VILLA','PHILADELPHIA VILLA','SKY VILLAGE VILLA','SWITCH VILLA','TERESA CHALET VILLA','ZAID VIILA','ADAM VILLA'
// // ,'PARADISE VILLA','SAWA VILLA','WINGS VILLA','YAFA VILLA','YALLA VILLA'];

// // let rates = ['3.5', '3','4','3.5','4','5','3','4','4.5','3','4','3.5','4.5','3','5','4','3.5','4','3.5','4.5'];

// let li1s = ['Amman-Airport street', 'Salt','Amman- Iraq Al-Ameer','Amman - Jordan street','Irbid','Jerash','Salt','Jerash'
// ,'Jerash','Jerash','Amman - Al Bahhath','Salt','Irbid','Irbid','jerash-ruins of Jerash','Salt-Gilead'
// ,'Irbid-Near to Irbid Mall','Amman-Airport street ','Salt-Gilead','Amman,airport Street'];

// // let li2s = ['1-10 Persons', '11-50 Persons','1-10 Persons','11-50 Persons','11-50 Persons','50-100 Persons','11-50 Persons'
// // ,'51-100 Persons','51-100 Persons','11-50 Persons','11-50 Persons','11-50 Persons','11-50 Persons','1-20 Persons'
// // ,'1-10 persons','1-20 Persons','1-30 Persons','1-10 Persons','11-50 Persons','1-30 Persons'];

// // let li3s = ['barbecue children Swimming pool.', 'Heated swimming pool, children Swimming pool, Jacuzzi, Air-conditioned rooms ','DJ, barbecue, Heated swimming pool.'
// // ,'barbecue, football stadium, Children play area.','barbecue, Heated swimming pool, Sun loungers, children Swimming pool, Children play area.'
// // ,'barbecue, children Swimming pool, table tennis, External headphones.'
// // ,'Heated swimming pool, Sun loungers, table tennis, Play Station, WIFI, External headphones,barbecue.'
// // ,'barbecue, children Swimming pool, Air-conditioned rooms, Jacuzzi, Children play area, DJ,Sun loungers, Play Station,WIFI.'
// // ,'barbecue, Children play area, DJ, football stadium, Heated swimming pool, Sun loungers,table tennis, Play Station, WIFI.'
// // ,'barbecue, Heated swimming pool, Play Station.','barbecue, Sun loungers, WIFI, External headphones‏.'
// // ,'barbecue, children Swimming pool, Air-conditioned rooms, Jacuzzi, Children play area, Sunloungers, table tennis, Play Station.'
// // ,'barbecue, children Swimming pool, Air-conditioned rooms, Jacuzzi, Children play area, Play Station'
// // ,'barbecue, DJ, Heated swimming pool, External headphones‏, Heated swimming pool, Sun loungers.'
// // ,'Sun loungers, Air-conditioned rooms, WIFI, barbecue, table tennis, DJ, Play Station,External headphones'
// // ,'children Swimming pool, Sun loungers, Air-conditioned rooms, barbecue, Play Station, WIFI, External headphones, DJ, Billiard, Jacuzzi, table tennis '
// // ,'Air-conditioned rooms, DJ, WIFI, barbecue, Play Station, External headphones, Children play area, Sun loungers',
// // 'Air-conditioned rooms,barbecue, Children play area, DJ, Heated swimming pool, Sun loungers, table tennis, Play Station, WIFI, External headphones'
// // ,'Air-conditioned rooms,barbecue, Jacuzzi, Children play area, DJ, Sun loungers, Heated swimming pool, Play Station, WIFI, External headphones',
// // 'External headphones, barbecue, Air-conditioned rooms, Sun loungers,DJ, WIFI,'];


// // let li4s = ['120 JD per day', '170 JD per day','100 JD Per day','150JD Per day','200JD per day','200JD Per day'
// // ,'170JD per day','220JD per day.','190JD per day','110JD per day.','130JD Per day.','160JD Per day.','170JD per day'
// // ,'110JD per day.','120 Jd Per day','150 Jd Per day','110 Jd Per day','130 Jd Per day','150 Jd Per day','100 Jd Per day'];

// // let alls = [];

// // function Renders(headimg, headname, rate, li1, li2, li3, li4) {
// //     this.headimg = headimg;
// //     this.headname = headname;
// //     this.rate = rate;
// //     this.li1 = li1;
// //     this.li2 = li2;
// //     this.li3 = li3;
// //     this.li4 = li4;
// //     alls.push(this);
// // }

// // // for (let i = 0; i < imgs.length; i++) {

// // //     let test = new Renders(imgs[i], heads[i], rates[i], li1s[i], li2s[i], li3s[i], li4s[i])

// // //     localStorage.setItem('keys', JSON.stringify(alls))
// // // }

// // form.onsubmit = function (e) {
// //     e.preventDefault();

// //     let x = locations = document.querySelector('select').value
// //     if ( x === 'all'){
// //         localStorage.removeItem("keys");

// //         for (let i = 0; i < imgs.length; i++) {

// //             let test = new Renders(imgs[i], heads[i], rates[i], li1s[i], li2s[i], li3s[i], li4s[i])
        
// //             localStorage.setItem('keys', JSON.stringify(alls))
// //         }
// //         location.reload()
// //     }
// //     if (x === 'amman') {
// //         localStorage.removeItem("keys");
// //         let test1 = new Renders(imgs[0], heads[0], rates[0], li1s[0], li2s[0], li3s[0], li4s[0])
// //         let test2 = new Renders(imgs[2], heads[2], rates[2], li1s[2], li2s[2], li3s[2], li4s[2])
// //         let test3 = new Renders(imgs[3], heads[3], rates[3], li1s[3], li2s[3], li3s[3], li4s[3])
// //         let test4 = new Renders(imgs[10], heads[10], rates[10], li1s[10], li2s[10], li3s[10], li4s[10])
// //         let test5 = new Renders(imgs[17], heads[17], rates[17], li1s[17], li2s[17], li3s[17], li4s[17])
// //         let test6 = new Renders(imgs[19], heads[19], rates[19], li1s[19], li2s[19], li3s[19], li4s[19])
// //         localStorage.setItem('keys', JSON.stringify(alls));
        
// //         location.reload()
// //     }
// //     if (x === 'irbid') {
// //         localStorage.removeItem("keys");
// //         let test1 = new Renders(imgs[4], heads[4], rates[4], li1s[4], li2s[4], li3s[4], li4s[4])
// //         let test2 = new Renders(imgs[12], heads[12], rates[12], li1s[12], li2s[12], li3s[12], li4s[12])
// //         let test3 = new Renders(imgs[13], heads[13], rates[13], li1s[13], li2s[13], li3s[13], li4s[13])
// //         let test4 = new Renders(imgs[16], heads[16], rates[16], li1s[16], li2s[16], li3s[16], li4s[16])
// //         localStorage.setItem('keys', JSON.stringify(alls));
// //         location.reload()

// //     }
// //     if (x === 'salt') {
// //         localStorage.removeItem("keys");
// //         let test1 = new Renders(imgs[1], heads[1], rates[1], li1s[1], li2s[1], li3s[1], li4s[1])
// //         let test2 = new Renders(imgs[11], heads[11], rates[11], li1s[11], li2s[11], li3s[11], li4s[11])
// //         let test3 = new Renders(imgs[15], heads[15], rates[15], li1s[15], li2s[15], li3s[15], li4s[15])
// //         let test4 = new Renders(imgs[18], heads[18], rates[18], li1s[18], li2s[18], li3s[18], li4s[18])
// //         let test5 = new Renders(imgs[6], heads[6], rates[6], li1s[6], li2s[6], li3s[6], li4s[6])
// //         localStorage.setItem('keys', JSON.stringify(alls));
// //         location.reload()
// //     }
// //     if (x === 'jerash') {
// //         localStorage.removeItem("keys");
// //         let test1 = new Renders(imgs[5], heads[5], rates[5], li1s[5], li2s[5], li3s[5], li4s[5])
// //         let test2 = new Renders(imgs[7], heads[7], rates[7], li1s[7], li2s[7], li3s[7], li4s[7])
// //         let test3 = new Renders(imgs[8], heads[8], rates[8], li1s[8], li2s[8], li3s[8], li4s[8])
// //         let test4 = new Renders(imgs[9], heads[9], rates[9], li1s[9], li2s[9], li3s[9], li4s[9])
// //         let test5 = new Renders(imgs[14], heads[14], rates[14], li1s[14], li2s[14], li3s[14], li4s[14])
// //         localStorage.setItem('keys', JSON.stringify(alls));
// //         location.reload()

// //     }

    
// // }





// // let datas = JSON.parse(localStorage.getItem('keys'));


// // console.log(imgs.length);
// // for (let i = 0; i < imgs.length; i++) {
// // let div = document.createElement('div');
// // trys.appendChild( div );

// //     let imgE = document.createElement( 'img' );
// //     div.appendChild( imgE );
// //     imgE.src = datas[i].headimg
    

// //     let heads = document.createElement( 'h' );
// //     div.appendChild( heads );
// //     heads.textContent = datas[i].headname

// //     let rateR = document.createElement( 'l' );
// //     div.appendChild( rateR );
// //     rateR.textContent = datas[i].rate

// //     let liE1 = document.createElement( 'li' );
// //     div.appendChild( liE1 );
// //     liE1.textContent = datas[i].li1

// //     let liE2 = document.createElement( 'li' );
// //     div.appendChild( liE2 );
// //     liE2.textContent = datas[i].li2

// //     let liE3 = document.createElement( 'li' );
// //     div.appendChild( liE3 );
// //     liE3.textContent = datas[i].li3

// //     let liE4= document.createElement( 'li' );
// //     div.appendChild( liE4 );
// //     liE4.textContent = datas[i].li4

// //     let button = document.createElement("button");
// //     button.innerHTML = "RESERVE";
    
// //     div.appendChild(button);
// //     button.onclick = function () {
        
// //         if(i===0){
// //             alles.shift();
// //             let render = new Saves('BIRD VILLA', './img/bird/thum.jpg')
            
// //             localStorage.setItem('keyes', JSON.stringify(alles));
// //             window.open("./form.html");
            
            
// //         }
        
// //         if(i===1){
// //             alert('noo');
// //             alles.shift();
// //         let render = new Saves('BYBLOS VILLA', './img/Byblos/thum.jpg')

// //         localStorage.setItem('keyes', JSON.stringify(alles));
// //         window.open("./form.html");

// //         }
// //         if(i===2){
// //             alles.shift();
// //             let render = new Saves('DEER VILLA', './img/Deer/thum.jpg')

// //         localStorage.setItem('keyes', JSON.stringify(alles));
// //         window.open("./form.html");

// //         }

// //         if(i===3){
// //             alles.shift();
// //             let render = new Saves('DREAM VILLA', './img/Dream/thum.jpg')

// //         localStorage.setItem('keyes', JSON.stringify(alles));
// //         window.open("./form.html");

// //         }
// //         if(i===4){
// //             alles.shift();
// //             let render = new Saves('EVA VILLA', './img/Eva Farm/thum.jpg')

// //         localStorage.setItem('keyes', JSON.stringify(alles));
// //         window.open("./form.html");

// //         }
// //         if(i===5){
// //             alles.shift();
// //             let render = new Saves('FARAH VILLA', './img/Farah/thum.jpg')

// //         localStorage.setItem('keyes', JSON.stringify(alles));
// //         window.open("./form.html");

// //         }
// //         if(i===6){
// //             alles.shift();
// //             let render = new Saves('HAWAII VILLA', './img/Hawaii/thum.jpg')

// //         localStorage.setItem('keyes', JSON.stringify(alles));
// //         window.open("./form.html");

// //         }
// //         if(i===7){
// //             alles.shift();
// //             let render = new Saves('MARIAM VILLA', './img/Mariam/thum.jpeg')

// //         localStorage.setItem('keyes', JSON.stringify(alles));
// //         window.open("./form.html");

// //         }
// //         if(i===8){
// //             alles.shift();
// //             let render = new Saves('MOUNTAIN VILLA', './img/mountain/thum.jpg')

// //         localStorage.setItem('keyes', JSON.stringify(alles));
// //         window.open("./form.html");

// //         }
// //         if(i===9){
// //             alles.shift();
// //             let render = new Saves('PHILADELPHIA VILLA', './img/Philadelphia/thum.jpg')

// //         localStorage.setItem('keyes', JSON.stringify(alles));
// //         window.open("./form.html");

// //         }
// //         if(i===10){
// //             alles.shift();
// //             let render = new Saves('SKY VILLAGE VILLA', './img/Sky village/thum.jpg')

// //         localStorage.setItem('keyes', JSON.stringify(alles));
// //         window.open("./form.html");

// //         }
// //         if(i===11){
// //             alles.shift();
// //             let render = new Saves('SWITCH VILLA', './img/Switch Villa/thum.jpg')

// //         localStorage.setItem('keyes', JSON.stringify(alles));
// //         window.open("./form.html");

// //         }
// //         if(i===12){
// //             alles.shift();
// //             let render = new Saves('TERESA CHALET VILLA', './img/Teresa Chalet/thum.jpeg')

// //         localStorage.setItem('keyes', JSON.stringify(alles));
// //         window.open("./form.html");

// //         }
// //         if(i===13){
// //             alles.shift();
// //             let render = new Saves('ZAID VIILA', './img/Zaid/thum.jpg')

// //         localStorage.setItem('keyes', JSON.stringify(alles));
// //         window.open("./form.html");

// //         }
// //         if(i===14){
// //             alles.shift();
// //             let render = new Saves('Adam Villa', './img/adam/thum.jpg')

// //         localStorage.setItem('keyes', JSON.stringify(alles));
// //         window.open("./form.html");

// //         }
// //         if(i===15){
// //             alles.shift();
// //             let render = new Saves('Paradise Villa', './img/paradise/thum.jpg')
    

// //         localStorage.setItem('keyes', JSON.stringify(alles));
// //         window.open("./form.html");

// //         }
// //         if(i===16){
// //             alles.shift();
// //             let render = new Saves('Sawa Villa', './img/sawa /thum.jpg')

// //         localStorage.setItem('keyes', JSON.stringify(alles));
// //         window.open("./form.html");

// //         }
// //         if(i===17){
// //             alles.shift();
// //             let render = new Saves('Wings Villa', './img/wings/thum.jpg')


// //         localStorage.setItem('keyes', JSON.stringify(alles));
// //         window.open("./form.html");

// //         }
// //         if(i===18){
// //             alles.shift();
// //             let render = new Saves('Yafa Villa', './img/yafa/thum.jpg')

// //         localStorage.setItem('keyes', JSON.stringify(alles));
// //         window.open("./form.html");

// //         }
// //         if(i===19){
// //             alles.shift();
// //             let render = new Saves('Yalla Villa', './img/yalla/thum.jpg')

// //         localStorage.setItem('keyes', JSON.stringify(alles));
// //         window.open("./form.html");

// //         }
       
// //     }
    
// // }

// // let alles =[];

// // function Saves(name, path,) {
// //     this.name = name;
// //     this.path = path;
// //     alles.push(this);
// // }






// // // let dataf = JSON.parse(localStorage.getItem('keys'));

// // // console.log(dataf);

