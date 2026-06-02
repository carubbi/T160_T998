// Aula 11 - Exercicio 12 (gerar matriz por dimensoes)

// Gera uma matriz em que cada posicao recebe i * 10 + j.
function gerarMatrizPorDimensoes(nLinhas, nColunas) {
    let matriz;
    let i;
    let j;

    matriz = [];

    for (i = 0; i < nLinhas; i++) {
        matriz[i] = [];

        for (j = 0; j < nColunas; j++) {
            matriz[i][j] = i * 10 + j;
        }
    }

    return matriz;
}

// Declaracao de variaveis
let matriz;
let nLinhas;
let nColunas;
let i;
let j;

// Dimensoes da matriz da figura
nLinhas = 6;
nColunas = 6;

// Processamento
matriz = gerarMatrizPorDimensoes(nLinhas, nColunas);

// Saida
for (i = 0; i < matriz.length; i++) {
    for (j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);
    }
}
