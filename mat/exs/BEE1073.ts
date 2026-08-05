// Declarar as variáveis
let entradaNumero: string | null;
let numero: number;
let i: number;

// Entrada de dados
entradaNumero = prompt('Digite um numero: ');

// Processamento e saída de dados
if (entradaNumero !== null) {
numero = parseInt(entradaNumero);

for (i = 2; i <= numero; i += 2) {
  console.log(`${i}^2 = ${i * i}`);
}
}
