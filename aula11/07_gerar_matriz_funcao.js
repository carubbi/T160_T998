// Aula 11 - Exemplo 7 (funcao para gerar matriz)

// Gera uma matriz a partir de uma entrada textual.
// A funcao recebe a entrada e a quantidade de linhas.
// A quantidade de colunas e deduzida pela quantidade de dados.
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
let i;
let j;

// Entrada
entrada = prompt("Digite todos os valores da matriz separados por espaco:"); // exemplo: 1 2 3 4 5 6

// Informa linhas e deduz colunas
matriz = gerarMatriz(entrada, 2);

// Saida
console.log("Matriz gerada:");

for (i = 0; i < matriz.length; i++) {
    for (j = 0; j < matriz[i].length; j++) {
        console.log("Linha " + i + ", coluna " + j + ": " + matriz[i][j]);
    }
}
