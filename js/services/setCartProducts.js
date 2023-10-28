import { getLoggedUser } from "./getLoggedUser.js";
/**
 *
 * @param {string} id Recibe el id de un usuario
 * @param {array} products Recibe un arreglo de productos
 * @returns Los setea en localStorage con la key correspondiente al id del usuario
 */

export const setCartProducts = (products) => {
  const user = getLoggedUser();
  if (user) {
    const userId = user.id;
    const productsJSON = JSON.stringify(products);
    localStorage.setItem(userId, productsJSON);
  }
};
