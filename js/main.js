document.addEventListener("DOMContentLoaded", () => {
  const inputName = document.querySelector(".input-name");
  const inputPrice = document.querySelector(".input-price");
  const inputAmount = document.querySelector(".input-amount");
  const addProductButton = document.querySelector(".addProductBtn");
  const productsTable = document.querySelector(".products-table");
  const resultDiv = document.querySelector(".result");
  const totalSumElement = document.querySelector(".total");

  let productsList = [];

  if (localStorage.getItem("productsList")) {
    productsList = JSON.parse(localStorage.getItem("productsList"));
  }

  productsList.forEach((product) => renderProducts(product));

  addProductButton.addEventListener("click", addProduct);

  function addProduct() {
    const productTitle = inputName.value;
    const productPrice = inputPrice.value;
    const productAmount = inputAmount.value;

    if (productTitle === "" || productTitle === "" || productTitle === "") {
      alert("Заполните все поля");
      return;
    }

    const newProduct = {
      id: Date.now(),
      title: productTitle,
      price: productPrice,
      amount: productAmount,
      createdAt: new Date(),
    };

    productsList.push(newProduct);

    totalSum();

    saveToLocalStorage();

    renderProducts(newProduct);

    inputName.value = "";
    inputPrice.value = "";
    inputAmount.value = "";
  }

  function saveToLocalStorage() {
    localStorage.setItem("productsList", JSON.stringify(productsList));
  }

  function renderProducts(product) {
    const cellRow = document.createElement("tr");
    cellRow.id = product.id;

    const cellTitle = document.createElement("td");
    cellTitle.textContent = product.title;
    cellRow.appendChild(cellTitle);

    const cellPrice = document.createElement("td");
    cellPrice.textContent = product.price;
    cellRow.appendChild(cellPrice);

    const cellAmount = document.createElement("td");
    cellAmount.textContent = product.amount;
    cellRow.appendChild(cellAmount);

    const cellSum = document.createElement("td");
    cellSum.textContent = Number(product.amount) * Number(product.price);
    cellRow.appendChild(cellSum);

    const cellDelete = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Удалить";
    cellDelete.appendChild(deleteBtn);
    cellRow.appendChild(cellDelete);


    deleteBtn.addEventListener("click", () => {
      productsList = productsList.filter((item) => item.id !== product.id);
      saveToLocalStorage();
      totalSum();
      cellRow.remove();
    });

    productsTable.appendChild(cellRow);

    totalSum();

    // const delBtn = document.querySelector(".delete-btn");
    // delBtn.addEventListener("click", deleteProduct(product.id));
  }
  function totalSum() {
    let sum = 0;
    for (let i = 0; i < productsList.length; i++) {
      sum += Number(productsList[i].price) * Number(productsList[i].amount);
    }

    resultDiv.textContent = "Общий итог: " + sum + " руб.";
    totalSumElement.textContent = sum + " рублей";


    deleteBtn.addEventListener("click", () => {
      productsList = productsList.filter((item) => item.id !== product.id);
      saveToLocalStorage();
      cellRow.remove();
    });

    productsTable.appendChild(cellRow);

    // const delBtn = document.querySelector(".delete-btn");
    // delBtn.addEventListener("click", deleteProduct(product.id));

  }
});
