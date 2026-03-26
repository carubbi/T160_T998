// Declarar as variáveis
let entradaNumero;
let numero;
let i;

// Entrada de dados
entradaNumero = prompt('Digite um numero: ');

// Processamento e saída de dados
numero = parseInt(entradaNumero);

for (i = 2; i <= numero; i += 2) {
  console.log(`${i}^2 = ${i * i}`);
}
