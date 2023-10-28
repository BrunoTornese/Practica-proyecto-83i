import { getCartProducts } from "./getCartProducts.js";
import { cartBadgeHandler } from "../utils/cartBadgeHandler.js";
import { getLoggedUser } from "./getLoggedUser.js";
import { setCartProducts } from "./setCartProducts.js";

/**
 *
 * @param {string} id Recibe el id de un producto
 * @return En el arreglo de productos del carrito reduce en 1 la cantidad del que coincida con el id recibido, si la cantidad es 1, lo elimina del arreglo.
 */

export const removeProductFromCart = (id) => {
  const user = getLoggedUser();
  const cartProducts = getCartProducts();
  console.log("Productos en el carrito:", cartProducts);
  if (user && cartProducts) {
    const userId = user.id;
    const updatedCartProducts = cartProducts.filter(
      (cartProduct) => cartProduct.id !== id
    );
    console.log(
      "Carrito después de eliminar el producto:",
      updatedCartProducts
    );
    localStorage.setItem(`${userId}`, JSON.stringify(updatedCartProducts));
    cartBadgeHandler(updatedCartProducts.length);
    setCartProducts(userId, updatedCartProducts);
    return updatedCartProducts;
  }
  return cartProducts;
};
