let inputTexto = document.getElementById("ingTexto");
let agregarBtn = document.getElementById("agregarBoton");
let eliminarUltimo = document.getElementById("eliminarUltimo");
let lista = document.getElementById("lista");

agregarBtn.addEventListener("click", ()=> {
    let texto = inputTexto.value.trim();
    if (texto !== ""){
        let nuevaLi = document.createElement("li");
        nuevaLi.textContent = texto;
        lista.appendChild(nuevaLi);
        inputTexto.value = "";
    }
})

eliminarUltimo.addEventListener("click", () => {
    if(lista.lastChild){
        lista.removeChild(lista.lastChild);
    }
})
