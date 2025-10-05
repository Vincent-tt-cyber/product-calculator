export const createProduct = (title, price, amount) => {
  return {
    id: Date.now(),
    title,
    price,
    amount,
  };
};
export const deleteProduct = (products, id) => {
  return products.filter((item) => item.id !== id);
};
