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
  // Create the row variable which sets the target to the grandparent of the row which is the table row
  const row = target.parentNode.parentNode;
  // Create the parent variable which is the whole table head
  const parent = row.parentNode;
  // Use the removeChild() method to remove the table row from the table head
  parent.removeChild(row);
  // Recalculate and update all of the prices to the total
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const productName = document.querySelector(
    ".create-product input[placeholder='Product Name']"
  ).value;
  console.log(productName);
  const productPrice = document.querySelector(
    ".create-product input[placeholder='Product Price']"
  ).value;
  console.log(productPrice);
  const productRow = document.createElement("tr");
  productRow.className = "product";
  productRow.innerHTML = `
  <td class="name">
  <span>${productName}</span>
  </td>
    <td class="price">
      $
      <span>${productPrice}</span>
    </td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;
  const table = document.querySelector("#cart tbody");
  table.appendChild(productRow);
  const removeBtns = productRow.querySelector(".btn-remove");
  removeBtns.addEventListener("click", removeProduct);
  document.querySelector(
    ".create-product input[placeholder='Product Name']"
  ).value = "";
  document.querySelector(
    ".create-product input[placeholder='Product Price']"
  ).value = 0;
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  // Event handler for the remove buttons
  const removeBtns = document.querySelectorAll(".btn-remove");
  // Iterate through all remove buttons
  for (let button of removeBtns) {
    button.addEventListener("click", removeProduct);
  }
  // Event handler for create button
  const createBtn = document.querySelector("#create");
  if (createBtn) {
    createBtn.addEventListener("click", createProduct);
  }
});
