const librosJSON = '[{"titulo":"Cien años de soledad","autor":"Gabriel García Márquez"},{"titulo":"Rayuela","autor":"Julio Cortázar"},{"titulo":"La ciudad y los perros","autor":"Mario Vargas Llosa"}]';

const mostrarBtn = document.getElementById("mostrarBtn");
const tablaLibros = document.getElementById("tablaLibros");

mostrarBtn.addEventListener("click", function() {
    const libros = JSON.parse(librosJSON);

    let tabla = document.createElement("table");
    tabla.border = "1";
    let thead = document.createElement("thead");
    let trHead = document.createElement("tr");
    trHead.innerHTML = "<th>Título</th><th>Autor</th>";
    thead.appendChild(trHead);
    tabla.appendChild(thead);

    let tbody = document.createElement("tbody");
    libros.forEach(libro => {
        let fila = document.createElement("tr");
        let tdTitulo = document.createElement("td");
        let tdAutor = document.createElement("td");
        tdTitulo.textContent = libro.titulo;
        tdAutor.textContent = libro.autor;
        fila.appendChild(tdTitulo);
        fila.appendChild(tdAutor);
        tbody.appendChild(fila);
    });
    tabla.appendChild(tbody);

    tablaLibros.innerHTML = "";
    tablaLibros.appendChild(tabla);
});
