import { getLoggedUser } from "./getLoggedUser.js";

/**
 *
 * @returns Devuelve todos los elementos del carrito del usuario
 */

export const getCartProducts = () => {
  const user = getLoggedUser();
  if (user && user.cart && Array.isArray(user.cart)) {
    return user.cart;
  } else {
    return [];
  }
};
