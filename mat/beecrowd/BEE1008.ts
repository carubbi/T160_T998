// Declarar as variáveis
let entradaNumero: string;
let entradaHoras: string;
let entradaValorHora: string;
let numero: number;
let horas: number;
let valorHora: number;
let salario: number;

// Entrada de dados
entradaNumero = prompt('Digite o numero do funcionario: ')!;
entradaHoras = prompt('Digite as horas trabalhadas: ')!;
entradaValorHora = prompt('Digite o valor por hora: ')!;

// Processamento dos dados
numero = parseInt(entradaNumero);
horas = parseInt(entradaHoras);
valorHora = parseFloat(entradaValorHora);

salario = horas * valorHora;

// Saída de dados
console.log(`NUMBER = ${numero}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);
