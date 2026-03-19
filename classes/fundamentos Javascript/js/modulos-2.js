import * as moduloTarea from "./modulos-1.js";

const input = document.getElementById("nueva-tarea");
const buttonAgregar = document.getElementById("agregar");
const buttonBorrar = document.getElementById("borrar");
const ul = document.getElementById("tareas");

function mostrarTareas() {
  ul.innerHTML = "";
  const tareas = moduloTarea.default();

  for (const tarea of tareas) {
    const li = document.createElement("li");
    li.textContent = tarea;
    ul.append(li);
  }
}

function handleAgregar(_event) {
  const nuevaTarea = input.value;
  if (nuevaTarea === "") return;

  moduloTarea.addTask(nuevaTarea);
  input.value = "";
  mostrarTareas();
}

function handleBorrar(_event) {
  ul.innerHTML = "";
  moduloTarea.deleteTask();
}

buttonAgregar.onclick = handleAgregar;
buttonBorrar.onclick = handleBorrar;

mostrarTareas();
