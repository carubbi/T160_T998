// Aula 11 - Exercicio 9 (soma de cada coluna usando funcao)

// Gera uma matriz a partir de uma entrada textual.
// A funcao recebe a entrada e a quantidade de linhas.
function gerarMatriz(entrada, nLinhas) {
    let dados;
    let matriz;
    let nColunas;
    let i;
    let j;
    let indice;

    dados = entrada.split(" ");
    nColunas = parseInt(dados.length / nLinhas);
    matriz = [];
    indice = 0;

    for (i = 0; i < nLinhas; i++) {
        matriz[i] = [];

        for (j = 0; j < nColunas; j++) {
            matriz[i][j] = parseInt(dados[indice]);
            indice++;
        }
    }

    return matriz;
}

// Declaracao de variaveis
let entrada;
let matriz;
let nLinhas;
let somaColuna;
let i;
let j;

// Entrada
entrada = prompt("Digite todos os valores da matriz separados por espaco:"); // exemplo: 1 2 3 4 5 6 7 8 9

// Processamento
nLinhas = 3;
matriz = gerarMatriz(entrada, nLinhas);

for (j = 0; j < matriz[0].length; j++) {
    somaColuna = 0;

    for (i = 0; i < matriz.length; i++) {
        somaColuna = somaColuna + matriz[i][j];
    }

    console.log("Soma da coluna " + j + ": " + somaColuna);
}
