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

const totalPrice = document.getElementById("totalPrice");

/**
 * @returns {} Renderiza la suma del precio de todos los productos en el carrito
 */

const renderCartTotalPrice = () => {
  const cartProducts = getCartProducts();
  let totalPrice = 0;
  for (let product of cartProducts) {
    const discountedPrice = discountPrice(
      product.price,
      product.discountPercentage
    );
    totalPrice += discountedPrice;
  }
  const totalPriceElement = document.getElementById("totalPrice");
  totalPriceElement.textContent = formatCurrency(totalPrice);
};
/**
 * @returns {} Renderiza los productos en el carrito
 */

const renderCartProducts = () => {
  const offcanvasBody = document.querySelector(".offcanvas-body");
  const cartProducts = getCartProducts();
  offcanvasBody.innerHTML = "";

  if (cartProducts.length === 0) {
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
