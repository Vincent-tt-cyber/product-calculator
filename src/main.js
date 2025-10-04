import { createProduct, renderProducts } from "./modules/func";

document.addEventListener("DOMContentLoaded", () => {
  let inputTitle = document.querySelector(".input-title");
  let inputPrice = document.querySelector(".input-price");
  let inputAmount = document.querySelector(".input-amount");
  let addProductBtn = document.querySelector(".button-add");

  let tableContent = document.querySelector(".table-content");

  let products = [];

  if (localStorage.getItem("productsList")) {
    products = JSON.parse(localStorage.getItem("productsList"));
  }

  products.forEach((product) => renderProducts(product));

  checkEmptyList();

  addProductBtn.addEventListener("click", () => {
    let title = inputTitle.value;
    let price = inputPrice.value;
    let amount = inputAmount.value;

    let newProduct = createProduct(title, price, amount);

    console.log(newProduct);
  });

  function checkEmptyList() {
    if (products.length == 0) {
      let emptyHtml = `<div class="empty-list">
        <p>Список продуктов пуст</p>
        <small>Добавьте хотябы один продукт</small>
        </div>`;

      tableContent.innerHTML = emptyHtml;
    }
  }

  function renderProducts(product) {
    // let productTitle = document.createElement("div");
  }
});
