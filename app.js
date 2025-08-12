let amigos = [];

function adicionarAmigo() {
    let campo = document.getElementById("amigo");
    let nome = campo.value;

    if (nome === "") {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nome);
        mostrarLista();
        campo.value = "";
    }
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo para sortear.");
    } else {
        let numero = Math.floor(Math.random() * amigos.length);
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `<li>O amigo secreto é: <strong>${amigos[numero]}</strong></li>`;
    }
}
