const lista = document.getElementById("lista");

lista.addEventListener("click", (event) => {
    // event.target es el elemento exacto donde se hizo clic
    if (event.target.tagName === "LI") {
        lista.removeChild(event.target);
    }
});
