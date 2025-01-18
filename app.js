//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];  // Array para armazenar os nomes dos amigos

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value.trim();  // Pega o valor do input

    // Verifica se o campo de input não está vazio
    if (nomeAmigo == "") {
        alert('Por favor, digite um nome!');
        return;
    }

    // Adiciona o nome do amigo ao array
    listaDeAmigos.push(nomeAmigo);
    console.log(`${nomeAmigo} foi adicionado à lista de amigos.`);
    
    // Atualiza a lista de amigos na tela
    atualizarListaDeAmigos();

    // Limpa o campo de input
    document.getElementById('amigo').value = "";
}

// Função para atualizar a lista de amigos na interface
function atualizarListaDeAmigos() {
    const listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = "";  // Limpa a lista atual

    // Adiciona cada amigo da lista ao HTML
    listaDeAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaElement.appendChild(li);
    });
}

// Função para sortear um amigo secreto aleatoriamente
function sortearAmigo() {
    if (listaDeAmigos.length == 0) {
        alert('A lista está vazia! Adicione amigos antes de sortear.');
        return;
    } else if(listaDeAmigos.length == 1){
        alert('Adicione pelo menos 2 (dois) amigos antes de sortear.');
        return;
    }

    // Sorteia um amigo aleatoriamente
    const amigoSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];

    // Exibe o resultado do sorteio
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;
}