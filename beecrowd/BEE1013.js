// Declarar as variáveis
let entradaA;
let entradaB;
let entradaC;
let A;
let B;
let C;
let maiorAB;
let maior;

// Entrada de dados
entradaA = prompt('Digite A: ');
entradaB = prompt('Digite B: ');
entradaC = prompt('Digite C: ');

// Processamento dos dados
A = parseInt(entradaA);
B = parseInt(entradaB);
C = parseInt(entradaC);

maiorAB = (A + B + Math.abs(A - B)) / 2;
maior = (maiorAB + C + Math.abs(maiorAB - C)) / 2;

// Saída de dados
console.log(`${maior} eh o maior`);
