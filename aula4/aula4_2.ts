// Exemplo 2 - if...else
// Declaracao de variaveis
let entrada: string;
let salarioAtual: number;
let novoSalario: number;

// Entrada
entrada = prompt("Digite o salario atual:")!;

// Conversao para numero decimal
salarioAtual = parseFloat(entrada);

// Regra de negocio por faixa salarial
if (salarioAtual <= 500) {
  novoSalario = salarioAtual * 1.2;
} else {
  novoSalario = salarioAtual * 1.1;
}

// Saida formatada com 2 casas decimais
console.log(`Novo salario: R$ ${novoSalario.toFixed(2)}`);
