'use strict';


let locations = [];

let result = document.getElementById('result');


let all = [];

function Save(name, path, ) {
    this.name = name;
    this.path = path;
    all.push(this);
}

const cottageName = ['DREAM VILLA', 'EVA VILLA', 'DEER VILLA', 'BIRD VILLA', 'BYBLOS VILLA', 'FARAH VILLA', 'HAWAII VILLA', 'MARIAM VILLA', 'MOUNTAIN VILLA', 'PHILADELPHIA VILLA', 'SKY VILLAGE VILLA', 'SWITCH VILLA', 'TERESA CHALET VILLA', 'ZAID VIILA', 'ADAM VILLA', 'PARADISE VILLA', 'SAWA VILLA', 'WINGS VILLA', 'YAFA VILLA', 'YALLA VILLA', 'LILIAN VILLA', 'YOLO VILLA'];
const cottageLocation = ['Amman', 'Amman', 'Amman', 'Amman', 'Amman', 'Amman', 'Salt', 'Salt', 'Salt', 'Salt', 'Salt', 'Salt', 'Irbid', , 'Irbid', 'Irbid', 'Irbid', 'Irbid', 'Jerash', 'Jerash', 'Jerash', 'Jerash'];
const cottageDesq = ['barbecue, children Swimming pool, Play Station, WIFI.', 'Heated swimming pool, children Swimming pool, Jacuzzi, Air-conditioned rooms ', 'DJ, barbecue, Heated swimming pool.', 'barbecue, football stadium, Children play area.', 'barbecue, Heated swimming pool, Sun loungers, children Swimming pool, Children play area.', 'barbecue, children Swimming pool, table tennis, External headphones.', 'Heated swimming pool, Sun loungers, table tennis, Play Station, WIFI, External headphones,barbecue.', 'barbecue, children Swimming pool, Air-conditioned rooms, Jacuzzi, Children play area, DJ,Sun loungers, Play Station,WIFI.', 'barbecue, Children play area, DJ, football stadium, Heated swimming pool, Sun loungers,table tennis, Play Station, WIFI.', 'barbecue, Heated swimming pool, Play Station.', 'barbecue, Sun loungers, WIFI, External headphones‏.', 'barbecue, children Swimming pool, Air-conditioned rooms, Jacuzzi, Children play area, Sunloungers, table tennis, Play Station.', 'barbecue, children Swimming pool, Air-conditioned rooms, Jacuzzi, Children play area, Play Station', 'barbecue, DJ, Heated swimming pool, External headphones‏, Heated swimming pool, Sun loungers.', 'Sun loungers, Air-conditioned rooms, WIFI, barbecue, table tennis, DJ, Play Station,External headphones', 'children Swimming pool, Sun loungers, Air-conditioned rooms, barbecue, Play Station, WIFI, External headphones, DJ, Billiard, Jacuzzi, table tennis ', 'Air-conditioned rooms, DJ, WIFI, barbecue, Play Station, External headphones, Children play area, Sun loungers', 'Air-conditioned rooms,barbecue, Children play area, DJ, Heated swimming pool, Sun loungers, table tennis, Play Station, WIFI, External headphones', 'Air-conditioned rooms,barbecue, Jacuzzi, Children play area, DJ, Sun loungers, Heated swimming pool, Play Station, WIFI, External headphones', 'External headphones, barbecue, Air-conditioned rooms, Sun loungers,DJ, WIFI,', 'External headphones, barbecue, Air-conditioned rooms, Sun loungers,DJ, WIFI', 'Air-conditioned rooms, DJ, WIFI, barbecue, Play Station, External headphones, Childrens ,play area, Sun loungers'];
const cottageImg = ['./img/Dream/thum.jpg', './img/Eva Farm/thum.jpg', './img/Deer/thum.jpg', './img/bird/thum.jpg', './img/Byblos/thum.jpg', './img/Farah/thum.jpg', './img/Hawaii/thum.jpg', './img/Mariam/thum.jpeg', './img/mountain/thum.jpg', './img/Philadelphia/thum.jpg', './img/Sky village/thum.jpg', './img/Switch Villa/thum.jpg', './img/Teresa Chalet/thum.jpeg', './img/Zaid/thum.jpg', './img/adam/thum.jpg', './img/paradise/thum.jpg', './img/sawa /thum.jpg', './img/wings/thum.jpg', './img/yafa/thum.jpg', './img/yalla/thum.jpg', './img/adam/7.jpg', './img/Teresa Chalet/1 (5).jpeg'];
const cottageCapacity = ['1-9', '1-9', '10-19', '10-19', '20-50', '20-50', '1-9', '1-9', '10-19', '10-19', '20-50', '20-50', '1-9', '1-9', '10-19', '10-19', '20-50', '20-50', '10-19', '1-9', '1-9', '10-19'];
const cottagePrice = ['150 JD per day', '170 JD per day', '100 JD Per day', '150 JD Per day', '130 JD per day', '200 JD Per day', '170 JD per day', '220 JD per day.', '190 JD per day', '110 JD per day.', '130 JD Per day.', '160 JD Per day.', '170 JD per day', '110 JD per day.', '120 Jd Per day', '150 Jd Per day', '110 Jd Per day', '130 Jd Per day', '150 Jd Per day', '100 Jd Per day', '130 JD Per day.', '150 JD Per day'];
/////////////////////////////////////////////////////

