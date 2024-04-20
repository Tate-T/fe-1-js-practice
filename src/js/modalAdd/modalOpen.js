import { makeMarkUpAddModal } from "./createModalAdd";
import { addFruit } from "../fetchFruitsAPI";
const modalBackdrop = document.querySelector(".modal-add")

export const modalAddOpen = (evt) => {
    const backdrop = document.querySelector(".backdrop")
    backdrop.classList.remove("is-hidden");
    modalBackdrop.innerHTML = makeMarkUpAddModal()
    let length = 1;
    globalThis.addFruitFormRef = document.querySelector(".add-fruit__form");
    fetch("http://localhost:3000/fruits").then(res => res.json()).then(res => {
        length = res.length;
    });
    globalThis.addFruitFormRef.addEventListener("submit", (evt) => {
      evt.preventDefault();
        const newFruit = {
        id: String(length+1),
        name: evt.currentTarget.elements.name.value,
        price: evt.currentTarget.elements.price.value,
        emoji: evt.currentTarget.elements.emoji.value,
        quantity: evt.currentTarget.elements.quantity.value,
      };
      console.log(newFruit);
      addFruit(newFruit);
      evt.currentTarget.reset();
    });
}