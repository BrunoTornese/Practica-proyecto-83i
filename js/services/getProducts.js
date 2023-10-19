/**
 *
 * @returns Devuelve todos los productos almacenados en localStorage
 */

export const getProducts = () => {
  const productsJson = localStorage.getItem("products");
  if (!productsJson) {
    console.log("No hay productos en el almacenamiento local.");
    return [];
  }
  const products = JSON.parse(productsJson);
  return products;
};
