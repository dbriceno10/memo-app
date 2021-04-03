window.onload = () => {//esto espera hasta que todo el DOM cargue y luego ejecuta el código
    const parrafo = document.getElementById("text");
    console.log(parrafo.innerHTML);
    console.log(parrafo.innerText);
    parrafo.innerText = "Texto Actualizado"
}