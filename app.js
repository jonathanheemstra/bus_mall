'use strict';
console.log('Connection Working!');

var setsDisplayed = 0;
var printSets = document.getElementById('products');
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

function genRandomImage(max) {
  var ulEl = document.createElement('ul');
  var randomNumbersGenerated = [];
  for (var i = 0; i < 3; i++) {
    var randomNumber = Math.floor(Math.random() * (max - 0)) + 0;
    console.log('Random Product ' + (i + 1) + ': ' + randomNumber);
    var liEl = document.createElement('li');
    var imgEl = document.createElement('img');
    imgEl.src = products[randomNumber].imageLocation;
    liEl.appendChild(imgEl);
    ulEl.appendChild(liEl);
    randomNumbersGenerated.push(randomNumber);
  }
  printSets.appendChild(ulEl);
  randomNumberSets.push(randomNumbersGenerated);
  console.log('3 random numbers pushed to array');
}
genRandomImage(products.length);
