// Aula 11 - Exemplo 4 (soma e media de matriz)

// Declaracao de variaveis
let matriz: number[][];
let entrada: string | null;
let dados: string[];
let nLinhas: number;
let nColunas: number;
let soma: number;
let media: number;
let quantidade: number;
let i: number;
let j: number;
let indice: number;

// Quantidade de linhas da matriz
nLinhas = 2;

// Inicializacao
matriz = [];
soma = 0;
quantidade = 0;
indice = 0;

// Entrada
entrada = prompt("Digite todos os valores da matriz separados por espaco:"); // exemplo: 8 7 9 6 10 5
if (entrada !== null) {
    dados = entrada.split(" ");
    nColunas = parseInt(String(dados.length / nLinhas));

    for (i = 0; i < nLinhas; i++) {
        matriz[i] = [];

        for (j = 0; j < nColunas; j++) {
            matriz[i][j] = parseFloat(dados[indice]);
            indice++;
        }
    }

    // Processamento
    for (i = 0; i < matriz.length; i++) {
        for (j = 0; j < matriz[i].length; j++) {
            soma = soma + matriz[i][j];
            quantidade++;
        }
    }

    media = soma / quantidade;

    // Saida
    console.log("Soma: " + soma);
    console.log("Media: " + media);
}
