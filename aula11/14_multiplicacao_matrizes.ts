// Aula 11 - Exercicio complementar (multiplicacao de matrizes)

// Multiplica duas matrizes.
function multiplicarMatrizes(a: number[][], b: number[][]): number[][] {
    let resultado: number[][];
    let i: number;
    let j: number;
    let k: number;
    let soma: number;

    resultado = [];

    for (i = 0; i < a.length; i++) {
        resultado[i] = [];

        for (j = 0; j < b[0].length; j++) {
            soma = 0;

            for (k = 0; k < a[i].length; k++) {
                soma = soma + a[i][k] * b[k][j];
            }

            resultado[i][j] = soma;
        }
    }

    return resultado;
}

// Declaracao de variaveis
let a: number[][];
let b: number[][];
let resultado: number[][];
let i: number;
let j: number;

// Entradas fixas para estudo
a = [
    [1, 2, 3],
    [4, 5, 6]
];

b = [
    [7, 8],
    [9, 10],
    [11, 12]
];

// Processamento
resultado = multiplicarMatrizes(a, b);

// Saida
console.log("Resultado da multiplicacao:");

for (i = 0; i < resultado.length; i++) {
    for (j = 0; j < resultado[i].length; j++) {
        console.log(resultado[i][j]);
    }
}
