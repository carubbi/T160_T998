// Declarar as variáveis
let entradaCodigo1: string;
let entradaQuantidade1: string;
let entradaValor1: string;
let entradaCodigo2: string;
let entradaQuantidade2: string;
let entradaValor2: string;
let codigo1: number;
let quantidade1: number;
let valor1: number;
let codigo2: number;
let quantidade2: number;
let valor2: number;
let total: number;

// Entrada de dados
entradaCodigo1 = prompt('Digite o codigo da peca 1: ')!;
entradaQuantidade1 = prompt('Digite a quantidade da peca 1: ')!;
entradaValor1 = prompt('Digite o valor unitario da peca 1: ')!;
entradaCodigo2 = prompt('Digite o codigo da peca 2: ')!;
entradaQuantidade2 = prompt('Digite a quantidade da peca 2: ')!;
entradaValor2 = prompt('Digite o valor unitario da peca 2: ')!;

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
