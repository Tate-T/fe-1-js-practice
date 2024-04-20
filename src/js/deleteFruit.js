const deleteBtn = document.getElementById("deleteBtn");
deleteBtn.addEventListener("click" ,() => {
    const deleteId = document.getElementById("deleteId");
    console.log(deleteId.value);
    fetch(`http://localhost:3000/fruits/${deleteId.value}`,{ method: "DELETE"} );
});