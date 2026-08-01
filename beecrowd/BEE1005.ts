// Declarar as variáveis
let entradaA: string;
let entradaB: string;
let A: number;
let B: number;
let MEDIA: number;

// Entrada de dados
entradaA = prompt('Digite A: ')!;
entradaB = prompt('Digite B: ')!;

// Processamento dos dados
A = parseFloat(entradaA);
B = parseFloat(entradaB);
MEDIA = ((A * 3.5) + (B * 7.5)) / 11;

// Saída de dados
console.log(`MEDIA = ${MEDIA.toFixed(5)}`);
