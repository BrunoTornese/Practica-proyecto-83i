import { ProductCardCart } from "./components/CartCard.js";
import { getCartProducts } from "./services/getCartProducts.js";
import { discountPrice } from "./utils/discountPrice.js";
import { formatCurrency } from "./utils/formatCurrency.js";

/**\
 * @returns Renderiza los productos y el precio total en el offcanvas del carrito
 */
export const renderCartBody = () => {
  class renderCartProducts {}
  renderCartProducts();
  renderCartTotalPrice();
};

const totalPrice = document.getElementById("totalPrice");

/**
 * @returns {} Renderiza la suma del precio de todos los productos en el carrito
 */

const renderCartTotalPrice = () => {
  const cartProducts = getCartProducts();
  if (cartProducts.length === 0) {
    offcanvasBody.innerHTML = "No tenes nada en el carrito";
    return;
  }
  let total = 0;
  for (let product of cartProducts) {
    total += product.price;
  }
  return total;
  //  totalPrice.textContent = formatCurrency(...)
};

/**
 * @returns {} Renderiza los productos en el carrito
 */

const renderCartProducts = () => {
  const offcanvasBody = document.querySelector(".offcanvas-body");
  const cartProducts = getCartProducts();
  offcanvasBody.innerHTML = "";
};
