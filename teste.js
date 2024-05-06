// Array de objetos contendo informações sobre os times
const times = [
    { nome: 'inter', vitorias: 1, empates: 3, derrotas: 0, golsFeitos: 70, golsSofridos: 30 },
    { nome: 'atletico mineiro', vitorias: 2, empates: 2, derrotas: 1, golsFeitos: 15, golsSofridos: 12 },
    { nome: 'Roma', vitorias: 0, empates: 2, derrotas: 1, golsFeitos: 150, golsSofridos: 25 },
    { nome: 'juventus', vitorias: 0, empates: 1, derrotas: 2, golsFeitos: 100, golsSofridos: 25 },
];

const jogadores = [
    { nome: 'cristiano', golsFeitos: 15 },
    { nome: 'neymar', golsFeitos: 10 },
    { nome: 'messi', golsFeitos: 14 },
    { nome: 'Jogador 4', golsFeitos: 12 },
    { nome: 'Jogador 5', golsFeitos: 6 },
];

let artilheiro = null;
let maxGols = 0;

jogadores.forEach((jogador) => {
    if (jogador.golsFeitos > maxGols) {
        artilheiro = jogador;
        maxGols = jogador.golsFeitos;
    }
});

if (artilheiro) {
    const divArtilheiro = document.getElementById('artilheiro');
    const h2Artilheiro = divArtilheiro.querySelector('h2');
    h2Artilheiro.textContent = artilheiro.nome;
    const fotoArtilheiro = divArtilheiro.querySelector('.fotoart');
    fotoArtilheiro.src = `imagens/${artilheiro.nome}.png`;

    // Adiciona um evento de clique à imagem
    fotoArtilheiro.addEventListener('click', () => {
        // Redireciona para a página do jogador
        window.location.href = `atletas\cristiano.html=${artilheiro.nome}`;
    });
}


// Ordenar os times com base nos pontos (do maior para o menor)
times.sort((a, b) => (b.vitorias * 3 + b.empates) - (a.vitorias * 3 + a.empates));

// Adicionar a posição, pontos, partidas, saldo de gols aos times
times.forEach((time, index) => {
    time.posicao = index + 1;
    time.pontos = time.vitorias * 3 + time.empates;
    time.partidas = time.vitorias + time.empates + time.derrotas
    time.saldoGols = time.golsFeitos - time.golsSofridos;
});

// Função para criar uma linha da tabela com nomes de times clicáveis
function criarLinhaClicavel(posicao, nome, pontos, partidas, vitorias, empates, derrotas, golsFeitos, golsSofridos, saldoGols) {
    const linha = document.createElement('tr');

    const celulaPosicao = document.createElement('td');
    celulaPosicao.textContent = posicao;
    linha.appendChild(celulaPosicao);

    const celulaNome = document.createElement('td');
    const linkNome = document.createElement('a');
    linkNome.textContent = nome;
    linkNome.href = obterURLDoTime(nome); // URL da página do time
    linkNome.target = "_blank"; // Abrir em uma nova aba
    celulaNome.appendChild(linkNome);
    linha.appendChild(celulaNome);

    const celulaPontos = document.createElement('td');
    celulaPontos.textContent = pontos;
    linha.appendChild(celulaPontos);

    const celulaPartidas = document.createElement('td');
    celulaPartidas.textContent = partidas;
    linha.appendChild(celulaPartidas);

    const celulaVitorias = document.createElement('td');
    celulaVitorias.textContent = vitorias;
    linha.appendChild(celulaVitorias);

    const celulaEmpates = document.createElement('td');
    celulaEmpates.textContent = empates;
    linha.appendChild(celulaEmpates);

    const celulaDerrotas = document.createElement('td');
    celulaDerrotas.textContent = derrotas;
    linha.appendChild(celulaDerrotas);

    const celulaGolsFeitos = document.createElement('td');
    celulaGolsFeitos.textContent = golsFeitos;
    linha.appendChild(celulaGolsFeitos);

    const celulaGolsSofridos = document.createElement('td');
    celulaGolsSofridos.textContent = golsSofridos;
    linha.appendChild(celulaGolsSofridos);

    const celulaSaldoGols = document.createElement('td');
    celulaSaldoGols.textContent = saldoGols;
    linha.appendChild(celulaSaldoGols);

    return linha;
}

// Função para obter o URL correto do time
function obterURLDoTime(nomeTime) {
    switch (nomeTime.toLowerCase()) {
        case 'inter':
            return 'inicio.html';
        case 'roma':
            return 'inicio.html';
        case 'juventus':
            return 'juventus.html';
        case 'atletico mineiro':
            return 'juventus.html';
        default:
            return '#'; // URL padrão para times desconhecidos
    }
}

// Selecionar o corpo da tabela
const corpoTabela = document.querySelector('#tabela-times tbody');

// Iterar sobre o array de times e adicionar as linhas à tabela
times.forEach(time => {
    const linha = criarLinhaClicavel(time.posicao, time.nome, time.pontos, time.partidas, time.vitorias, time.empates, time.derrotas, time.golsFeitos, time.golsSofridos, time.saldoGols);
    corpoTabela.appendChild(linha);
});
