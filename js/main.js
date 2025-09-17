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

    inputName.value = "";
    inputPrice.value = "";
    inputAmount.value = "";
  }

  function createHtmlProductElement(element) {
    // Создание элемента в таблицу
    let cellRow = document.createElement("tr");

    // Название
    let cellName = document.createElement("td");
    cellName.textContent = element.title;

    // Цена
    let cellPrice = document.createElement("td");
    cellPrice.textContent = element.price;

    // Количество
    let cellAmount = document.createElement("td");
    cellAmount.textContent = element.amount;

    // Сумма
    let cellSum = document.createElement("td");
    cellSum.textContent = Number(element.price) * Number(element.amount);

    // Удаление
    let cellDelete = document.createElement("td");
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";
    cellDelete.appendChild(deleteButton);
    
    cellRow.appendChild(cellName);
    cellRow.appendChild(cellPrice);
    cellRow.appendChild(cellAmount);
    cellRow.appendChild(cellSum);
    cellRow.appendChild(cellDelete);
    
    productsTable.appendChild(cellRow);

    renderProducts();
  }

  function renderProducts() {
    let thElements = productsTable.querySelectorAll("th");

    // Не удалять заголовки
    // thElements.forEach((item) => {
    //   if (item.tagName !== "TH") {
    //     item.remove();
    //   }
    // });
  }
});
