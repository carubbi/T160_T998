// Aula 9 - Exemplo 8 (split com quebra de linha)

// Declaracao de variaveis
let entrada: string | null;
let partes: string[];
let numeros: number[];
let i: number;

// Entrada
entrada = prompt("Digite as notas separadas por quebra de linha:");
// Exemplo:
// 8.5
// 7.0
// 9.2
// 6.5
// 10.0

// Processamento
if (entrada !== null) {
  partes = entrada.split("\n");
  numeros = [];

  for (i = 0; i < partes.length; i++) {
    numeros[i] = parseFloat(partes[i]);
  }

  // Saida
  for (i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
  }
}
