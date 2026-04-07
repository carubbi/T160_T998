// Aula 8 - Exemplo 3 (reutilizacao de codigo com funcao)
function calcularDobro(numero) {
  numero = parseFloat(numero);

  return numero * 2;
}

// Declaracao de variaveis
let valor1;
let valor2;
let valor3;

// Entrada
valor1 = prompt("Digite o primeiro valor:"); // 5
valor2 = prompt("Digite o segundo valor:"); // 8
valor3 = prompt("Digite o terceiro valor:"); // 12

// Processamento
valor1 = calcularDobro(valor1);
valor2 = calcularDobro(valor2);
valor3 = calcularDobro(valor3);

// Saida
console.log(valor1);
console.log(valor2);
console.log(valor3);
