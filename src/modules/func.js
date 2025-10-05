export const createProduct = (title, price, amount) => {
  return {
    id: Date.now(),
    title,
    price,
    amount,
    sum: Number(amount) * Number(price),
  };
};

export const deleteProduct = (products, id) => {
  return products.filter((item) => item.id !== id);
};

export const totalSumProducts = (products) => {
  let sum = 0;

  products.map((product) => (sum += Number(product.sum)));

  return sum;
};
