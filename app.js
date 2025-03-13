// Array que almacenará los nombres
let amigos = [];
let ulListaAmigos = document.getElementById("listaAmigos");
let ulResultado = document.getElementById("resultado");

function agregarAmigo() {
    inputNombre = document.getElementById("amigo").value.trim();
    // Si el nombre está vacío
    if (inputNombre == '') {
        alert("Por favor, ingrese un nombre.");
        return;
    // Si el nombre ya está incluido   
    }else{
        if (amigos.includes(inputNombre)) {
            alert(`El nombre \"${inputNombre}\" ya está agregado`);
        // Si el nombre no está incluído, lo agrega
        }else{
            amigos.push(inputNombre);
            ulListaAmigos.innerHTML += `<li>${inputNombre}</li>`;
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
    // Solo sorteará si hay más 2 o más amigos
    if (amigos.length >= 2) {
        let amigoSorteado = amigos[Math.floor(Math.random()*amigos.length)];
        ulResultado.innerHTML = `El amigo secreto es: <li>${amigoSorteado}</li>`;
    }else{
        ulResultado.innerHTML = `<li style="color: red;">
        Necesitas al menos 2 amigos para sortear.</li>`;
    }
    return
}

// Usar Enter para añadir amigos
document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});