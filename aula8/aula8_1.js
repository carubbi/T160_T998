// Aula 8 - Exemplo 1 (funcao basica de soma)
function somar(a, b) {
  a = parseFloat(a);
  b = parseFloat(b);

  return a + b;
}

// Declaracao de variaveis
let num1;
let num2;
let total;

// Entrada
num1 = prompt("Digite o primeiro numero:"); // 4
num2 = prompt("Digite o segundo numero:"); // 7

// Processamento
total = somar(num1, num2);

// Saida
console.log(total); // 11
