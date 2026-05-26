// Aula 10 - Exemplo 5 (bubble sort)

function bubbleSort(arr) {
    let i;
    let j;
    let flag;

    comparacoes = 0;
    trocas = 0;

    for (i = 0; i < arr.length - 1; i++) {
        flag = false;

        for (j = 0; j < arr.length - 1 - i; j++) {
            comparacoes++;

            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                trocas++;
                flag = true;
            }
        }

        if (!flag) {
            break;
        }
    }
}

// Declaracao de variaveis
let entrada;
let dados;
let vetor;
let comparacoes;
let trocas;
let i;

// Entrada
entrada = prompt("Digite os valores separados por espaco:"); // 20 35 18 8 14 41 3 39

// Processamento
dados = entrada.split(" ");
vetor = [];

for (i = 0; i < dados.length; i++) {
    vetor[i] = parseInt(dados[i]);
}

// Saida antes da ordenacao
console.log("Vetor original: " + vetor);

// Processamento: ordenacao no proprio vetor
bubbleSort(vetor);

// Saida depois da ordenacao
console.log("Vetor ordenado: " + vetor);
console.log("Total de comparacoes: " + comparacoes);
console.log("Total de trocas: " + trocas);
