const cuadro = document.getElementById("cuadro");
const animarBtn = document.getElementById("animarBtn");
const reiniciarBtn = document.getElementById("reiniciarBtn");

animarBtn.addEventListener("click", function() {
    cuadro.classList.add("animar");
});

reiniciarBtn.addEventListener("click", function() {
    cuadro.classList.remove("animar");
});
