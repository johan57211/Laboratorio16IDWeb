let nombreInput = document.getElementById("nombre");
let edadInput = document.getElementById("edad");
let guardarBtn = document.getElementById("guardarBtn");
let mostrarBtn = document.getElementById("mostrarBtn");
let resultado = document.getElementById("resultado");

guardarBtn.addEventListener("click", () => {
    let usuario = {
        nombre: nombreInput.value.trim(),
        edad: edadInput.value.trim()
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));
    resultado.textContent = "Usuario guardado correctamente";
})

mostrarBtn.addEventListener("click", () => {
    let usuarioJson = localStorage.getItem("usuario");
    if(usuarioJson){
        let usuario = JSON.parse(usuarioJson);
        resultado.textContent = "Nombre: " + usuario.nombre + ", Edad: " + usuario.edad;
    }
    else {
        resultado.textContent = "No hay usuarios guardados";
    }
})