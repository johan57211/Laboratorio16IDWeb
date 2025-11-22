const productos = [
    { nombre: "Celular", precio: 600},
    { nombre: "Tablet", precio: 1000},
    { nombre: "Monitor", precio: 300}
];

let mostrarBtn = document.getElementById("mostrarBtn");
let listaProductos = document.getElementById("listaProductos");

mostrarBtn.addEventListener("click", () => {
    let productosJSON = JSON.stringify(productos);
    let productosObj = JSON.parse(productosJSON);

    listaProductos.innerHTML ="";
    productosObj.forEach ( prod => {
        let li = document.createElement("li");
        li.textContent = prod.nombre;
        listaProductos.appendChild(li); 
    });
})