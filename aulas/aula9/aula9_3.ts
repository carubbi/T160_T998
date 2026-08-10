// Aula 9 - Exemplo 3 (alteracao de valor em vetor)

// Declaracao de variaveis
let notas: number[];
let i: number;

// Processamento
notas = [8.5, 7.0, 9.2];
notas[1] = 8.0;

// Saida
for (i = 0; i < notas.length; i++) {
  console.log(notas[i]);
}