let v1 = ["./img/Dream/1 (7).jpg", "./img/Dream/1 (14).jpg", "./img/Dream/1 (4).jpg"];

let v2 = ["./img/Eva Farm/1 (5).jpg", "./img/Eva Farm/1 (6).jpg", "./img/Eva Farm/1 (7).jpg"];

let v3 = ["./img/Byblos/1 (2).jpg", "./img/Byblos/1 (4).jpg", "./img/Byblos/1 (5).jpg"];

let v4 = ["./img/bird/1 (1).jpg", "./img/bird/1 (5).jpg", "./img/bird/1 (4).jpg"];

let v5 = ["./img/Deer/1 (5).jpg", "./img/Deer/1 (6).jpg", "./img/Deer/1 (7).jpg"];

const allCottageExtraImg = [v1, v2, v3, v4, v5];

// console.log(cottageExtraImg);

//////////////////////////////////////////////////

function Cottages(name, cities, description, image, price, capacity, extraImg) {
    this.cottageName = name;
    this.cottageLocation = cities;
    this.cottageDesq = description;
    this.cottageImg = image;
    this.cottagePrice = price;
    this.cottageCapacity = capacity;
    this.cottageExtraImg = extraImg;

    locations.push(this);
}
for (let i = 0; i < cottageLocation.length; i++) {
    new Cottages(cottageName[i], cottageLocation[i], cottageDesq[i], cottageImg[i], cottagePrice[i], cottageCapacity[i], allCottageExtraImg[i]);
}


