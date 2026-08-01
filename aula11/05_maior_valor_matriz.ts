// Aula 11 - Exemplo 5 (maior valor em matriz)

// Declaracao de variaveis
let matriz: number[][];
let entrada: string | null;
let dados: string[];
let nLinhas: number;
let nColunas: number;
let maior: number;
let linhaMaior: number;
let colunaMaior: number;
let i: number;
let j: number;
let indice: number;

// Quantidade de linhas da matriz
nLinhas = 3;

// Inicializacao
matriz = [];
indice = 0;

// Entrada
entrada = prompt("Digite todos os valores da matriz separados por espaco:"); // exemplo: 12 45 7 89 23 14 5 91 30
if (entrada !== null) {
    dados = entrada.split(" ");
    nColunas = parseInt(String(dados.length / nLinhas));

    for (i = 0; i < nLinhas; i++) {
        matriz[i] = [];

        for (j = 0; j < nColunas; j++) {
            matriz[i][j] = parseInt(dados[indice]);
            indice++;
        }
    }

    // Inicializa o maior com a primeira posicao da matriz
    maior = matriz[0][0];
    linhaMaior = 0;
    colunaMaior = 0;

    // Processamento
    for (i = 0; i < matriz.length; i++) {
        for (j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] > maior) {
                maior = matriz[i][j];
                linhaMaior = i;
                colunaMaior = j;
            }
        }
    }

    // Saida
    console.log("Maior valor: " + maior);
    console.log("Linha: " + linhaMaior);
    console.log("Coluna: " + colunaMaior);
}
