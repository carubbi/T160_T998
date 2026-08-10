// Declarar as variáveis
let entradaA: string;
let entradaB: string;
let A: number;
let B: number;
let X: number;

// Entrada de dados
entradaA = prompt('Digite o valor de A:')!;
entradaB = prompt('Digite o valor de B:')!;

// Processamento dos dados
// Converter as entradas (string) para numérico
A = parseInt(entradaA, 10);
B = parseInt(entradaB, 10);

// Calcular a soma
X = A + B;

// Saída de dados
console.log(`X = ${X}`);
