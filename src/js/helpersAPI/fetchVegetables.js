import { createProductsMarkUp } from "../createProduct";
const vegetablesListRef = document.querySelector(".vegetables__list");

export const fetchVegetables = () =>
  fetch("http://localhost:3000/vegetables")
    .then((res) => {
      if (!res.ok) {
        console.log("!res.ok");
      }
      return res.json();
    })
    .then((data) => {
      createProductsMarkUp(data, vegetablesListRef);
    })
    .catch((err) => console.log(err));
