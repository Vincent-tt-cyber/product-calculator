document.addEventListener("DOMContentLoaded", () => {
  const inputName = document.querySelector(".input-name");
  const inputPrice = document.querySelector(".input-price");
  const inputAmount = document.querySelector(".input-amount");
  const addProductButton = document.querySelector(".addProductBtn");
  const productsTable = document.querySelector(".products-table");
  const resultDiv = document.querySelector(".result");
  const totalSumElement = document.querySelector(".total");

  let productsList = localStorage.getItem("productsList") || [];

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
    createHtmlProductElement(newProduct);
    // console.log(productsList);
  }

  function createHtmlProductElement(element) {
    // Создание элемента в таблицу
    let cellRow = document.createElement("tr");

    // Название
    let cellName = document.createElement("td");
    cellName = element.title;

    // Цена
    let cellPrice = (cellName.textContent = element.title);
    cellPrice = element.price;
    cellRow.append();
    productsTable.append(cellRow);

    renderProducts();
  }

  function renderProducts() {
    let thElements = productsTable.querySelectorAll("th");

    thElements.forEach((item) => {
      console.log(item.tagName);

      if (item.tagName !== "TH") {
        item.innerHTML == "";
      }
    });
  }
});
