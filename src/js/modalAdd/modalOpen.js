import {makeMarkUpAddModal} from "./createModalAdd"
const modalBackdrop = document.querySelector(".modal-add")

export const modalAddOpen = (evt) => {
    const backdrop = document.querySelector(".backdrop")
    backdrop.classList.remove("is-hidden")
    modalBackdrop.innerHTML = makeMarkUpAddModal()

}