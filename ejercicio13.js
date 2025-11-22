let personaJson = '{"nombre":"Lucas","edad":30,"ciudad":"Cuzco"}';
let mostrarBoton = document.getElementById("mostrarBoton");
let resultado = document.getElementById("resultado");

mostrarBoton.addEventListener ( "click", () => {
    let persona = JSON.parse(personaJson);
    resultado.textContent = "Nombre: " + persona.nombre;
})