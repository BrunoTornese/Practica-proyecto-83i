import { getCartProducts } from "./getCartProducts.js";
import { cartBadgeHandler } from "../utils/cartBadgeHandler.js";
import { getProductById } from "./getProductById.js";
import { getLoggedUser } from "./getLoggedUser.js";
import { notLoggedRoute } from "../routes/notLogged.route.js";
import { setCartProducts } from "./setCartProducts.js";

/**
 *
 * @param {string} id Recibe el ID de un producto
 * @returns En el arreglo de productos del localStorage con la key correspondiente al id del usuario, agrega el producto, de ya existir dentro del carrito, aumentar su atributo "quantity" en 1
 */

export const addProductToCart = (id) => {
  const user = getLoggedUser(); // Obtén el usuario autenticado
  if (user) {
    const userId = user.id;
    // Si hay un usuario autenticado
    let cartProducts = getCartProducts();
    // Verifica si `cartProducts` es nulo o no es un arreglo válido
    if (cartProducts === null || !Array.isArray(cartProducts)) {
      cartProducts = []; // Inicializa cartProducts como un arreglo vacío si es nulo o no es un arreglo válido
    }
    const product = getProductById(id); // Obtén el producto por su ID
    if (cartProducts) {
      // Si hay productos en el carrito
      const productAlreadyInCart = cartProducts.find(
        (cartProduct) => cartProduct.id === product.id
      );
      if (productAlreadyInCart) {
        // Si el producto ya está en el carrito
        productAlreadyInCart.quantity++; // Aumenta el atributo "quantity" del producto
      } else {
        // Si el producto no está en el carrito
        cartProducts.push(product); // Agrega el producto al carrito
      }
    } else {
      // Si no hay productos en el carrito
      cartProducts.push(product); // Agrega el producto al carrito
    }
    localStorage.setItem(`${userId}`, JSON.stringify(cartProducts)); // Guarda el carrito de productos en el localStorage
    cartBadgeHandler(cartProducts.length); // Aumenta el badge del carrito
    setCartProducts(cartProducts); // Agrega el producto al carrito
    return cartProducts;
  } else {
    // Si no hay un usuario autenticado
    notLoggedRoute();
  }
};
