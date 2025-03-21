// Array que almacenará los nombres
let amigos = [];
let ulListaAmigos = document.getElementById("listaAmigos");
let ulResultado = document.getElementById("resultado");

function agregarAmigo() {
    inputNombre = document.getElementById("amigo").value.trim();
    // Si el nombre está vacío
    if (inputNombre === '') {
        alert("Por favor, ingrese un nombre.");
        return;
    }
    // Si el nombre ya está incluido   
    if (amigos.includes(inputNombre)) {
        alert(`El nombre \"${inputNombre}\" ya está agregado`);
        return
    }
    // Agrega amigo
    amigos.push(inputNombre);
    ulListaAmigos.innerHTML += `<li>${inputNombre}</li>`;
    limpiarCaja();
    console.log(amigos);
}

function limpiarCaja() {
    document.getElementById("amigo").value = "";
    return
}

function sortearAmigo() {
    // No sorteará si hay menos de dos amigos
    if (amigos.length < 2) {
        ulResultado.innerHTML = `<li style="color: red;">
        Se necesitan al menos dos amigos para el sorteo.</li>`;
        return
    }
    let amigoSorteado = amigos[Math.floor(Math.random()*amigos.length)];
    ulResultado.innerHTML = `El amigo secreto es: <li>${amigoSorteado}</li>`;
    //amigos = amigos.filter(amigo => amigo !== amigoSorteado);
    amigos.splice(amigos.indexOf(amigoSorteado),1);
    let listaItems = ulListaAmigos.querySelectorAll('li');
    listaItems.forEach((item) => {
        if (item.textContent === amigoSorteado) {
            ulListaAmigos.removeChild(item);
        }
    });
    return
}

// Usar Enter para añadir amigos
document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});

function reiniciarJuego() {
    amigos = []; // Vacía el array de amigos
    ulListaAmigos.innerHTML = ""; // Limpia la lista de amigos en la interfaz
    ulResultado.innerHTML = ""; // Limpia el resultado del sorteo
}