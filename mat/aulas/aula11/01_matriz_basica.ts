// Aula 11 - Exemplo 1 (matriz basica)

// Declaracao de variaveis
let matriz: number[][];

// Criacao da matriz
matriz = [
    [1, 2, 3],
    [4, 5, 6]
];

// Acesso a elementos
console.log("Elemento da linha 0, coluna 0:");
console.log(matriz[0][0]);

console.log("Elemento da linha 1, coluna 2:");
console.log(matriz[1][2]);

// Alteracao de uma posicao
matriz[1][2] = 9;

console.log("Depois da alteracao:");
console.log(matriz[1][2]);

// Quantidade de linhas e colunas
console.log("Quantidade de linhas:");
console.log(matriz.length);

console.log("Quantidade de colunas da linha 0:");
console.log(matriz[0].length);
