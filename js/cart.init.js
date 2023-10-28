import { ProductCardCart } from "./components/CartCard.js";
import { getCartProducts } from "./services/getCartProducts.js";
import { discountPrice } from "./utils/discountPrice.js";
import { formatCurrency } from "./utils/formatCurrency.js";

/**\
 * @returns Renderiza los productos y el precio total en el offcanvas del carrito
 */
export const renderCartBody = () => {
  renderCartProducts();
  renderCartTotalPrice();
};

const totalPriceElement = document.getElementById("totalPrice");

/**
 * @returns Renderiza la suma del precio de todos los productos en el carrito
 */

const renderCartTotalPrice = () => {
  const cartProducts = getCartProducts();
  let totalPrice = 0;
  if (cartProducts.length === 0) {
    totalPrice = 0;
  } else {
    cartProducts.forEach((product) => {
      // Verifica si el producto tiene un descuento
      if (typeof product.discountPercentage === "number") {
        // Aplica el descuento al precio del producto
        const discountedPrice = discountPrice(
          product.price,
          product.discountPercentage
        );
        // Agrega el precio descontado al precio total
        totalPrice += discountedPrice * product.quantity;
      } else {
        // Si el producto no tiene descuento, agrega el precio original al precio total
        totalPrice += product.price * product.quantity;
      }
    });
  }
  // Muestra el precio total en el elemento con el ID "totalPrice" en la interfaz.
  totalPriceElement.textContent = formatCurrency(totalPrice); // Formatea y muestra el precio total en la interfaz
};

/**
 * @returns {} Renderiza los productos en el carrito
 */

const renderCartProducts = () => {
  const offcanvasBody = document.querySelector(".offcanvas-body");
  const cartProducts = getCartProducts() || [];
  offcanvasBody.innerHTML = "";
  if (cartProducts.length == 0) {
    offcanvasBody.innerHTML = "No tienes productos en el carrito";
  } else {
    let productCardsHTML = "";
    cartProducts.forEach((product) => {
      const productCard = ProductCardCart(product);
      productCardsHTML += productCard;
    });
    offcanvasBody.innerHTML = productCardsHTML;
  }
};