Cottages.prototype.inject = function(cottage) {

    let locationContainer = document.createElement('div');
    let heading = document.createElement('h2');
    let imgContainer = document.createElement('div');
    let locationImage = document.createElement('img');
    let textContainer = document.createElement('div');
    let description = document.createElement('p');
    let price = document.createElement('p');
    let capacity = document.createElement('p');
    let reserveBtn = document.createElement('button');
    let showImg = document.createElement('button');
    let filterLOcation = document.createElement('p');
    let showImgContainer = document.createElement('div');



    result.appendChild(locationContainer);
    textContainer.appendChild(heading);
    locationContainer.appendChild(imgContainer);
    imgContainer.appendChild(locationImage);
    locationContainer.appendChild(textContainer);
    textContainer.appendChild(filterLOcation);
    textContainer.appendChild(description);
    textContainer.appendChild(price);
    textContainer.appendChild(capacity);
    textContainer.appendChild(reserveBtn);
    textContainer.appendChild(showImg);
    locationContainer.appendChild(showImgContainer);



    locationContainer.className = 'location';
    filterLOcation.className = 'filterLOcation';
    imgContainer.className = 'divImg';
    textContainer.className = 'divTxt';
    description.className = 'description';
    reserveBtn.id = 'booknow';
    showImg.className = 'showBtn'
    showImg.id = cottage.cottageName;
    showImgContainer.id = showImg.id + '-extra'
    showImgContainer.className = 'moreImg';


    locationImage.src = cottage.cottageImg;
    filterLOcation.textContent = 'LOCATION: ' + cottage.cottageLocation;
    heading.textContent = cottage.cottageName;
    description.textContent = cottage.cottageDesq;
    price.textContent = 'Price: ' + cottage.cottagePrice;
    reserveBtn.textContent = 'BOOK NOW!';
    showImg.textContent = 'SHOW MORE';
    capacity.textContent = 'Capacity: ' + cottage.cottageCapacity;


    if (cottage.cottageExtraImg) {

        for (let i = 0; i < cottage.cottageExtraImg.length; i++) {
            let addExtraImg = document.createElement('img');
            showImgContainer.appendChild(addExtraImg);
            addExtraImg.src = cottage.cottageExtraImg[i]
        }
    }
}




for (let i = 0; i < locations.length; i++) {
    Cottages.prototype.inject(locations[i]);
}





let form = document.getElementById("customerData");



form.addEventListener('submit', handleCustomerSubmit);

function handleCustomerSubmit(event) {

    event.preventDefault();

    let place = event.target.categouryPlace.value;

    let pplCapacity = event.target.categouryPpl.value;



    result.innerHTML = "";

    for (let i = 0; i < locations.length; i++) {
        if (place == 'NoPlaceCategoury') {

            Cottages.prototype.inject(locations[i]);
            // console.log('first', Cottages);


        }
        if ((locations[i].cottageCapacity == pplCapacity) && (locations[i].cottageLocation == place)) {

            Cottages.prototype.inject(locations[i]);




            let render = new Save(cottageName[i], cottageImg[i])
            localStorage.setItem('keyf', JSON.stringify(all));



        }

    }

    let filter = JSON.parse(localStorage.getItem('keyf'))
    console.log(filter);

    for (let i = 0; i < filter.length; i++) {

        booknow[i].onclick = function() {
            all.shift();
            let render = new Save(filter[i].name, filter[i].path)
            localStorage.setItem('key', JSON.stringify(all));

            window.open("./form.html");
        }


    }

}


for (let i = 0; i < locations.length; i++) {

    booknow[i].onclick = function() {
        all.shift();
        let render = new Save(cottageName[i], cottageImg[i])
        localStorage.setItem('key', JSON.stringify(all));

        window.open("./form.html");
    }

}


//////////////////////////////////////////////////////////////////

let showButton = document.getElementsByClassName('showBtn');
let allExtarImg = document.getElementsByClassName('moreImg');

for (let i = 0; i < showButton.length; i++) {
    showButton[i].addEventListener('click', render);
}

function allButtonsShowMore() {
    for (let i = 0; i < showButton.length; i++) {
        showButton[i].textContent = "Show more"
    }
}
// // add listener function
function render(event) {
    // change to none from block
    if (document.getElementById(event.target.id + "-extra").style.display === 'block') {
        document.getElementById(event.target.id + "-extra").style.display = 'none';
        allButtonsShowMore()
            // change to block from none
    } else {
        for (let i = 0; i < allExtarImg.length; i++) {
            allExtarImg[i].style.display = 'none'
        }
        allButtonsShowMore()
        document.getElementById(event.target.id + "-extra").style.display = 'block';
        event.target.textContent = "Show less"
    }
}