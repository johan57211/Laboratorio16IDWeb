let formulario = document.getElementById("formulario");
let nombreInput = document.getElementById("nombre");
let correoInput = document.getElementById("correo");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    let spans = formulario.querySelectorAll("span.mensaje-error");
    spans.forEach(span => span.remove());

    let hayError = false;

    if(nombreInput.value.trim() === ""){
        let span = document.createElement("span");
        span.textContent = "El nombre es Obligatorio";
        span.className = "mensaje-error";
        span.style.color = "red";
        nombreInput.parentNode.appendChild(span);
        hayError = true;
    }

    if (correoInput.value.trim() === "") {
        let span = document.createElement("span");
        span.textContent = "El correo es obligatorio";
        span.className = "mensaje-error";
        span.style.color = "red";
        correoInput.parentNode.appendChild(span);
        hayError = true;
    }

    if (!hayError) {
        alert("Formulario válido. ¡Enviado!");
    }
})