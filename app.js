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
var productNames = [];
var numberOfTimesClicked = [];
var productData = [];
var tempRandomNumber = [];
var chartTypes = [['list', 'See results as list'],['bar', 'See results in bar chart'],['pie', 'See results in pie chart']];

function Products(productImages, productName){
  this.productImages = productImages;
  this.numberOfTimesDisplayed = 0;
  this.numberOfTimesClicked = 0;
  this.imageLocation = 'img/' + productImages;
  this.productNumber = 0;
  this.productName = productName;
  this.productData = [];
  this.calcProductNumber();
  this.findProductName();
  products.push(this);
}
Products.prototype.calcProductNumber = function () {
  for (var i = 0; i < products.length; i++) {
    this.productNumber = products.length;
  }
};
Products.prototype.findProductName = function () {
  productNames.push(this.productName);
};
Products.prototype.findNumberOfTimesClicked = function () {
  numberOfTimesClicked.push(this.numberOfTimesClicked);
};
Products.prototype.createProductData = function () {
  this.productData.push(this.numberOfTimesClicked, this.numberOfTimesDisplayed);
  productData.push(this.productData);
};

new Products('bag.jpg','Bag');
new Products('banana.jpg','Banana');
new Products('bathroom.jpg','Bathroom');
new Products('boots.jpg','Boots');
new Products('breakfast.jpg','Breakfast');
new Products('bubblegum.jpg','BubbleGum');
// new Products('chair.jpg','Chair');
// new Products('cthulhu.jpg','Cthulhu');
// new Products('dog-duck.jpg','Dog Duck');
// new Products('dragon.jpg','Dragon');
// new Products('pen.jpg','Pen');
// new Products('pet-sweep.jpg','Pet Sweeper');
// new Products('scissors.jpg','Scissors');
// new Products('shark.jpg','Shark');
// new Products('sweep.png','Sweep');
// new Products('tauntaun.jpg','Tauntaun');
// new Products('unicorn.jpg','Unicorn');
// new Products('usb.gif','USB');
// new Products('water-can.jpg','Water Can');
// new Products('wine-glass.jpg','Wine Glass');

/************************
Define Actions
************************/
function clickListener (event) {
  var clickedProduct = event.target.alt;
  if (setsDisplayed < 25) {
    if (clickedProduct === undefined) {
      return alert('Please click on one of the images!');
    }
    products[clickedProduct].numberOfTimesClicked += 1;
    genRandomImage(products.length);
    // console.clear();
    // console.table(products);
  } else {
    products[clickedProduct].numberOfTimesClicked += 1;
    for (var i = 0; i < products.length; i++) {
      products[i].findNumberOfTimesClicked();
      products[i].createProductData();
    }
    productClicks.removeEventListener('click', clickListener);
    createButtons();
    // console.clear();
    // console.table(products);
  }
}

function buttonListener (event) {
  var clickedButton = event.target.id;
  if (clickedButton === 'list') {
    createList();
  } else if (clickedButton === 'bar') {
    createCanvas();
    drawData();
  } else if (clickedButton === 'pie') {
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
          } else if (randomNumber === tempRandomNumber[0][0] || randomNumber === tempRandomNumber[0][1] || randomNumber === tempRandomNumber[0][2]) {
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
  if (setsDisplayed > 1) {
    tempRandomNumber = [];
  }
  tempRandomNumber.push(randomNumbersGenerated);
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
    ulEl.setAttribute('class','results');
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

function createButtons () {
  printSets.innerHTML = '';
  var buttonEl = document.createElement('button');
  buttonEl.setAttribute('id',chartTypes[0][0]);
  buttonEl.textContent = chartTypes[0][1];
  printSets.appendChild(buttonEl);
  var buttonEl2 = document.createElement('button');
  buttonEl2.setAttribute('id',chartTypes[1][0]);
  buttonEl2.textContent = chartTypes[1][1];
  printSets.appendChild(buttonEl2);
  var buttonEl3 = document.createElement('button');
  buttonEl3.setAttribute('id',chartTypes[2][0]);
  buttonEl3.textContent = chartTypes[2][1];
  printSets.appendChild(buttonEl3);
}

function drawData () {
  var ctx = document.getElementById('data').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            stepSize: 1,
          }
        }]
      }
    }
  });
}

var data = {
  labels: productNames,
  datasets: [
    {
      label: 'Number of times clicked',
      data: numberOfTimesClicked,
      backgroundColor: [
        '#4A75E6',
        '#EA2533',
        '#FEBC1F',
        '#4470E6',
        '#08AF22',
        '#4A75E6',
        '#EA2533',
        '#FEBC1F',
        '#4470E6',
        '#08AF22',
        '#4A75E6',
        '#EA2533',
        '#FEBC1F',
        '#4470E6',
        '#08AF22',
        '#4A75E6',
        '#EA2533',
        '#FEBC1F',
        '#4470E6',
        '#08AF22',
      ],
      borderColor: [
        '#4065C7',
        '#D1212E',
        '#D9A01A',
        '#3354AD',
        '#056E15',
        '#4065C7',
        '#D1212E',
        '#D9A01A',
        '#3354AD',
        '#056E15',
        '#4065C7',
        '#D1212E',
        '#D9A01A',
        '#3354AD',
        '#056E15',
        '#4065C7',
        '#D1212E',
        '#D9A01A',
        '#3354AD',
        '#056E15',
      ],
      borderWidth: 1,
    }]
};
/************************
Exectue Actions
************************/

productClicks.addEventListener('click', clickListener);
productClicks.addEventListener('click', buttonListener);

genRandomImage(products.length);
// console.table(products);
