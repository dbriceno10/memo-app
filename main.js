// function clearForm() {
//     document.getElementById("form-tareas").reset()
//     //el método ".reset()"
// }
// const capturar = () => {
//     const dato = document.getElementById("tarea").value;
//     console.log("dato " + dato)
//     return dato
// }

const render = () => {
    const lista_Tareas = document.getElementById("lista-tareas");
    //es necesario que map lleve un return o nos va a devolver indefinido, map nos permite hacer iteraciones, map transforma el elemento en lo que sea que nosotros estemos retornando
    const tareas_Template = tareas.map(element => "<li>" + element + "</li>");
    lista_Tareas.innerHTML = tareas_Template.join("");//join toma todos los elementos de un arreglo y los junta según lo que le pasemos
    const elementos = document.querySelectorAll("#lista-tareas li");
    elementos.forEach((elemento, i) => {
        elemento.addEventListener("click",() => {
            elemento.parentNode.removeChild(elemento)
            console.log(elemento.parentNode, i);
            tareas.splice(i,1);
            render();//la función se llama dentro de si misma
        })
        
    })
}

const tareas = [];
const form = document.getElementById("form-tareas");
form.onsubmit = (ev) => {
    ev.preventDefault();
    const tarea = document.getElementById("tarea").value;
    document.getElementById("form-tareas").reset();
    console.log(tarea);
    tareas.push(tarea);
    render();
}