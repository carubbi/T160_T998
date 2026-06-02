// Aula 11 - Exercicio complementar (transposta de matriz)

// Retorna a transposta de uma matriz.
function calcularTransposta(matriz) {
    let transposta;
    let i;
    let j;

    transposta = [];

    for (j = 0; j < matriz[0].length; j++) {
        transposta[j] = [];

        for (i = 0; i < matriz.length; i++) {
            transposta[j][i] = matriz[i][j];
        }
    }

    return transposta;
}

// Declaracao de variaveis
let matriz;
let transposta;
let i;
let j;

// Entrada fixa para estudo
matriz = [
    [1, 2, 3],
    [4, 5, 6]
];

// Processamento
transposta = calcularTransposta(matriz);

// Saida
console.log("Matriz transposta:");

for (i = 0; i < transposta.length; i++) {
    for (j = 0; j < transposta[i].length; j++) {
        console.log(transposta[i][j]);
    }
}
