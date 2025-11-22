const persona = {
    nombre: "Johan",
    edad: 18,
    ciudad: "Arequipa"
};

const boton = document.getElementById("mostrarJson");

boton.addEventListener("click", () => {
    const personaJson = JSON.stringify(persona);
    console.log(personaJson);
});
