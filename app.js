/************************
Remaining Problems
1. Prevent repeat images from showing up at the same time
2. Prevent images from being pulled back to back
3. Print results to page
************************/



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
      if (randomNumber === randomNumbersGenerated[a]) {
        repeatRandomNumber = true;
      }
    }
    while (repeatRandomNumber === true) {
      randomNumber = Math.floor(Math.random() * (max - 0)) + 0;
      console.log('Repeat random ' + randomNumber);
      for (a = 0; a < randomNumbersGenerated.length; a++) {
        if (randomNumber === randomNumbersGenerated[a]) {
          repeatRandomNumber = true;
          console.log('Found repeat random number. Need to regen');
        } else {
          repeatRandomNumber = false;
        }
      }
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
  var clickedProduct = event.target.alt;
  console.log('Click listener fires!');
  if (clickedProduct === undefined) {
    return alert('Please click on one of the images!');
  }
  console.log(clickedProduct);
  products[clickedProduct].numberOfTimesClicked += 1;
  genRandomImage(products.length);

  if (setsDisplayed > 25) {
    productClicks.removeEventListener('click', clickListener);
    createList();
  }
}

function createList () {
  printSets.innerHTML = '';
  for (var i = 0; i < products.length; i++) {
    var h4El = document.createElement('h4');
    h4El.textContent = products[i].productName;
    printSets.appendChild(h4El);
    var ulEl = document.createElement('ul');
    var liEl = document.createElement('li');
    liEl.setAttribute('class','results');
    liEl.textContent = 'Number of times displayed: ' + products[i].numberOfTimesDisplayed + ' | ' + 'Number of times clicked: ' + products[i].numberOfTimesClicked;
    ulEl.appendChild(liEl);
    printSets.appendChild(ulEl);
  }
}

/************************
Exectue Actions
************************/

productClicks.addEventListener('click', clickListener);

genRandomImage(products.length);
