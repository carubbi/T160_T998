// Aula 11 - Beecrowd 1181 (Linha na Matriz)

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
            matriz[i][j] = parseFloat(dados[indice]);
            indice++;
        }
    }

    return matriz;
}

// Declaracao de variaveis
let linhaEscolhida;
let operacao;
let entrada;
let matriz;
let nLinhas;
let soma;
let media;
let j;

// Entrada
linhaEscolhida = parseInt(prompt("Digite a linha escolhida:")); // exemplo: 2
operacao = prompt("Digite a operacao S ou M:"); // exemplo: S
entrada = prompt("Digite todos os valores da matriz separados por espaco:");

// Processamento
nLinhas = 12;
matriz = gerarMatriz(entrada, nLinhas);
soma = 0;

for (j = 0; j < matriz[linhaEscolhida].length; j++) {
    soma = soma + matriz[linhaEscolhida][j];
}

if (operacao == "S") {
    console.log(soma.toFixed(1));
} else {
    media = soma / matriz[linhaEscolhida].length;
    console.log(media.toFixed(1));
}
