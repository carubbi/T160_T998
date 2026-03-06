let nome;
let entradaSalario;
let entradaVendas;
let salarioFixo;
let vendas;
let total;

nome = prompt('Digite o nome: ');
entradaSalario = prompt('Digite o salario fixo: ');
entradaVendas = prompt('Digite o total de vendas: ');

salarioFixo = parseFloat(entradaSalario);
vendas = parseFloat(entradaVendas);

total = salarioFixo + (vendas * 0.15);

console.log('TOTAL = R$ ' + total.toFixed(2));
