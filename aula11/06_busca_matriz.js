// Aula 11 - Exemplo 6 (busca linear em matriz)

// Declaracao de variaveis
let matriz;
let entrada;
let dados;
let nLinhas;
let nColunas;
let valorProcurado;
let encontrado;
let linhaEncontrada;
let colunaEncontrada;
let i;
let j;
let indice;

// Quantidade de linhas da matriz
nLinhas = 3;

// Inicializacao
matriz = [];
encontrado = false;
linhaEncontrada = -1;
colunaEncontrada = -1;
indice = 0;

// Entrada
entrada = prompt("Digite todos os valores da matriz separados por espaco:"); // exemplo: 12 45 7 89 23 14 5 91 30
dados = entrada.split(" ");
nColunas = parseInt(dados.length / nLinhas);

for (i = 0; i < nLinhas; i++) {
    matriz[i] = [];

    for (j = 0; j < nColunas; j++) {
        matriz[i][j] = parseInt(dados[indice]);
        indice++;
    }
}

valorProcurado = parseInt(prompt("Digite o valor procurado:")); // exemplo: 23

// Processamento
for (i = 0; i < matriz.length; i++) {
    for (j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] == valorProcurado) {
            encontrado = true;
            linhaEncontrada = i;
            colunaEncontrada = j;
        }
    }
}

// Saida
if (encontrado) {
    console.log("Valor encontrado");
    console.log("Linha: " + linhaEncontrada);
    console.log("Coluna: " + colunaEncontrada);
} else {
    console.log("Valor nao encontrado");
}
