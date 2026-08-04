// Aula 10 - Exemplo 5 (bubble sort)

// Ordena o vetor no proprio lugar e conta comparacoes e trocas.
function bubbleSort(arr: number[]): void {
    let i: number;
    let j: number;
    let flag: boolean;

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
let entrada: string | null;
let dados: string[];
let vetor: number[];
let comparacoes: number;
let trocas: number;
let i: number;

// Entrada
entrada = prompt("Digite os valores separados por espaco:"); // 20 35 18 8 14 41 3 39

// Processamento
if (entrada !== null) {
    dados = entrada.split(" ");
    vetor = [];

    for (i = 0; i < dados.length; i++) {
        vetor[i] = parseInt(dados[i]);
    }

    // Saida antes da ordenacao
    console.log("Vetor original: " + vetor);

    // Processamento: ordenacao no proprio vetor
    comparacoes = 0;
    trocas = 0;
    bubbleSort(vetor);

    // Saida depois da ordenacao
    console.log("Vetor ordenado: " + vetor);
    console.log("Total de comparacoes: " + comparacoes);
    console.log("Total de trocas: " + trocas);
}
