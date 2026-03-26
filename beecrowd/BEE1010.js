// Declarar as variáveis
let entradaCodigo1;
let entradaQuantidade1;
let entradaValor1;
let entradaCodigo2;
let entradaQuantidade2;
let entradaValor2;
let codigo1;
let quantidade1;
let valor1;
let codigo2;
let quantidade2;
let valor2;
let total;

// Entrada de dados
entradaCodigo1 = prompt('Digite o codigo da peca 1: ');
entradaQuantidade1 = prompt('Digite a quantidade da peca 1: ');
entradaValor1 = prompt('Digite o valor unitario da peca 1: ');
entradaCodigo2 = prompt('Digite o codigo da peca 2: ');
entradaQuantidade2 = prompt('Digite a quantidade da peca 2: ');
entradaValor2 = prompt('Digite o valor unitario da peca 2: ');

// Processamento dos dados
codigo1 = parseInt(entradaCodigo1);
quantidade1 = parseInt(entradaQuantidade1);
valor1 = parseFloat(entradaValor1);
codigo2 = parseInt(entradaCodigo2);
quantidade2 = parseInt(entradaQuantidade2);
valor2 = parseFloat(entradaValor2);

total = quantidade1 * valor1 + quantidade2 * valor2;

// Saída de dados
console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
