'use strict';
console.log('Connection Working!');

var setsDisplayed = 0;
var printSets = document.getElementById('products');
var products = [];

function Products(productImages){
  this.productImages = productImages;
  this.numberOfTimesDisplayed = 0;
  this.numberOfTimesClicked = 0;
  this.imageLocation = 'img/' + productImages;
  console.log('Products Array Working!');
  products.push(this);
}

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

function genRandomImage(max) {
  var ulEl = document.createElement('ul');
  for (var i = 0; i < 3; i++) {
    var randomNumber = Math.floor(Math.random() * (max - 0 + 1)) + 0;
    var liEl = document.createElement('li');
    var imgEl = document.createElement('img');
    imgEl.src = products[randomNumber].imageLocation;
    liEl.appendChild(imgEl);
    ulEl.appendChild(liEl);
  }
  printSets.appendChild(ulEl);
  console.log('Generate 3 random images working!');
}
genRandomImage(products.length);
