'use strict';

var products = [];
var randomProducts = [];
var choices = document.getElementById('product-choices');

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

function showRandomProduct() {
  var img;
  products.innerHTML = '';
  for(var i = 0; i < 3; i++) {
    img = document.createElement('img');
    img.src = products[randomProducts[i]].filepath;
    img.alt = products[randomProducts[i]].name;
    img.title = products[randomProducts[i]].name;
    products[randomProducts[i]].views++;
    choices.appendChild(img);
    console.log(randomProducts[i]);
  }    
}

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

getRandomProducts();
showRandomProduct();
