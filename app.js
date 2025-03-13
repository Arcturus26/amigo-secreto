// Array que almacenará los nombres
let amigos = [];

function agregarAmigo() {
    inputNombre = document.getElementById("amigo").value.trim();
    // Si el nombre está vacío
    if (inputNombre == '') {
        alert("Por favor, ingrese un nombre.");
        return;
    // Si el nombre ya está incluido   
    }else{
        if (amigos.includes(inputNombre)) {
            alert(`El nombre ${inputNombre} ya está agregado`);
        // Si el nombre no está incluído, lo agrega
        }else{
            amigos.push(inputNombre);
            listaAmigos.innerHTML += `<li>${inputNombre}</li>`;
            limpiarCaja();
            console.log(amigos);
        }
    }
}

function limpiarCaja() {
    document.getElementById("amigo").value = "";
    return
}

function sortearAmigo() {
    let amigoSorteado = amigos[Math.floor(Math.random()*amigos.length)]
    document.getElementById("resultado").innerHTML = `El amigo secreto es: <li>${amigoSorteado}</li>`;
    return
}

// Usar Enter para añadir amigos
document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});