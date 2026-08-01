// Aula 8 - Exemplo 3 (reutilizacao de codigo com funcao)
function calcularDobro(numero: number): number {
  return numero * 2;
}

// Declaracao de variaveis
let entradaValor1: string | null;
let entradaValor2: string | null;
let entradaValor3: string | null;
let valor1: number;
let valor2: number;
let valor3: number;

// Entrada
entradaValor1 = prompt("Digite o primeiro valor:"); // 5
entradaValor2 = prompt("Digite o segundo valor:"); // 8
entradaValor3 = prompt("Digite o terceiro valor:"); // 12

// Processamento
if (entradaValor1 !== null && entradaValor2 !== null && entradaValor3 !== null) {
  valor1 = parseFloat(entradaValor1);
  valor2 = parseFloat(entradaValor2);
  valor3 = parseFloat(entradaValor3);
  valor1 = calcularDobro(valor1);
  valor2 = calcularDobro(valor2);
  valor3 = calcularDobro(valor3);

  // Saida
  console.log(valor1);
  console.log(valor2);
  console.log(valor3);
}
