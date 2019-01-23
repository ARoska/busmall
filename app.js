'use strict';

var products = [];
var randomProducts = [];
var totalClicks = 0;
var choices = document.getElementById('product-choices');
var results = document.getElementById('results');

function Product(name) {
  this.filepath = `img/${name}.jpg`;
  this.name = name;
  this.views = 0;
  this.clicks = 0;
  products.push(this);
}

new Product('bag');
new Product('banana');
new Product('bathroom');
new Product('boots');
new Product('breakfast');
new Product('bubblegum');
new Product('chair');
new Product('cthulhu');
new Product('dog-duck');
new Product('dragon');
new Product('pen');
new Product('pet-sweep');
new Product('scissors');
new Product('shark');
new Product('sweep');
new Product('tauntaun');
new Product('unicorn');
new Product('usb');
new Product('water-can');
new Product('wine-glass');

function getRandomProducts() {
  for(var i = 0; i < 3;){
    if(randomProducts.length > 5) {
      randomProducts.pop();
    }  
    var random = Math.floor(Math.random() * products.length);
    if(!randomProducts.includes(random)) {
      randomProducts.unshift(random);
      i++;
    }
  }
}
function showRandomProducts() {
  var img;
  choices.innerHTML = '';
  for(var i = 0; i < 3; i++) {
    img = document.createElement('img');
    img.src = products[randomProducts[i]].filepath;
    img.alt = products[randomProducts[i]].name;
    img.title = products[randomProducts[i]].name;
    products[randomProducts[i]].views++;
    choices.appendChild(img);
  }    
}


function printResults() {
  var li;
  results.textContent = "Results:";
  for(var i = 0; i < products.length; i++) {
    li = document.createElement('li');
    li.textContent = `${products[i].clicks} votes for ${products[i].name}`;
    results.appendChild(li);
  }
}

function handleClick(event) {
  for(var i = 0; i < products.length; i++)
  if (event.target.alt === products[i].name) {
    products[i].clicks++;
    totalClicks++;
    getRandomProducts();
    showRandomProducts();
  }
  if(event.target.alt === undefined) {
    return alert('Please click on an image');
  }
  if(totalClicks === 25) {
    choices.removeEventListener('click', handleClick);
    printResults();
  }
}

choices.addEventListener('click', handleClick);


getRandomProducts();
showRandomProducts();
