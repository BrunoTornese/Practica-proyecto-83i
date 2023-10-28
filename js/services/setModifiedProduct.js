/**
 *
 * @param {array} products Recibe un arreglo de productos
 * @returns Los setea en localStorage con la key "products"
 */

export const setModifiedProducts = (products) => {
  const productsJSON = JSON.stringify(products);
  localStorage.setItem("products", productsJSON);
  return products;
};
