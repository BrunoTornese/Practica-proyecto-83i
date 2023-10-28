import { getCartProducts } from "../services/getCartProducts.js";
/**
 * @returns {number} Renderiza la cantidad de productos en el carrito.
 */

export const cartBadgeHandler = () => {
  const cartProducts = getCartProducts(); // Obtén el carrito de productos del usuario
  const cartBadge = document.getElementById("cart-badge");
  if (cartBadge) {
    cartBadge.textContent = cartProducts.length; // Actualiza el contenido del badge con la cantidad de productos en el carrito
  }
};
