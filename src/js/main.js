document.addEventListener("DOMContentLoaded", () => {
  const inputName = document.querySelector(".input-name");
  const inputPrice = document.querySelector(".input-price");
  const inputAmount = document.querySelector(".input-amount");
  const addProductButton = document.querySelector(".addProductBtn");
  const productsTable = document.querySelector(".products-table");
  const resultDiv = document.querySelector(".result");
  const totalSumElement = document.querySelector(".total");

  let productsList = localStorage.getItem("productsList") || [];

  addProductButton.addEventListener("click", addProduct)

  function addProduct() { 
    if(inputName.value === "" || inputPrice.value === "" || inputAmount.value === "") {
      alert("Заполните все поля");
      return;
    }
  }
});
