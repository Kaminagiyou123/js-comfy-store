// global imports
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";
// specific
import { addToCart } from "../cart/setupCart.js";
import { singleProductUrl, getElement, formatPrice } from "../utils.js";

// selections
const loading = getElement(".page-loading");
const centerDOM = getElement(".single-product-center");
const pageTitleDOM = getElement(".page-hero-title");
const imgDOM = getElement(".single-product-img");
const titleDOM = getElement(".single-product-title");
const companyDOM = getElement(".single-product-company");
const priceDOM = getElement(".single-product-price");
const colorsDOM = getElement(".single-product-colors");
const descDOM = getElement(".single-product-desc");
const cartBtn = getElement(".addToCartBtn");

// cart product
// let productID;

// show product when page loads
window.addEventListener("DOMContentLoaded", async () => {
  const urlID = window.location.search;
  try {
    const response = await fetch(`${singleProductUrl}${urlID}`);
    if (response.status >= 200 && response.status <= 299) {
      const {
        id,
        fields: { company, colors, description: desc, image, name, price },
      } = await response.json();
      document.title = `${name.toUpperCase()}| Comfy`;
      pageTitleDOM.textContent = `products/${name}`;
      titleDOM.textContent = `${name}`;
      companyDOM.textContent = `by ${company}`;
      priceDOM.textContent = `${formatPrice(price)}`;
      descDOM.textContent = desc;
      imgDOM.src = image[0].thumbnails.large.url;
      colors.forEach((color) => {
        const span = document.createElement("span");
        span.classList.add("product-color");
        span.style.backgroundColor = `${color}`;
        colorsDOM.appendChild(span);
        cartBtn.addEventListener("click", () => {
          addToCart(id);
        });
        return;
      });
    } else {
      centerDOM.innerHTML = `
         <div class='error'> sorry,something went wrong
         <a href='/index.html' class='btn>backhome </a>
         </div>`;
    }
  } catch (error) {
    console.log(error);
  }

  loading.style.display = "none";
});
