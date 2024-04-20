import { createProductsMarkUp } from "../createProduct";
const fruitsListRef = document.querySelector(".fruits__list");
const url = "http://localhost:3000/fruits";

export const fetchFruits = async () => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    createProductsMarkUp(data, fruitsListRef);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

export const addFruit = async (newFruit) => {
  try {
    //? then()

    // fetch(url, {
    //   method: "POST",
    //   body: JSON.stringify(newFruit),
    // headers: {
    //   "Content-Type": "application/json; charset=UTF-8",
    // },
    // })
    // .then((res) => res.json())
    // .catch((err) => console.log(err));

    //? async/await

    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(newFruit),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
    const data = await resp.json();
    console.log("data", data);
  } catch (err) {
    console.log(err);
  }
};

//? then()

// fetch(url)
//   .then((res) => {
//     if (!res.ok) {
//       console.log("!res.ok");
//       return;
//     }
//     return res.json();
//   })
//   .then((data) => {
// createProductsMarkUp(data, fruitsListRef);
// console.log(data);
//   })
//   .catch((err) => console.log(err));

//? async/await

// const resp = await fetch(url);

// const options = {
//   method: "POST",
//   body: JSON.stringify(newFruit),
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
// };
