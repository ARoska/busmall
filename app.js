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

// function showRandomProduct() {
//   var img = document.createElement('img');
//   products.innerHTML = '';
//   random = Math.floor(Math.random() * products.length);
//   img.src = products[random].filepath;
//   img.alt = products[random].name;
//   img.title = products[random].name;
//   products[random].views++;
//   choices.appendChild(img);
    
// }

// showRandomProduct();
// showRandomProduct();
// showRandomProduct();

function getRandomProducts() {
  if(randomProducts.length > 3) {
    randomProducts.shift();
    randomProducts.shift();
    randomProducts.shift();
  }
  for(var i = 0; i < 3;){
    var random = Math.floor(Math.random() * products.length);
    if(!randomProducts.includes(random)) {
      randomProducts.push(random);
      i++;
    }

  }
}
