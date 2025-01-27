//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenação
let amigos = [];

// Função para adicionar um nome à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim(); 

    // Valida a entrada
    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }

    // Adiciona o nome ao meu array
    amigos.push(nome);

    // Atualiza a lista exibida e limpa o campo de entrada
    atualizarLista();
    input.value = ""; 
    input.focus(); 
}

// Função para atualizar a lista visível de amigos
function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizar

    // Adiciona cada amigo à lista
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para realizar o sorteio aleatório
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia. Adicione pelo menos um nome.");
        return;
    }

    // Sorteia um nome aleatoriamente
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Exibe o nome sorteado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>🎉 O sorteado é: <strong>${sorteado}</strong>!</li>`;
}
