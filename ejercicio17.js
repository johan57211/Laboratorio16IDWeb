const productoJSON = '{"nombre": "Monitor", "precio": 300}';

const modificarBtn = document.getElementById("modificarBtn");
const resultado = document.getElementById("resultado");

modificarBtn.addEventListener("click", function() {
    let producto = JSON.parse(productoJSON);

    producto.precio = 350;
    const productoActualizadoJSON = JSON.stringify(producto);

    resultado.textContent = productoActualizadoJSON;
});
