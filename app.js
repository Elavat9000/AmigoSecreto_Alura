// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

//Crea una funcion que agrega a los amigos que quiera uno, tambien verifica que si tiene un valor nulo  lanza el mensaje, de advertencia
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.trim();

    if (esVacio(nombre)) {
        alert("El campo está vacío. Por favor, ingresa un nombre.");
        return;
    }

    if (!esNombreValido(nombre)) {
        alert("Por favor, ingresa un nombre válido (solo letras y espacios).");
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


//Esta funcion verifica si no se esta colocando numeros o valores inecesarios
function esNombreValido(nombre) {
    let regex = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]+$/; 
    return regex.test(nombre); 
}

//cada vez que se coloca un nuevo nombre se agrega a la lista
function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li'); 
        li.textContent = amigos[i]; 
        lista.appendChild(li); 
    }
}

//En esta funcion se sortea el nombre ganador
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Se necesitan al menos 2 amigos.");
        return;
    }

    let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById('resultado').textContent = `🎉El amigo secreto es:  ${amigoSecreto}🎁`;
}

//Funcion para verificar si la zona de texto esta vacia
function esVacio(texto) {
    return texto.trim() === ''; 
}