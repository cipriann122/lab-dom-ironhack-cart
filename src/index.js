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
  // ITERATION 3
  //... your code goes here
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
