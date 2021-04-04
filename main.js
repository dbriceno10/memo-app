// window.onload = () => {//esto espera hasta que todo el DOM cargue y luego ejecuta el código
//     const parrafo = document.getElementById("text");
//     console.log(parrafo.innerHTML);
//     console.log(parrafo.innerText);
//     // parrafo.innerText = "Texto Actualizado"
//     parrafo.innerHTML = "<li>elemento1</li><li>elemento2</li>"
// }
// function clearForm() {
//     document.getElementById("form-tareas").reset()
//     //el método ".reset()" que estamos llamando se va a encargar de resetear el formulario
// }


// const capturar = () => {
//     const dato = document.getElementById("tarea").value;
//     console.log("dato " + dato)
//     return dato
// }
const tareas = [];
const form = document.getElementById("form-tareas");
form.onsubmit = (ev) => {
    ev.preventDefault();
    const tarea = document.getElementById("tarea").value;
    //limpia lo que hay en el campo de la tarea
    // todo.value = '';
    document.getElementById("form-tareas").reset();
    console.log(tarea);
    tareas.push(tarea);
    const lista_Tareas = document.getElementById("lista-tareas");
    const tareas_Template = tareas.map(element => {//es necesario que map lleve un return o nos va a devolver indefinido, map nos permite hacer iteraciones, map transforma el elemento en lo que sea que nosotros estemos retornando
        return "<li>" + element + "</li>"
    })
    console.log(tareas_Template);
//     lista_Tareas.innerHTML = "";//va limpiando lo que esté dentro de lista_Tareas
//     for (let i = 0; i< tareas.length; i++) {
//         lista_Tareas.innerHTML+= "<li>" + tareas[i] + "</li>"
//     }
}