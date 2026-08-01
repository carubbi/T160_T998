// Aula 8 - Exemplo 1 (funcao basica de soma)
function somar(a: number, b: number): number {
  return a + b;
}

// Declaracao de variaveis
let entradaNum1: string | null;
let entradaNum2: string | null;
let num1: number;
let num2: number;
let total: number;

// Entrada
entradaNum1 = prompt("Digite o primeiro numero:"); // 4
entradaNum2 = prompt("Digite o segundo numero:"); // 7

// Processamento
if (entradaNum1 !== null && entradaNum2 !== null) {
  num1 = parseFloat(entradaNum1);
  num2 = parseFloat(entradaNum2);
  total = somar(num1, num2);

  // Saida
  console.log(total); // 11
}
