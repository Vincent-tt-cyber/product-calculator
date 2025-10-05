import { createProduct, deleteProduct } from "./modules/func";

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

  addProductBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let title = inputTitle.value;
    let price = inputPrice.value;
    let amount = inputAmount.value;

    if (!title || !price || !amount) {
      alert("Заполните пожалуйста все поля!");
      return;
    }

    let newProduct = createProduct(title, price, amount);
    products.push(newProduct);
    renderProducts(newProduct);
    saveProducts();

    inputTitle.value = "";
    inputPrice.value = "";
    inputAmount.value = "";

    checkEmptyList();
  });

  function checkEmptyList() {
    if (products.length == 0) {
      let emptyHtml = `<div id="empty-list">
        <p>Список продуктов пуст</p>
        <small>Добавьте хотябы один продукт</small>
        </div>`;

      tableContent.innerHTML = emptyHtml;
    }
    if (products.length > 0) {
      const emptyListElem = document.querySelector("#empty-list ");

      emptyListElem ? emptyListElem.remove() : null;
    }
  }

  function handleDeleteProduct(productID) {
    products = deleteProduct(products, productID);
    saveProducts();

    const productHtmlElem = document.getElementById(productID);
    if (productHtmlElem) {
      productHtmlElem.remove();
    }

    checkEmptyList();
  }

  function saveProducts() {
    localStorage.setItem("productsList", JSON.stringify(products));
  }

  function renderProducts(product) {
    const productItemRow = document.createElement("div");
    productItemRow.classList.add("product-item");
    productItemRow.id = product.id;

    const productTitle = document.createElement("div");
    productTitle.textContent = product.title;
    productItemRow.appendChild(productTitle);

    const productPrice = document.createElement("div");
    productPrice.textContent = product.price;
    productItemRow.appendChild(productPrice);

    const productAmount = document.createElement("div");
    productAmount.textContent = product.amount;
    productItemRow.appendChild(productAmount);

    const productSum = document.createElement("div");
    productSum.textContent = Number(product.amount) * Number(product.price);
    productItemRow.appendChild(productSum);

    const productDeleteCell = document.createElement("div");
    const productDeleteBtn = document.createElement("button");
    productDeleteCell.classList.add("del-cell");
    productDeleteBtn.textContent = "Удалить";
    productDeleteBtn.classList.add("button");
    productDeleteBtn.classList.add("button-delete");

    productDeleteBtn.addEventListener("click", () =>
      handleDeleteProduct(product.id)
    );

    productDeleteCell.appendChild(productDeleteBtn);
    productItemRow.appendChild(productDeleteCell);

    tableContent.appendChild(productItemRow);
  }
});
