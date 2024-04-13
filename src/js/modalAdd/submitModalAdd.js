import { addFruit } from "../helpersAPI/fetchFruitsAPI";
export const  modalAddSent = (evt) => {
    evt.preventDefault();
    console.log(evt.currentTarget.elements.name.value)
    const newFruit = {
      name: nameInput.value,
      price: nameEmogi.value,
      emoji: namePrice.value,
      quantity: nameQuantity.value,
    };
    console.log(newFruit)
    addFruit(newFruit);
    
    evt.currentTarget.reset();
    return newFruit;
}