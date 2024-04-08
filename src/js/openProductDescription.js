import { createModalInfo } from "./createModalInfo";
import data from "../products.json";

const fruitsListRef = document.querySelector(".fruits__list");
const backdropRef = document.querySelector(".backdrop");
// const closeModalBtnRef = document.querySelector(".close-modal__btn");

fruitsListRef.addEventListener("click", (evt) => {
  if (evt.target.nodeName === "LI") {
    const fruitIndex = Array.from(fruitsListRef.children).indexOf(evt.target);
    backdropRef.innerHTML = createModalInfo(data.fruits[fruitIndex]);
    backdropRef.classList.toggle("is-hidden");
  }
});
