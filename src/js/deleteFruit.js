const deleteBtn = document.getElementById("deleteBtn");
deleteBtn.addEventListener("click", async () => {
  const deleteId = document.getElementById("deleteId");
  console.log(deleteId.value);
  //? then()
  // fetch(`http://localhost:3000/fruits/${deleteId.value}`,{ method: "DELETE"} );
  //? async/await
  await fetch(`http://localhost:3000/fruits/${deleteId.value}`, {
    method: "DELETE",
  });
});
