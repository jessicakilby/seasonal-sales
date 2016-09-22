
function executeProducts () {

  var data = JSON.parse(this.responseText);
  // console.log("this.responseText:", this.responseText);
  console.log("data", data);

  var productEl = document.getElementById("outputContainer");
  var currentProd;
  
  for (var i = 0; i < data.products.length; i++) {
    currentProd = data.products[i];

    var productsData = `<h1>${currentProd.id}</h1>`;
    productsData += `<div class='name'>Product: ${currentProd.name}</div>`;
    productsData += `<div class='price'>Price: ${currentProd.price}</div>`;
    productsData += `<div class='category_id'>Discount Group: #${currentProd.category_id}</div>`;
    productsData += `</div>`;
    productEl.innerHTML += `<div class='products-block row container col-xs-6 col-sm-4'>${productsData}</div>`;
  };
}

function executeCategories () {
  var data = JSON.parse(this.responseText);
  var categoriesEl = document.getElementById("selectionArea");
  var categoriesData = "";
  var crntCat;

  for (var i = 0; i < data.categories.length; i++) {
    crntCat = data.categories[i];

    categoriesData += `<option>${crntCat.season_discount}</option>`;
  };
    categoriesEl.innerHTML += `<select class='select'>${categoriesData}</select>`;

}


var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeProducts);
myRequest.open("GET", "products.json");
myRequest.send();

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeCategories);
myRequest.open("GET", "categories.json");
myRequest.send();
