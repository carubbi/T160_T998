// Aula 10 - Exemplo 6 (ordenar e buscar)

function bubbleSort(arr) {
    let i;
    let j;
    let flag;

    for (i = 0; i < arr.length - 1; i++) {
        flag = false;

        for (j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                flag = true;
            }
        }

        if (!flag) {
            break;
        }
    }
}

function buscaBinaria(vetor, alvo) {
    let inicio;
    let fim;
    let meio;

    inicio = 0;
    fim = vetor.length - 1;

    while (inicio <= fim) {
        meio = parseInt((inicio + fim) / 2);

        if (alvo == vetor[meio]) {
            return meio;
        } else if (alvo > vetor[meio]) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }

    return -1;
}

// Declaracao de variaveis
let entrada;
let dados;
let vetor;
let vetorOrdenado;
let valor;
let alvo;
let indice;
let i;

// Entrada
entrada = prompt("Digite os valores separados por espaco:"); // 12 45 7 89 23
alvo = parseInt(prompt("Digite o valor procurado:")); // 45

// Processamento
dados = entrada.split(" ");

vetor = [];
vetorOrdenado = [];

for (i = 0; i < dados.length; i++) {
    valor = parseInt(dados[i]);

    vetor[i] = valor;
    vetorOrdenado[i] = valor;
}

bubbleSort(vetorOrdenado);
indice = buscaBinaria(vetorOrdenado, alvo);

// Saida
console.log("Vetor original: " + vetor);
console.log("Vetor ordenado: " + vetorOrdenado);

if (indice != -1) {
    console.log("Valor encontrado no indice " + indice + " do vetor ordenado");
} else {
    console.log("Valor nao encontrado");
}
