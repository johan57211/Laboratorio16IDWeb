let contador = 0;

const valor = document.getElementById("valor");
const mensaje = document.getElementById("mensaje");
const btnSumar = document.getElementById("btnSumar");
const btnRestar = document.getElementById("btnRestar");

btnSumar.addEventListener("click", () => {
    contador++;
    valor.textContent = contador;
    mensaje.textContent = "";
});

btnRestar.addEventListener("click", () => {
    if (contador > 0) {
        contador--;
        valor.textContent = contador;
        mensaje.textContent = "";
    } else {
        mensaje.textContent = "⚠ No se puede bajar de cero";
    }
});
