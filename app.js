let listaDeAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value.trim();    
    if (nomeAmigo == "") {
        alert('Por favor, digite o nome de um amigo!');
        return;
    }

    // Adiciona o nome do amigo ao array
    listaDeAmigos.push(nomeAmigo);
    console.log(`Legal! ${nomeAmigo} foi adicionado à lista de amigos.`);   
    atualizarListaDeAmigos();
    document.getElementById('amigo').value = "";
}

// Função para atualizar a lista de amigos na interface
function atualizarListaDeAmigos() {
    const listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = "";
   
    listaDeAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaElement.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (listaDeAmigos.length == 0) {
        alert('Ops! A lista está vazia. Adicione amigos antes de sortear.');
        return;
    } else if(listaDeAmigos.length == 1){
        alert('Hmm, será que você tem só 1 amigo? Adicione pelo menos mais um amigo antes de sortear.');
        return;
    }

    // Sorteia um amigo
    const amigoSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];

    // Exibe o resultado do sorteio
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;
}