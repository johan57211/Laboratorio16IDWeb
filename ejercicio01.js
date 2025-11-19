const parrafo = document.getElementById("parrafo");
const boton = document.getElementById("boton");

boton.addEventListener("click", function() {
    parrafo.textContent = "Texto cambiado";
});
