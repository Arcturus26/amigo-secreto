// Array que almacenará los nombres
let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();
    if (nombre == '') {
        alert("Por favor, inserte un nombre.");
        return;
        
    }else{
        if (amigos.includes(nombre)) {
            alert(`El nombre ${nombre} ya está agregado`);
        }else{
            amigos.push(nombre);
            limpiarCaja()
            console.log(amigos);
        }
    }
}

function limpiarCaja() {
    document.getElementById("amigo").value = "";
}