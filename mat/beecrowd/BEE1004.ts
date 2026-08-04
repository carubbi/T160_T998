// Declarar as variáveis
let entradaA: string;
let entradaB: string;
let A: number;
let B: number;
let PROD: number;

// Entrada de dados
entradaA = prompt('Digite A: ')!;
entradaB = prompt('Digite B: ')!;

// Processamento dos dados
A = parseInt(entradaA);
B = parseInt(entradaB);
PROD = A * B;

// Saída de dados
console.log(`PROD = ${PROD}`);
