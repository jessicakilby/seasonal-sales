function executeIfXHRFails () {
  console.log("An error occurred while transferring");
}

function executeWhenChunksArrive () {
}

function executeAfterFileLoaded () {

  var data = JSON.parse(this.responseText);
  console.log("this.responseText:", this.responseText);
  console.log("data", data);

  var contentEl = document.getElementById("container")
  var categoriesData = "";
  // var productsData = "";
  var currentCategories;
  // var currentProducts;


  for (var i = 0; i < data.categories.length; i++) {
    currentCategories = data.categories[i];

    categoriesData += "<div class='categories-block'>";
      categoriesData += `<h1>${currentCategories.id}</h1>`;
      categoriesData += "<div class='name'>Category: ";
        categoriesData += currentCategories.name;
      categoriesData += "</div>";
      categoriesData += "<div class='season_discount'>Season: ";
        categoriesData += currentCategories.season_discount;
      categoriesData += "</div>";
      categoriesData += "<div class='discount'>Discount: $";
        categoriesData += currentCategories.discount;
      categoriesData += "</div>";
    categoriesData += "</div>";
  };
  
  // for (var i = 0; i < data.products.length; i++) {
  //   currentProducts = data.products[i];

  //   productsData += "<div class='products-block'>";
  //     productsData += `<h1>${currentProducts.id}</h1>`;
  //     productsData += "<div class='name'>Product: ";
  //       productsData += currentProducts.name;
  //     productsData += "</div>";
  //     productsData += "<div class='price'>Season: ";
  //       productsData += currentProducts.price;
  //     productsData += "</div>";
  //     productsData += "<div class='category_id'>Discount Group: #";
  //       productsData += currentProducts.category_id;
  //     productsData += "</div>";
  //   productsData += "</div>";
  // };

  console.log(categoriesData);
  // console.log(productsData);
  contentEl.innerHTML = categoriesData;
}

var myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", executeAfterFileLoaded);
myRequest.addEventListener("error", executeIfXHRFails);
myRequest.addEventListener("progress", executeWhenChunksArrive);
myRequest.open("GET", "products.json");
myRequest.open("GET", "categories.json");

myRequest.send();
