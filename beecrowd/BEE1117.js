// Declarar as variáveis
let nota;
let somaNotas;
let quantidadeValidas;

// Inicialização
somaNotas = 0;
quantidadeValidas = 0;

// Entrada, processamento e saída de dados
while (quantidadeValidas < 2) {
  nota = parseFloat(prompt('Digite uma nota: '));

  if (nota >= 0 && nota <= 10) {
    somaNotas += nota;
    quantidadeValidas++;
  } else {
    console.log('nota invalida');
  }
}

console.log(`media = ${(somaNotas / 2).toFixed(2)}`);
