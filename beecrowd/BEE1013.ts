// Declarar as variáveis
let entradaA: string;
let entradaB: string;
let entradaC: string;
let A: number;
let B: number;
let C: number;
let maiorAB: number;
let maior: number;

// Entrada de dados
entradaA = prompt('Digite A: ')!;
entradaB = prompt('Digite B: ')!;
entradaC = prompt('Digite C: ')!;

// Processamento dos dados
A = parseInt(entradaA);
B = parseInt(entradaB);
C = parseInt(entradaC);

maiorAB = (A + B + Math.abs(A - B)) / 2;
maior = (maiorAB + C + Math.abs(maiorAB - C)) / 2;

// Saída de dados
console.log(`${maior} eh o maior`);
