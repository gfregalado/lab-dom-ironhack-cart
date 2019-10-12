function deleteItem() {
  deleteProductTarget = getElementsByClassName("product")[0].removeChild;
}

function updatePriceByProduct(productPrice, index) {}

function getPriceByProduct() {
  let totalPrice = 0;
  let products = document.getElementsByClassName("product");
  for (i = 0; i < products.length; i++) {
    let amountForProduct = Number(
      document.getElementsByClassName("amountForProduct")[i].innerText
    );
    let quan = Number(document.getElementsByClassName("quantity")[i].value);
    let subtotal = amountForProduct * quan;
    document.getElementsByClassName("result")[i].innerHTML = subtotal;
    totalPrice += subtotal;
  }
  document.getElementsByClassName("totalResult")[0].innerHTML = totalPrice;
}

function getTotalPrice() {}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  //var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getPriceByProduct;
  //createItemButton.onclick = createNewItem();

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
