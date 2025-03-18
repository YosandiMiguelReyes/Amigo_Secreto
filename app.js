const listaAmigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    listaAmigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    listaAmigos.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        li.style.padding = "10px";
        li.style.margin = "5px 0";
        li.style.backgroundColor = "#f0f0f0";
        li.style.borderRadius = "8px";
        li.style.textAlign = "center";
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de sortear.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const nombreSorteado = listaAmigos[indiceAleatorio];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li style="padding: 15px; background-color: #05DF05; color: white; font-weight: bold; border-radius: 8px; text-align: center;">${nombreSorteado} es el amigo secreto 🎉</li>`;
}
