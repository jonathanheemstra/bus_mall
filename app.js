/************************
Remaining Problems
2. Prevent images from being pulled back to back
************************/

'use strict';

/************************
Declare Data
************************/

var setsDisplayed = 0;
var printSets = document.getElementById('products');
var productClicks = document.getElementById('products');
var products = [];
var randomNumberSets = [];

function Products(productImages, productName){
  this.productImages = productImages;
  this.numberOfTimesDisplayed = 0;
  this.numberOfTimesClicked = 0;
  this.imageLocation = 'img/' + productImages;
  this.productNumber = 0;
  this.productName = productName;
  this.calcProductNumber();
  products.push(this);
}
Products.prototype.calcProductNumber = function () {
  for (var i = 0; i < products.length; i++) {
    this.productNumber = products.length;
  }
};

new Products('bag.jpg','Bag');
new Products('banana.jpg','Banana');
new Products('bathroom.jpg','Bathroom');
new Products('boots.jpg','Boots');
new Products('breakfast.jpg','Breakfast');
new Products('bubblegum.jpg','BubbleGum');
new Products('chair.jpg','Chair');
new Products('cthulhu.jpg','Cthulhu');
new Products('dog-duck.jpg','Dog Duck');
new Products('dragon.jpg','Dragon');
new Products('pen.jpg','Pen');
new Products('pet-sweep.jpg','Pet Sweeper');
new Products('scissors.jpg','Scissors');
new Products('shark.jpg','Shark');
new Products('sweep.png','Sweep');
new Products('tauntaun.jpg','Tauntaun');
new Products('unicorn.jpg','Unicorn');
new Products('usb.gif','USB');
new Products('water-can.jpg','Water Can');
new Products('wine-glass.jpg','Wine Glass');

/************************
Define Actions
************************/
function clickListener (event) {
  if (setsDisplayed < 2) {
    var clickedProduct = event.target.alt;
    if (clickedProduct === undefined) {
      return alert('Please click on one of the images!');
    }
    products[clickedProduct].numberOfTimesClicked += 1;
    genRandomImage(products.length);
    console.clear();
    console.table(products);
  } else {
    productClicks.removeEventListener('click', clickListener);
    createCanvas();
    drawData();
  }
}

//Generate 3 random images
function genRandomImage(max) {
  setsDisplayed += 1;
  printSets.innerHTML = '';
  var ulEl = document.createElement('ul');
  var randomNumbersGenerated = [];
  var classes = ['left','center','right'];
  var repeatRandomNumber = false;
  for (var i = 0; i < 3; i++) {
    var randomNumber = Math.floor(Math.random() * (max - 0)) + 0;
    for (var a = 0; a < randomNumbersGenerated.length; a++) {
      if (randomNumber === randomNumbersGenerated[a]) {
        repeatRandomNumber = true;
        while (repeatRandomNumber === true) {
          randomNumber = Math.floor(Math.random() * (max - 0)) + 0;
          if (randomNumber === randomNumbersGenerated[0]) {
            repeatRandomNumber = true;
          } else if (randomNumber === randomNumbersGenerated[1]) {
            repeatRandomNumber = true;
          } else {
            repeatRandomNumber = false;
          }
        }
      }
    }
    randomNumbersGenerated.push(randomNumber);
    var liEl = document.createElement('li');
    var imgEl = document.createElement('img');
    imgEl.src = products[randomNumber].imageLocation;
    imgEl.setAttribute('alt', products[randomNumber].productNumber);
    liEl.setAttribute('class',classes[i]);
    liEl.appendChild(imgEl);
    ulEl.appendChild(liEl);
    products[randomNumber].numberOfTimesDisplayed++;
  }
  genCurrentQuestionNumber();
  printSets.appendChild(ulEl);
  randomNumberSets.push(randomNumbersGenerated);
}

function genCurrentQuestionNumber () {
  var h5El = document.createElement('h5');
  h5El.textContent = 'Selection ' + setsDisplayed + ' of 25';
  printSets.appendChild(h5El);
}




function createList () {
  printSets.innerHTML = '';
  for (var i = 0; i < products.length; i++) {
    var h4El = document.createElement('h4');
    h4El.textContent = products[i].productName;
    printSets.appendChild(h4El);
    var ulEl = document.createElement('ul');
    var liEl = document.createElement('li');
    var liEl2 = document.createElement('li');
    liEl.setAttribute('class','results');
    liEl.textContent = 'Number of times displayed: ' + products[i].numberOfTimesDisplayed;
    liEl2.textContent = 'Number of times clicked: ' + products[i].numberOfTimesClicked;
    ulEl.appendChild(liEl);
    ulEl.appendChild(liEl2);
    printSets.appendChild(ulEl);
  }
}

function createCanvas () {
  printSets.innerHTML = '';
  var canvasEl = document.createElement('canvas');
  canvasEl.setAttribute('id', 'data');
  canvasEl.textContent = ' ';
  printSets.appendChild(canvasEl);
}
function drawData () {
  var ctx = document.getElementById('data').getContext('2d');
  console.log(ctx);
}
/************************
Exectue Actions
************************/

productClicks.addEventListener('click', clickListener);

genRandomImage(products.length);
console.table(products);
