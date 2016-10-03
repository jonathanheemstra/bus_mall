'use strict';
console.log('Connection Working!');

var setsDisplayed = 0;
var productImages = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg'];


function genRandomImage(max) {
  var randomNumber = Math.floor(Math.random() * (max - 1 + 1)) + 1);
}
console.log(productImages.length);

for (var i = 0; i < productImages.length; i++) {
  genRandomImage(productImages.length);
}
