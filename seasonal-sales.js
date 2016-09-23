var productData;
function executeProducts () {
  productData = JSON.parse(this.responseText);
  var productEl = document.getElementById("outputContainer");
  var currentProd;
  
  for (var i = 0; i < productData.products.length; i++) {
    currentProd = productData.products[i];

    var productsDom = `<h1>${currentProd.id}</h1>`;
    productsDom += `<div class='name'>Product: ${currentProd.name}</div>`;
    productsDom += `<div class='price'>Price: ${currentProd.price}</div>`;
    productsDom += `<div class='category_id'>Discount Group: #${currentProd.category_id}</div>`;
    productsDom += `</div>`;
    productEl.innerHTML += `<div class='products-block row container col-xs-6 col-sm-4'>${productsDom}</div>`;
  };
}

var categoriesData;
function executeCategories () {
  categoriesData = JSON.parse(this.responseText);
  var categoriesEl = document.getElementById("selectionArea");
  var categoriesDom = "";
  var currentCatg;

  for (var i = 0; i < categoriesData.categories.length; i++) {
    currentCatg = categoriesData.categories[i];
    categoriesDom += `<option>${currentCatg.season_discount}</option>`
    ;
  };
  categoriesEl.innerHTML += `<label>Select A Season: </label><select id="select">${categoriesDom}</select>`; 
  addSelectionEventListener();
}

function addSelectionEventListener(){
  var selection = document.getElementById("select");
  selection.addEventListener("change", function(event){
    season = event.target.value;
    if(season === "Winter") {
      winterDiscount();
    } else if(season === "Autumn") {
      autumnDiscount();
    } else if(season === "Spring") {
      sprintDiscount();
    } else {
      console.log("something went wrong");
    }
  });

}
function winterDiscount() {
      console.log("go to winter");
}
function autumnDiscount() {
      console.log("go to Autumn");
}
function sprintDiscount() {
      console.log("go to spring");
}

// function priceSeasonDiscount(){
//   console.log("evenlistener worked");
//   console.log("this", this);
//   for (var i = 0; i < categoriesData.categories.length; i++) {
//     cCat = categoriesData.categories[i];
//   if (cCat.id === 1) {
//     newProdPrice = cProd.price-(cProd.price*cCat.season_discount);
//     console.log("Winter is here", cProd.price);
//   } else if (cCat.id === 2) {
//       console.log("Autumn is here", cProd.price);
//     } else if (cCat.id === 3) {
//         console.log("Spring is here", cProd.price);
//       } else {console.log("That was an epic fail");}
//   };
//   for (var i = 0; i < productData.products.length; i++) {
//     cProd = productData.products[i];
//   }
// }        


var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeProducts);
myRequest.open("GET", "products.json");
myRequest.send();

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeCategories);
myRequest.open("GET", "categories.json");
myRequest.send();
