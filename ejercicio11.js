const form = document.getElementById("formUsuario");
const tablaDiv = document.getElementById("tablaDiv");
let usuarios = [];
let editando = null;

function renderTabla() {
    let tabla = document.createElement("table");

    let thead = document.createElement("thead");
    let trHead = document.createElement("tr");
    trHead.innerHTML = "<th>Nombre</th><th>Edad</th><th>Acciones</th>";
    thead.appendChild(trHead);
    tabla.appendChild(thead);

    let tbody = document.createElement("tbody");
    usuarios.forEach((user, i) => {
        let fila = document.createElement("tr");
        fila.dataset.indice = i;

        let tdNombre = document.createElement("td");
        tdNombre.textContent = user.nombre;
        let tdEdad = document.createElement("td");
        tdEdad.textContent = user.edad;
        let tdAcciones = document.createElement("td");

        let btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar";
        btnEditar.classList.add("editar");
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.classList.add("eliminar");

        tdAcciones.appendChild(btnEditar);
        tdAcciones.appendChild(btnEliminar);

        fila.appendChild(tdNombre);
        fila.appendChild(tdEdad);
        fila.appendChild(tdAcciones);
        tbody.appendChild(fila);
    });

    tabla.appendChild(tbody);
    tablaDiv.innerHTML = "";
    tablaDiv.appendChild(tabla);
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const nombre = form.querySelector("#nombre").value.trim();
    const edad = form.querySelector("#edad").value.trim();

    if (!nombre || !edad) return;

    if (editando !== null) {
        usuarios[editando] = { nombre, edad };
        editando = null;
    } else {
        usuarios.push({ nombre, edad });
    }

    form.reset();
    renderTabla();
});

tablaDiv.addEventListener("click", function(event) {
    if (event.target.classList.contains("eliminar")) {
        const fila = event.target.closest("tr");
        usuarios.splice(fila.dataset.indice, 1);
        renderTabla();
    }
    if (event.target.classList.contains("editar")) {
        const fila = event.target.closest("tr");
        const usuario = usuarios[fila.dataset.indice];
        form.querySelector("#nombre").value = usuario.nombre;
        form.querySelector("#edad").value = usuario.edad;
        editando = fila.dataset.indice;
    }
});

renderTabla();
