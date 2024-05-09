// ITERATION 1

function updateSubtotal(product) {
  // Get DOM elements (price, quantity)
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  // Extract their values
  const priceValue = parseFloat(price.textContent);
  const quantityValue = quantity.valueAsNumber;
  // Calculate the subtotal price
  const subTotalPrice = priceValue * quantityValue;
  // Get subtotal from HTML
  const subTotalValue = product.querySelector(".subtotal span");
  // Change subtotal text to the new subtotal
  subTotalValue.textContent = subTotalPrice;
  // Return subtotal value
  return subTotalPrice;
}

function calculateAll() {
  // ITERATION 2
  // Get all of the products in the "product" class name
  const products = document.getElementsByClassName("product");
  // Create a variable with the value of 0 which we will update later
  let productsTotal = 0;
  // Iterate over each product and update the variable above using the updateSubtotal function
  for (let product of products) {
    productsTotal += updateSubtotal(product);
  }
  // ITERATION 3
  // Update and display text content of the total value
  document.querySelector("#total-value span").textContent = productsTotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
