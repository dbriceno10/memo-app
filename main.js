const tareas = JSON.parse(localStorage.getItem("tareas")) || [];

const actualizarTareas = (tareas) => {
  const tareasString = JSON.stringify(tareas);
  localStorage.setItem("tareas", tareasString);
};

const removeNote = (elemento, i, tareas) => {
  elemento.parentNode.removeChild(elemento);
  tareas.splice(i, 1);
  actualizarTareas(tareas);
  render();
};

const showAlert = (elemento, i, tareas) => {
  swal({
    title: "Información",
    text: "¿Desea eliminar la nota?",
    icon: "info",
    buttons: ["Cancelar", "Aceptar"],
  }).then((result) => {
    if (result) {
      removeNote(elemento, i, tareas);
    }
  });
};

const render = () => {
  const lista_Tareas = document.getElementById("lista-tareas");
  const tareas_Template = tareas.map(
    (element) =>
      `<div class="card text-center mb-4 shadow">
            <div class="card-body">
            <li class="salida">${element}</li>
            </div>
        </div>`
  );
  lista_Tareas.innerHTML = tareas_Template.join(""); //join toma todos los elementos de un arreglo y los junta según lo que le pasemos
  const elementos = document.querySelectorAll("#lista-tareas li");
  elementos.forEach((elemento, i) => {
    elemento.addEventListener("click", () => {
      showAlert(elemento, i, tareas);
    });
  });
};
render();
const form = document.getElementById("form-tareas");
form.onsubmit = (ev) => {
  ev.preventDefault();
  const tarea = document.getElementById("tarea").value;
  document.getElementById("form-tareas").reset();
  // console.log(tarea);
  tareas.push(tarea);
  actualizarTareas(tareas);
  render(); //actualiza la lista
};
