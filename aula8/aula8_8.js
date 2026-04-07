// Aula 8 - Exemplo 8 (conversao de decimal para binario)
function decimalParaBinario(numero) {
  let binario;
  let resto;

  numero = parseInt(numero);

  if (numero == 0) {
    return "0";
  }

  binario = "";

  while (numero > 0) {
    resto = numero % 2;
    binario = resto + binario;
    numero = parseInt(numero / 2);
  }

  return binario;
}

// Declaracao de variaveis
let numero;

// Entrada
numero = prompt("Digite um numero decimal inteiro:"); // 13

// Saida
console.log(decimalParaBinario(numero)); // 1101
