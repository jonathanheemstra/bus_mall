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
var chartTypes = [['list', 'See results as list'],['bar', 'See results in bar chart']];

function Products(productImages, productName, timesClicked, timesDisplayed, productNumber){//timesClicked timesDisplayed and productNumber added to constructor function to help with issues relating to local storage items not pulling properly when running functions created for defined variables
  this.productImages = productImages;
  this.numberOfTimesDisplayed = timesDisplayed || 0;//or statement that checks whether timesDisplayed has a value. if not gives it a value of 0
  this.numberOfTimesClicked = timesClicked || 0; //or statement that checks whether timesClicked has a value. if not gives it a value of 0
  this.imageLocation = 'img/' + productImages;
  this.productNumber = productNumber || 0; //or statement that checks whether productNumber has a value. if not gives it a value of 0
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
//newly added localStorage if statement checks if there is any products array available. If not runs product array created below
if (localStorage.getItem('products')){
  var productsStringified = localStorage.getItem('products');
  var productsUnstringified = JSON.parse(productsStringified);
  console.log(productsUnstringified);
  //for loop there to construct products pulled from local storage
  for (var i = 0; i < productsUnstringified.length; i++) {
    var currentProduct = productsUnstringified[i];
    new Products(currentProduct.productImages,
                 currentProduct.productName, currentProduct.numberOfTimesClicked, currentProduct.numberOfTimesDisplayed, currentProduct.productNumber
               ); //eslint-disable-line
  }
} else {
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
}



/************************
Define Actions
************************/
//stores product array in local storage
function clickStorage(){
  console.log('clickStorage');
  var productsStringified = JSON.stringify(products);
  localStorage.setItem('products', productsStringified);
}




function clickListener (event) {
  var clickedProduct = event.target.alt;
  if (setsDisplayed < 25) {
    if (clickedProduct === undefined) {
      return alert('Please click on one of the images!');
    }
    products[clickedProduct].numberOfTimesClicked += 1;
    clickStorage();
    genRandomImage(products.length);
    console.clear();
    console.table(products);
  } else {
    products[clickedProduct].numberOfTimesClicked += 1;
    for (var i = 0; i < products.length; i++) {
      products[i].findNumberOfTimesClicked();
      products[i].createProductData();
    }
    clickStorage();
    productClicks.removeEventListener('click', clickListener);
    createButtons();
    console.clear();
    console.table(products);
  }
}

function buttonListener (event) {
  var clickedButton = event.target.id;
  if (clickedButton === 'list') {
    createList();
  } else if (clickedButton === 'bar') {
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
  // var adjustSetsDisplayed = setsDisplayed - 1;
  // console.log(adjustSetsDisplayed);
  // var repeatedSet = randomNumberSets[adjustSetsDisplayed];
  // console.log(repeatedSet);
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
