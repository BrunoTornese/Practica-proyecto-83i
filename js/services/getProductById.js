import { getProducts } from "./getProducts.js";

/**
 *
 * @param {string} id Recibe un id
 * @returns Devolve el producto almacenado en el localStorage que coincida con el id recibido por parametro.
 */

export const getProductById = (id) => {
  const products = getProducts();
  for (const product of products) {
    if (product.id === id) {
      return product;
    }
  }
  return null;
};
