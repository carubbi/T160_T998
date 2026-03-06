let entradaNumero;
let entradaHoras;
let entradaValorHora;
let numero;
let horas;
let valorHora;
let salario;

entradaNumero = prompt('Digite o numero do funcionario: ');
entradaHoras = prompt('Digite as horas trabalhadas: ');
entradaValorHora = prompt('Digite o valor por hora: ');

numero = parseInt(entradaNumero);
horas = parseInt(entradaHoras);
valorHora = parseFloat(entradaValorHora);

salario = horas * valorHora;

console.log('NUMBER = ' + numero);
console.log('SALARY = U$ ' + salario.toFixed(2));
