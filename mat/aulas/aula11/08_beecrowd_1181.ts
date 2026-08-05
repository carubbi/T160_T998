// Aula 11 - Beecrowd 1181 (Linha na Matriz)

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
let entradaLinha: string | null;
let linhaEscolhida: number;
let operacao: string | null;
let entrada: string | null;
let matriz: number[][];
let nLinhas: number;
let soma: number;
let media: number;
let j: number;

// Entrada
entradaLinha = prompt("Digite a linha escolhida:"); // exemplo: 2
operacao = prompt("Digite a operacao S ou M:"); // exemplo: S
entrada = prompt("Digite todos os valores da matriz separados por espaco:");

// Processamento
if (entradaLinha !== null && operacao !== null && entrada !== null) {
    linhaEscolhida = parseInt(entradaLinha);
    nLinhas = 12;
    matriz = gerarMatriz(entrada, nLinhas);
    soma = 0;

    for (j = 0; j < matriz[linhaEscolhida].length; j++) {
        soma = soma + matriz[linhaEscolhida][j];
    }

    if (operacao === "S") {
        console.log(soma.toFixed(1));
    } else {
        media = soma / matriz[linhaEscolhida].length;
        console.log(media.toFixed(1));
    }
}
