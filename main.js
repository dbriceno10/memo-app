// function clearForm() {
//     document.getElementById("form-tareas").reset()
//     //el método ".reset()"
// }
// const capturar = () => {
//     const dato = document.getElementById("tarea").value;
//     console.log("dato " + dato)
//     return dato
// }
const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
const render = () => {
    const lista_Tareas = document.getElementById("lista-tareas");
    //es necesario que map lleve un return o nos va a devolver indefinido, map nos permite hacer iteraciones, map transforma el elemento en lo que sea que nosotros estemos retornando
    // const tareas_Template = tareas.map(element => "<li>" + element + "</li>");
    //const tareas_Template = tareas.map(element => `<li>${element}</li>`);
    const tareas_Template = tareas.map(element => 
        `<div class="card text-center mb-4">
            <div class="card-body">
            <li class="salida">${element}</li>
            </div>
        </div>`
    );
    console.log(tareas_Template);
    lista_Tareas.innerHTML = tareas_Template.join("");//join toma todos los elementos de un arreglo y los junta según lo que le pasemos
    const elementos = document.querySelectorAll("#lista-tareas li");
    elementos.forEach((elemento, i) => {
        elemento.addEventListener("click",() => {
            elemento.parentNode.removeChild(elemento)
            // console.log(elemento.parentNode, i);
            tareas.splice(i,1);
            actualizarTareas(tareas);
            render();//la función se llama dentro de si misma, actualiza la lista para borrar los datos que se han eliminando
        })
        
    })
}
const actualizarTareas = (tareas) => {
    const tareasString = JSON.stringify(tareas);
    localStorage.setItem("tareas", tareasString);
}
render();
const form = document.getElementById("form-tareas");
form.onsubmit = (ev) => {
    ev.preventDefault();
    const tarea = document.getElementById("tarea").value;
    document.getElementById("form-tareas").reset();
    // console.log(tarea);
    tareas.push(tarea);
    actualizarTareas(tareas);
    render();//actualiza la lista
}