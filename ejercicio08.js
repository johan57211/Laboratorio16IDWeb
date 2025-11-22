// Arreglo de productos de ejemplo
const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 40 }
];

const boton = document.getElementById("generarTabla");
const tablaDiv = document.getElementById("tablaDiv");

boton.addEventListener("click", function() {
    // Crear la tabla
    let tabla = document.createElement("table");
    tabla.border = "1";

    // Encabezado
    let thead = document.createElement("thead");
    let filaCabecera = document.createElement("tr");
    let thNombre = document.createElement("th");
    thNombre.textContent = "Nombre";
    let thPrecio = document.createElement("th");
    thPrecio.textContent = "Precio";
    filaCabecera.appendChild(thNombre);
    filaCabecera.appendChild(thPrecio);
    thead.appendChild(filaCabecera);
    tabla.appendChild(thead);

    // Cuerpo
    let tbody = document.createElement("tbody");
    productos.forEach(function(prod) {
        let fila = document.createElement("tr");
        let celdaNombre = document.createElement("td");
        celdaNombre.textContent = prod.nombre;
        let celdaPrecio = document.createElement("td");
        celdaPrecio.textContent = prod.precio;
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaPrecio);
        tbody.appendChild(fila);
    });
    tabla.appendChild(tbody);

    // Borra tabla anterior antes de generar una nueva
    tablaDiv.innerHTML = "";
    tablaDiv.appendChild(tabla);
});
