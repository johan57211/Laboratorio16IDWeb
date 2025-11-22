const nombreInput = document.getElementById("nombre");
const guardarBtn = document.getElementById("guardarBtn");

guardarBtn.addEventListener("click", function() {
    const usuario = {
        nombre: nombreInput.value.trim()
    };

    const usuarioJSON = JSON.stringify(usuario);

    console.log(usuarioJSON);
});
