'use strict';
console.log('Connection Working!');

var setsDisplayed = 0;
var printSets = document.getElementById('products');
var productImages = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg'];


function genRandomImage(max) {
  var randomNumber = Math.floor(Math.random() * (max - 0 + 1)) + 0;
  var ulEl = document.createElement('ul');
  var liEl = document.createElement('li');
  var imgEl = document.createElement('img');
  imgEl.textContent = 'img/' + productImages[randomNumber];
  liEl.appendChild(imgEl);
  ulEl.appendChild(liEl);
  printSets.appendChild(ulEl);
}
console.log(productImages.length);

for (var i = 0; i < productImages.length; i++) {
  genRandomImage(productImages.length);
}
