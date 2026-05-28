// Aula 10 - Exemplo 6 (ordenar e buscar)

// Ordena o vetor no proprio lugar pelo metodo da bolha.
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

// Retorna o indice do alvo no vetor ordenado, ou -1 se nao encontrar.
function buscaBinaria(arr, alvo) {
    let inicio;
    let fim;
    let meio;

    inicio = 0;
    fim = arr.length - 1;

    while (inicio <= fim) {
        meio = parseInt((inicio + fim) / 2);

        if (alvo == arr[meio]) {
            return meio;
        } else if (alvo > arr[meio]) {
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
let valorProcurado;
let indice;
let i;

// Entrada
entrada = prompt("Digite os valores separados por espaco:"); // 12 45 7 89 23
valorProcurado = parseInt(prompt("Digite o valor procurado:")); // 45

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
indice = buscaBinaria(vetorOrdenado, valorProcurado);

// Saida
console.log("Vetor original: " + vetor);
console.log("Vetor ordenado: " + vetorOrdenado);

if (indice != -1) {
    console.log("Valor encontrado no indice " + indice + " do vetor ordenado");
} else {
    console.log("Valor nao encontrado");
}
