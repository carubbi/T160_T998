// Aula 9 - Exemplo 9 (soma e media com vetor)

// Declaracao de variaveis
let entrada: string | null;
let partes: string[];
let notas: number[];
let soma: number;
let media: number;
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
  notas = [];
  soma = 0;

  for (i = 0; i < partes.length; i++) {
    notas[i] = parseFloat(partes[i]);
  }

  for (i = 0; i < notas.length; i++) {
    soma = soma + notas[i];
  }

  media = soma / notas.length;

  // Saida
  console.log("Soma: " + soma);
  console.log("Media: " + media);
}
