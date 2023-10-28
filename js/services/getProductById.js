import { getProducts } from "./getProducts.js";

/**
 *
 * @param {string} id Recibe un id
 * @returns Devolve el producto almacenado en el localStorage que coincida con el id recibido por parametro.
 */

export const getProductById = (id) => {
  const products = getProducts();
  const product = products.find((product) => product.id === id);
  return product;
};
