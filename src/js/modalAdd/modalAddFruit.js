import { modalAddOpen } from "./modalOpen";
const addFruitFormRef = document.querySelector(".btns-box__open-add");
const modalWrap = document.querySelector(".add-fruit__modal")
const sumbitModalBtn = document.querySelector(".sumbitModalBtn")

// addFruitBtnRef.addEventListener("click", makeMarkUpAddModal)

addFruitFormRef.addEventListener("click", modalAddOpen)