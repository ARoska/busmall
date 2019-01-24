'use strict';

var resultsChart;
var choices = document.getElementById('product-choices');
var results = document.getElementById('results-list');
var imageNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var allProducts = [];
var randomProducts = [];
var totalClicks = 0;
var productNames = [];
var productClicks = [];
var productViews = [];

function Product(name) {
  this.filepath = `img/${name}.jpg`;
  this.name = name;
  this.views = 0;
  this.clicks = 0;
  allProducts.push(this);
}

if(localStorage.busmall) {
  var retrievedBusmall = localStorage.busmall;
  retrievedBusmall = JSON.parse(retrievedBusmall);
  allProducts = retrievedBusmall;
} else {
  for(var i = 0; i < imageNames.length; i++) {
  new Product(imageNames[i]);
  }
}


function getRandomProducts() {
  for(var i = 0; i < 3;){
    if(randomProducts.length > 5) {
      randomProducts.pop();
    }  
    var random = Math.floor(Math.random() * allProducts.length);
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
    img.src = allProducts[randomProducts[i]].filepath;
    img.alt = allProducts[randomProducts[i]].name;
    img.title = allProducts[randomProducts[i]].name;
    allProducts[randomProducts[i]].views++;
    choices.appendChild(img);
  }    
}

function printResults() {
  results.hidden = true;
  results.textContent = "Results:";
  for(var i = 0; i < allProducts.length; i++) {
    var liEl = document.createElement('liEl');
    liEl.textContent = `${allProducts[i].clicks} votes for ${allProducts[i].name}`;
    results.appendChild(liEl);
  }
}

function updateChartArrays() {
  for(var i = 0; i < allProducts.length; i++) {
    productNames.push(allProducts[i].name);
    productClicks.push(allProducts[i].clicks);
    productViews.push(allProducts[i].views);
  }
}

function handleClick(event) {
  for(var i = 0; i < allProducts.length; i++) {

    if (event.target.alt === allProducts[i].name) {
      allProducts[i].clicks++;
      totalClicks++;

      if(totalClicks === 25 ) {
        choices.removeEventListener('click', handleClick);
        updateChartArrays();
        printResults();
        drawChart();
        localStorage.busmall = JSON.stringify(allProducts);
        return;
      }
  
      getRandomProducts();
      showRandomProducts();
    }

    if(event.target.alt === undefined) {
      return alert('Please click on an image');
    }
  }

}

var data = {
  labels: productNames,
  datasets: [{
    label: 'Results',
    data: productClicks,
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
  }]
};

function drawChart(){
  var ctx = document.getElementById('results').getContext('2d');
  resultsChart = new Chart(ctx, {
    type: 'bar',
    data: data,
  });
}

getRandomProducts();
showRandomProducts();

choices.addEventListener('click', handleClick);
