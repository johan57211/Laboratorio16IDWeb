const perfilForm = document.getElementById("perfilForm");
const nombreInput = document.getElementById("nombre");
const edadInput = document.getElementById("edad");
const paisInput = document.getElementById("pais");
const perfilMostrado = document.getElementById("perfilMostrado");

function mostrarPerfilEnPantalla() {
    const perfilJSON = localStorage.getItem("perfilUsuario");
    if (perfilJSON) {
        const perfil = JSON.parse(perfilJSON);
        perfilMostrado.textContent = `Nombre: ${perfil.nombre}, Edad: ${perfil.edad}, País: ${perfil.pais}`;
    } else {
        perfilMostrado.textContent = "No hay perfil guardado.";
    }
}

perfilForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const perfil = {
        nombre: nombreInput.value.trim(),
        edad: edadInput.value.trim(),
        pais: paisInput.value.trim()
    };
    localStorage.setItem("perfilUsuario", JSON.stringify(perfil));
    mostrarPerfilEnPantalla();
    perfilForm.reset();
});

mostrarPerfilEnPantalla();