const tareasJSON = '[{"titulo":"Estudiar JavaScript","completada":true},{"titulo":"Leer un libro","completada":false},{"titulo":"Ejercitar","completada":true}]';

const mostrarBtn = document.getElementById("mostrarBtn");
const listaTareas = document.getElementById("listaTareas");

mostrarBtn.addEventListener("click", function() {
    const tareas = JSON.parse(tareasJSON);

    listaTareas.innerHTML = "";
    tareas.forEach(tarea => {
        let li = document.createElement("li");
        li.textContent = tarea.titulo;
        if (tarea.completada) {
            li.style.color = "green";
        } else {
            li.style.color = "red";
        }
        listaTareas.appendChild(li);
    });
});
