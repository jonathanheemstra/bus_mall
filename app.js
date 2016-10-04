'use strict';
console.log('Connection Working!');

/************************
Declare Data
************************/

var setsDisplayed = 0;
var printSets = document.getElementById('products');
var productClicks = document.getElementById('products');
var products = [];
var randomNumberSets = [];

function Products(productImages){
  this.productImages = productImages;
  this.numberOfTimesDisplayed = 0;
  this.numberOfTimesClicked = 0;
  this.imageLocation = 'img/' + productImages;
  this.productNumber = 0;
  this.calcProductNumber();
  products.push(this);
}
Products.prototype.calcProductNumber = function () {
  for (var i = 0; i < products.length; i++) {
    this.productNumber = products.length;
  }
};

new Products('bag.jpg');
new Products('banana.jpg');
new Products('bathroom.jpg');
new Products('boots.jpg');
new Products('breakfast.jpg');
new Products('bubblegum.jpg');
new Products('chair.jpg');
new Products('cthulhu.jpg');
new Products('dog-duck.jpg');
new Products('dragon.jpg');
new Products('pen.jpg');
new Products('pet-sweep.jpg');
new Products('scissors.jpg');
new Products('shark.jpg');
new Products('sweep.png');
new Products('tauntaun.jpg');
new Products('unicorn.jpg');
new Products('usb.gif');
new Products('water-can.jpg');
new Products('wine-glass.jpg');
console.log('Products Constructed!');

/************************
Define Actions
************************/

//Generate 3 random images
function genRandomImage(max) {
  printSets.innerHTML = '';
  var ulEl = document.createElement('ul');
  var randomNumbersGenerated = [];
  var classes = ['left','center','right'];
  var repeatRandomNumber = false;

  for (var i = 0; i < 3; i++) {
    var randomNumber = Math.floor(Math.random() * (max - 0)) + 0;

    for (var a = 0; a < randomNumbersGenerated.length; a++) {
      if (randomNumbersGenerated[a] === randomNumber) {
        repeatRandomNumber = true;
        console.log('random number already generated: ' + randomNumber);
      }
    }

    if (repeatRandomNumber === true) {
      randomNumber = Math.floor(Math.random() * (max - 0)) + 0;
    }

    randomNumbersGenerated.push(randomNumber);
    console.log('Random Product ' + (i + 1) + ': ' + randomNumber);
    var liEl = document.createElement('li');
    var imgEl = document.createElement('img');
    imgEl.src = products[randomNumber].imageLocation;
    imgEl.setAttribute('alt', products[randomNumber].productNumber);
    liEl.setAttribute('class',classes[i]);
    liEl.appendChild(imgEl);
    ulEl.appendChild(liEl);
    products[randomNumber].numberOfTimesDisplayed += 1;
  }

  printSets.appendChild(ulEl);
  randomNumberSets.push(randomNumbersGenerated);
  setsDisplayed += 1;
  console.log('3 random numbers pushed to array');
  console.log('Number of sets displayed: ' + setsDisplayed);
}

function clickListener (event) {
  console.log('Click listener fires!');
  var clickedProduct = event.target.alt;
  console.log(clickedProduct);
  products[clickedProduct].numberOfTimesClicked += 1;
  genRandomImage(products.length);
}
/************************
Exectue Actions
************************/

productClicks.addEventListener('click', clickListener);
genRandomImage(products.length);
