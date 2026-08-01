// Aula 11 - Beecrowd 1187 (Area Superior)

// Gera uma matriz a partir de uma entrada textual.
// A funcao recebe a entrada e a quantidade de linhas.
function gerarMatriz(entrada: string, nLinhas: number): number[][] {
    let dados: string[];
    let matriz: number[][];
    let nColunas: number;
    let i: number;
    let j: number;
    let indice: number;

    dados = entrada.split(" ");
    nColunas = parseInt(String(dados.length / nLinhas));
    matriz = [];
    indice = 0;

    for (i = 0; i < nLinhas; i++) {
        matriz[i] = [];

        for (j = 0; j < nColunas; j++) {
            matriz[i][j] = parseFloat(dados[indice]);
            indice++;
        }
    }

    return matriz;
}

// Declaracao de variaveis
let operacao: string | null;
let entrada: string | null;
let matriz: number[][];
let nLinhas: number;
let soma: number;
let media: number;
let quantidade: number;
let i: number;
let j: number;

// Entrada
operacao = prompt("Digite a operacao S ou M:"); // exemplo: M
entrada = prompt("Digite todos os valores da matriz separados por espaco:");

// Processamento
if (operacao !== null && entrada !== null) {
    nLinhas = 12;
    matriz = gerarMatriz(entrada, nLinhas);
    soma = 0;
    quantidade = 0;

    for (i = 0; i < matriz.length; i++) {
        for (j = 0; j < matriz[i].length; j++) {
            if (j > i && j < matriz[i].length - 1 - i) {
                soma = soma + matriz[i][j];
                quantidade++;
            }
        }
    }

    if (operacao === "S") {
        console.log(soma.toFixed(1));
    } else {
        media = soma / quantidade;
        console.log(media.toFixed(1));
    }
}
