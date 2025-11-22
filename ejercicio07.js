let imgGrande = document.getElementById("img-grande");
let miniaturas = document.querySelectorAll(".miniatura");

miniaturas.forEach((img) => {
    img.addEventListener("click", function() {
        imgGrande.src = img.src;
        imgGrande.alt = img.alt;
    });
});
