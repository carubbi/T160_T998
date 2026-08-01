// Aula 8 - Exemplo 8 (conversao de decimal para binario)
function decimalParaBinario(numero: number): string {
  let binario: string;
  let resto: number;

  if (numero === 0) {
    return "0";
  }

  binario = "";

  while (numero > 0) {
    resto = numero % 2;
    binario = resto + binario;
    numero = Math.trunc(numero / 2);
  }

  return binario;
}

// Declaracao de variaveis
let entradaNumero: string | null;
let numero: number;

// Entrada
entradaNumero = prompt("Digite um numero decimal inteiro:"); // 13

if (entradaNumero !== null) {
  numero = parseInt(entradaNumero);

  // Saida
  console.log(decimalParaBinario(numero)); // 1101
}
