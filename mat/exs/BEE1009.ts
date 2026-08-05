// Declarar as variáveis
let nome: string;
let entradaSalario: string;
let entradaVendas: string;
let salarioFixo: number;
let vendas: number;
let total: number;

// Entrada de dados
nome = prompt('Digite o nome: ')!;
entradaSalario = prompt('Digite o salario fixo: ')!;
entradaVendas = prompt('Digite o total de vendas: ')!;

// Processamento dos dados
salarioFixo = parseFloat(entradaSalario);
vendas = parseFloat(entradaVendas);

total = salarioFixo + (vendas * 0.15);

// Saída de dados
console.log(`TOTAL = R$ ${total.toFixed(2)}`);
