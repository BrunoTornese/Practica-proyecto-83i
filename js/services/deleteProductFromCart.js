import { getLoggedUser } from "./getLoggedUser.js";
import { getCartProducts } from "./getCartProducts.js";
import { cartBadgeHandler } from "../utils/cartBadgeHandler.js";
import { setCartProducts } from "./setCartProducts.js";
import { getProductById } from "./getProductById.js";

export const deleteProductFromCart = (id) => {
  const user = getLoggedUser();
  const cartProducts = getCartProducts();
  console.log("Productos en el carrito:", cartProducts);
  if (user && cartProducts) {
    const userId = user.id;
    const product = getProductById(id);
    console.log("Producto a eliminar:", product);
    if (product) {
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
  }
  return cartProducts;
};
