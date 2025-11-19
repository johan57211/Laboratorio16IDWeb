let parrafo = document.getElementById("parrafo1");
let boton = document.getElementById("boton")

let alternar = true;

boton.addEventListener("click", () => {
    if(alternar){
        parrafo.textContent = "Texto Cambiado";
        alternar = false;
    }

    else {
        parrafo.textContent = "Texto Original";
        alternar = true;
    }
})