'use strict';

var products = [];
var randomProducts = [];
var previousRandomProducts = [];

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
  randomProducts = [];
  while {}
}
