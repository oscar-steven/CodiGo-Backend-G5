console.log("yo soy el front");
const btnProdutos = document.getElementById("btnProductos");
async function traerProductos() {
  const result = await fetch("http://localhost:3000/producto");
  const data = await result.json();
  console.log(data);
}

btnProdutos.addEventListener("click", (e) => {
  e.preventDefault();
  traerProductos();
});
