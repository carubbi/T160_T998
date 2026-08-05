// Aula 11 - Exemplo 3 (leitura de matriz)

// Declaracao de variaveis
let matriz: number[][];
let entrada: string | null;
let dados: string[];
let nLinhas: number;
let nColunas: number;
let i: number;
let j: number;
let indice: number;

// Quantidade de linhas da matriz
nLinhas = 3;

// Inicializacao
matriz = [];
indice = 0;

// Entrada: um unico prompt le todos os elementos da matriz
entrada = prompt("Digite todos os valores da matriz separados por espaco:"); // exemplo: 1 2 3 4 5 6 7 8 9
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

    // Saida
    console.log("Matriz digitada:");

    for (i = 0; i < matriz.length; i++) {
        for (j = 0; j < matriz[i].length; j++) {
            console.log("Linha " + i + ", coluna " + j + ": " + matriz[i][j]);
        }
    }
}
