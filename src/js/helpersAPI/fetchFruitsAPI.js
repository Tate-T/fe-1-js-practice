import { createProductsMarkUp } from "../createProduct";
const fruitsListRef = document.querySelector(".fruits__list");
const url = "http://localhost:3000/fruits";

export const fetchFruits = () =>
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        console.log("!res.ok");
        return 
      }
      return res.json();
    })
    .then((data) => {
      createProductsMarkUp(data, fruitsListRef);
      console.log(data)
    })
    .catch((err) => console.log(err));

// const options = {
//   method: "POST",
//   body: JSON.stringify(newFruit),
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
// };

export const addFruit = (newFruit) =>
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newFruit),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

