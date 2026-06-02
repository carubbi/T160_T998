// Aula 11 - Exemplo 4 (soma e media de matriz)

// Declaracao de variaveis
let matriz;
let entrada;
let dados;
let nLinhas;
let nColunas;
let soma;
let media;
let quantidade;
let i;
let j;
let indice;

// Quantidade de linhas da matriz
nLinhas = 2;

// Inicializacao
matriz = [];
soma = 0;
quantidade = 0;
indice = 0;

// Entrada
entrada = prompt("Digite todos os valores da matriz separados por espaco:"); // exemplo: 8 7 9 6 10 5
dados = entrada.split(" ");
nColunas = parseInt(dados.length / nLinhas);

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
