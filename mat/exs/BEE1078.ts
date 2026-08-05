// Declarar as variáveis
let entradaNumero: string | null;
let numero: number;
let i: number;

// Entrada de dados
entradaNumero = prompt('Digite um numero: ');

// Processamento dos dados
if (entradaNumero !== null) {
numero = parseInt(entradaNumero);

// Saída de dados
for (i = 1; i <= 10; i++) {
  console.log(`${i} x ${numero} = ${i * numero}`);
}
}
