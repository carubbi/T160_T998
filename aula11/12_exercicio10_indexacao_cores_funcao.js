// Aula 11 - Exercicio 10 (indexacao por cores usando funcao)

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
let cor;
let i;
let j;

// Entrada
entrada = prompt("Digite todos os valores da matriz separados por espaco:"); // exemplo: 0 1 2 3 4 5 10 11 12 13 14 15 20 21 22 23 24 25 30 31 32 33 34 35 40 41 42 43 44 45 50 51 52 53 54 55
cor = prompt("Digite a cor desejada:"); // azul, vermelho, roxo ou verde

// Processamento
nLinhas = 6;
matriz = gerarMatriz(entrada, nLinhas);

// Saida
if (cor == "azul") {
    for (i = 0; i < matriz.length; i++) {
        console.log(matriz[i][2]);
    }
} else if (cor == "vermelho") {
    for (j = 3; j <= 4; j++) {
        console.log(matriz[0][j]);
    }
} else if (cor == "roxo") {
    for (i = 2; i <= 4; i = i + 2) {
        for (j = 0; j <= 4; j = j + 2) {
            console.log(matriz[i][j]);
        }
    }
} else if (cor == "verde") {
    for (i = 4; i <= 5; i++) {
        for (j = 4; j <= 5; j++) {
            console.log(matriz[i][j]);
        }
    }
} else {
    console.log("Cor invalida");
}
