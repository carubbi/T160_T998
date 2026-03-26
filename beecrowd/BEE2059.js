// Declarar as variáveis
let entradaP;
let entradaJ1;
let entradaJ2;
let entradaR;
let entradaA;
let p;
let j1;
let j2;
let r;
let a;
let soma;

// Entrada de dados
entradaP = prompt('Digite par ou impar: ');
entradaJ1 = prompt('Digite o valor do jogador 1: ');
entradaJ2 = prompt('Digite o valor do jogador 2: ');
entradaR = prompt('Digite se jogador 1 roubou: ');
entradaA = prompt('Digite se jogador 2 acusou: ');

// Processamento dos dados
p = parseInt(entradaP);
j1 = parseInt(entradaJ1);
j2 = parseInt(entradaJ2);
r = parseInt(entradaR);
a = parseInt(entradaA);
soma = j1 + j2;

/*
Solução com uma única saída de dados:
let saida;

if (r === 1 && a === 1) {
  saida = 'Jogador 2 ganha!';
} else if (r === 1 && a === 0) {
  saida = 'Jogador 1 ganha!';
} else if (r === 0 && a === 1) {
  saida = 'Jogador 1 ganha!';
} else if ((soma % 2 === 0 && p === 1) || (soma % 2 !== 0 && p === 0)) {
  saida = 'Jogador 1 ganha!';
} else {
  saida = 'Jogador 2 ganha!';
}

// Saída de dados
console.log(saida);
*/

// Saída de dados
if (r === 1 && a === 1) {
  console.log('Jogador 2 ganha!');
} else if (r === 1 && a === 0) {
  console.log('Jogador 1 ganha!');
} else if (r === 0 && a === 1) {
  console.log('Jogador 1 ganha!');
} else if ((soma % 2 === 0 && p === 1) || (soma % 2 !== 0 && p === 0)) {
  console.log('Jogador 1 ganha!');
} else {
  console.log('Jogador 2 ganha!');
}
