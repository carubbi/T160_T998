// Declarar as variáveis
let entradaA: string;
let entradaB: string;
let entradaC: string;
let A: number;
let B: number;
let C: number;
let MEDIA: number;

// Entrada de dados
entradaA = prompt('Digite A: ')!;
entradaB = prompt('Digite B: ')!;
entradaC = prompt('Digite C: ')!;

// Processamento dos dados
A = parseFloat(entradaA);
B = parseFloat(entradaB);
C = parseFloat(entradaC);
MEDIA = ((A * 2) + (B * 3) + (C * 5)) / 10;

// Saída de dados
console.log(`MEDIA = ${MEDIA.toFixed(1)}`);
