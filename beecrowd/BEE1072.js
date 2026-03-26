// Declarar as variáveis
let entradaQuantidade;
let quantidade;
let numero;
let dentro;
let fora;
let i;

// Entrada de dados
entradaQuantidade = prompt('Digite a quantidade de valores: ');

// Processamento dos dados
quantidade = parseInt(entradaQuantidade);
dentro = 0;
fora = 0;

for (i = 0; i < quantidade; i++) {
  numero = parseInt(prompt('Digite um valor: '));

  if (numero >= 10 && numero <= 20) {
    dentro++;
  } else {
    fora++;
  }
}

// Saída de dados
console.log(`${dentro} in`);
console.log(`${fora} out`);
