// Declarar as variáveis
let entradaNumero;
let numero;
let i;

// Entrada de dados
entradaNumero = prompt('Digite um numero: ');

// Processamento dos dados
numero = parseInt(entradaNumero);

// Saída de dados
for (i = 1; i <= 10; i++) {
  console.log(`${i} x ${numero} = ${i * numero}`);
}
