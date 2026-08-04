// Declarar as variáveis
let entradaA: string;
let entradaB: string;
let A: number;
let B: number;
let mensagem: string;

// Entrada de dados
entradaA = prompt('Digite A: ')!;
entradaB = prompt('Digite B: ')!;

// Processamento dos dados
A = parseInt(entradaA);
B = parseInt(entradaB);

// Saída de dados
if ((A % B == 0) || (B % A == 0)) {
  mensagem = 'Sao';
} else {
  mensagem = 'Nao sao';
}

console.log(`${mensagem} Multiplos`);