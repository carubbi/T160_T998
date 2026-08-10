// Aula 11 - Exemplo 2 (percurso de matriz)

// Declaracao de variaveis
let matriz: number[][];
let i: number;
let j: number;

// Criacao da matriz
matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Percurso em ordem por linhas
for (i = 0; i < matriz.length; i++) {
    for (j = 0; j < matriz[i].length; j++) {
        console.log("Linha " + i + ", coluna " + j + ": " + matriz[i][j]);
    }
}
