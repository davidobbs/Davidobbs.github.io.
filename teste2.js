// Array de objetos contendo informações sobre os times

const times = [
  { nome: 'Fenix', vitorias: 13, empates: 4, derrotas: 10, golsFeitos: 70, golsSofridos: 30 },
  { nome: 'milan', vitorias: 16, empates: 2, derrotas: 6, golsFeitos: 15, golsSofridos: 12 },
  { nome: 'Roma', vitorias: 10, empates: 5, derrotas: 2, golsFeitos: 150, golsSofridos: 25 },
  { nome: 'juventus', vitorias: 4, empates: 3, derrotas: 8, golsFeitos: 100, golsSofridos: 25 },

];

// Ordenar os times com base nos pontos (do maior para o menor)
times.sort((a, b) => (b.vitorias * 3 + b.empates) - (a.vitorias * 3 + a.empates));

// Adicionar a posição aos times
times.forEach((time, index) => {
  time.posicao = index + 1;
  time.pontos = time.vitorias * 3 + time.empates;
  time.partidas = time.vitorias + time.empates + time.derrotas
  time.saldoGols = time.golsFeitos - time.golsSofridos;
});

// Função para criar uma linha da tabela
function criarLinha(posicao, nome, pontos, partidas, vitorias, empates, derrotas, golsFeitos, golsSofridos, saldoGols) {
  const linha = document.createElement('tr');


  const celulaPosicao = document.createElement('td');
  celulaPosicao.textContent = posicao;
  linha.appendChild(celulaPosicao);

  const celulaNome = document.createElement('td');
  celulaNome.textContent = nome;
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


  // Aqui você pode adicionar a lógica para preencher a coluna "Últimos 5 Jogos" conforme necessário

  return linha;
}

// Selecionar o corpo da tabela
const corpoTabela = document.querySelector('#tabela-times tbody');

// Iterar sobre o array de times e adicionar as linhas à tabela
times.forEach(time => {
  const linha = criarLinha(time.posicao, time.nome, time.pontos, time.partidas, time.vitorias, time.empates, time.derrotas, time.golsFeitos, time.golsSofridos, time.saldoGols);
  corpoTabela.appendChild(linha);
});
