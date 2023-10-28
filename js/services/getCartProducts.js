import { getLoggedUser } from "./getLoggedUser.js";

/**
 *
 * @returns Devuelve todos los elementos del carrito del usuario
 */

export const getCartProducts = () => {
  const user = getLoggedUser(); // Obtén el usuario autenticado
  if (user) {
    const userId = user.id;
    // Intenta obtener el carrito de productos del usuario desde el localStorage
    const cartProductsJSON = localStorage.getItem(userId);
    if (cartProductsJSON) {
      // Si se encontraron productos en el carrito, conviértelos de JSON a un arreglo
      const cartProducts = JSON.parse(cartProductsJSON);
      // Comprueba si cartProducts es realmente un array
      if (Array.isArray(cartProducts)) {
        return cartProducts;
      }
    }
  }
  // Si no se encontraron productos en el carrito, o si el usuario no está autenticado, o si los datos obtenidos del localStorage no son un array, devuelve un arreglo vacío
  return [];
};
