export const makeMarkUpAddModal = () => {
  const formElement = `<form class="add-fruit__form">
    <input
      type="text"
      placeholder="name"
      class="add-fruit__input fruit-name"
      name="name"
    />
    <input
      type="text"
      placeholder="emoji"
      class="add-fruit__input fruit-emogi"
      name="emoji"
    />
    <input
      type="text"
      placeholder="price"
      class="add-fruit__input fruit-price"
      name="price"
    />
    <input
      type="text"
      placeholder="quantity"
      class="add-fruit__input fruit-quantity"
      name="quantity"
    />
    <button type="submit" class="sumbitModalBtn">Add</button>
  </form>`;
  return formElement;
};
