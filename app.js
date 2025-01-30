// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.trim();

    if (!esNombreValido(nombre)) {
        alert("Por favor, ingresa un nombre válido (solo letras y sin dejar el campo vacío).");
        return;
    }

    if (!amigos.includes(nombre)) {
        amigos.push(nombre);
        document.getElementById('amigo').value = ''; 
        actualizarLista();
    } else {
        alert("Ese nombre ya está en la lista.");
    }
}

function esNombreValido(nombre) {
    let regex = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]+$/; 
    return regex.test(nombre); 
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li'); 
        li.textContent = amigos[i]; 
        lista.appendChild(li); 
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Se necesitan al menos 2 amigos.");
        return;
    }

    let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById('resultado').textContent = `🎉El amigo secreto es:  ${amigoSecreto}🎁`;
}
