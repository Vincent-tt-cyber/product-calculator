export const createProduct = (title, price, amount) => {
  return {
    id: Date.now(),
    title,
    price,
    amount,
  };
};
