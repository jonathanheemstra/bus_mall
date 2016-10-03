'use strict';
console.log('Connection Working!');

var setsDisplayed = 0;
var printSets = document.getElementById('products');
var products = [];

function Products(productImages){
  this.productImages = productImages;
  console.log('img/' + this.productImages);
  products.push(this);
}

function genRandomImage(max) {
  for (var i = 0; i < 3; i++) {
    var randomNumber = Math.floor(Math.random() * (max - 0 + 1)) + 0;
    var ulEl = document.createElement('ul');
    var liEl = document.createElement('li');
    var imgEl = document.createElement('img');
    imgEl.src = 'img/' + productImages[randomNumber];
    liEl.appendChild(imgEl);
    ulEl.appendChild(liEl);
    printSets.appendChild(ulEl);
  }
}
// genRandomImage(productImages.length);

new Products('bag.jpg');
new Products('banana.jpg');
new Products('bathroom.jpg');
new Products('boots.jpg');
new Products('breakfast.jpg');
