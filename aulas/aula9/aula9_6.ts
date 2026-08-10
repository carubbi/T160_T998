// Aula 9 - Exemplo 6 (preenchimento com varios prompt)

// Declaracao de variaveis
let notas: number[];
let entrada: string | null;
let i: number;

// Processamento
notas = [];
entrada = "";

// Entrada e preenchimento do vetor
for (i = 0; i < 5 && entrada !== null; i++) {
  entrada = prompt("Digite uma nota:"); // 8.5, 7.0, 9.2, 6.5, 10.0

  if (entrada !== null) {
    notas[i] = parseFloat(entrada);
  }
}

// Saida
if (entrada !== null) {
  for (i = 0; i < notas.length; i++) {
    console.log(notas[i]);
  }
}
