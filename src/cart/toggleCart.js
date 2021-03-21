import { getElement } from "../utils.js";
const toggleCart = getElement(".toggle-cart");
const cartOverlay = getElement(".cart-overlay");
const closeBtn = getElement(".cart-close");

toggleCart.addEventListener("click", () => {
  cartOverlay.classList.add("show");
});

const checkoutBtn = getElement(".cart-checkout");

closeBtn.addEventListener("click", () => {
  cartOverlay.classList.remove("show");
});
checkoutBtn.addEventListener("click", () => {
  cartOverlay.classList.remove("show");
});

export const openCart = () => {
  oggleCart.addEventListener("click", () => {
    cartOverlay.classList.add("show");
  });
};
