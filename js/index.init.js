import Navbar from "./components/Navbar.js";
import ProductCard from "./components/ProductCard.js";
import ProductNotFoundMessage from "./components/ProductNotFoundMessage.js";
import { setProducts } from "./services/setProducts.js";
import { getProducts } from "./services/getProducts.js";
import { createAdminUser } from "./services/setAdminUser.js";
import { renderCartBody } from "./cart.init.js";
import { cartBadgeHandler } from "./utils/cartBadgeHandler.js";

let products;

document.addEventListener("DOMContentLoaded", () => {
  Navbar();
  createAdminUser();
  setProducts();
  products = getProducts();
  // renderCartBody()
  // cartBadgeHandler()
  renderProductCards(products);
});

const cardContainer = document.getElementById("cardContainer");

/**
 *
 * @param {array} products Arreglo de producto
 * @returns {} Renderiza las cards de los productos.
 */

const renderProductCards = (products) => {
  cardContainer.innerHTML = "";
  products.map((product) => {
    const visible = product.visible === true;
    if (visible) {
      cardContainer.innerHTML += ProductCard(product);
    }
  });
};

const searchInput = document.getElementById("searchInput");
const priceSelect = document.getElementById("priceSelect");
const categorySelect = document.getElementById("categorySelect");
const clearFilters = document.getElementById("clearFilters");
/**
 *
 * @param {string} value Valor del filtro de categoria
 * @param {array} productsArray Arreglo de productos a renderizar
 * @returns {array} Devuelve el arreglo de productos filtrados
 */

const filterByCategory = (value) => {
  if (value) {
    const filteredProductsByCategory = products.filter(
      (product) => product.category === value
    );
    return filteredProductsByCategory;
  }
  return productsArray;
};

/**
 *
 * @param {string} value Valor del filtro de precio.
 * @param {array} productsArray Arreglo de productos a renderizar
 * @returns {array} Devuelve el arreglo de productos filtrados
 */

const filterByPrice = (value, productsArray) => {};

/**
 *
 * @param {string} value valor del input de nombre
 * @returns Arreglo de productos a renderizar
 */

const searchByName = (value) => {
  let arrayProductByName = [];
  const stringValue = value.trim().toLowerCase(); // Convierte a minúsculas y elimina espacios en blanco al inicio y al final
  products.forEach((producto) => {
    const productName = producto.name.toLowerCase(); // Convierte el nombre del producto a minúsculas
    if (productName.includes(stringValue)) {
      arrayProductByName.push(producto);
    }
  });
  //console.log("Productos encontrados:", arrayProductByName, "value:", value);
  return arrayProductByName;
};

/**
 *
 * @param {string} searchInputValue Valor del input de nombre
 * @param {string} priceSelectValue Valor del select de precios
 * @param {string} categorySelectValue Valor del select de categoria
 * @returns Crea un arreglo de productos pasando por todos los filtros y llama a renderProductCards() para renderizarlas, en caso de no haber productos muestra ProductNotFoundMessage()
 */

const renderFilteredProducts = (
  searchInputValue,
  priceSelectValue,
  categorySelectValue
) => {
  console.log(`${searchInputValue} ${priceSelectValue} ${categorySelectValue}`);
  //let filteredProducts = searchByName(searchInputValue);
  let filteredProducts = filterByCategory(categorySelectValue); //filteredProducts);
  //filteredProducts = filterByPrice(priceSelectValue, filteredProducts);
  const renderFilteredProducts = (
    searchInputValue,
    priceSelectValue,
    categorySelectValue
  ) => {
    let filteredProducts = searchByName(searchInputValue);
    filteredProducts = filterByCategory(categorySelectValue, filteredProducts);
    // filteredProducts = filterByPrice(priceSelectValue, filteredProducts) ;
    renderProductCards(filteredProducts);
    // ProductNotFoundMessage()
  };

  searchInput.addEventListener("keyup", (e) => {
    renderFilteredProducts(
      e.target.value.toLowerCase(),
      priceSelect.value,
      categorySelect.value
    );
  });

  priceSelect.addEventListener("change", (e) => {
    renderFilteredProducts(
      searchInput.value,
      e.target.value,
      categorySelect.value
    );
  });

  categorySelect.addEventListener("change", (e) => {
    renderFilteredProducts(
      searchInput.value,
      priceSelect.value,
      e.target.value.toLowerCase()
    );
  });

  clearFilters.addEventListener("click", (e) => {
    e.preventDefault();
    searchInput.value = "";
    priceSelect.value = "";
    categorySelect.value = "";
    renderProductCards(products);
  });
};
