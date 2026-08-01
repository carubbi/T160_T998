// Aula 10 - Exemplo 4 (busca binaria)

// Retorna o indice do alvo no vetor ordenado, ou -1 se nao encontrar.
function buscaBinaria(arr: number[], alvo: number): number {
    let inicio: number;
    let fim: number;
    let meio: number;

    inicio = 0;
    fim = arr.length - 1;

    while (inicio <= fim) {
        meio = parseInt(String((inicio + fim) / 2));

        if (alvo === arr[meio]) {
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
let entrada: string | null;
let entradaValorProcurado: string | null;
let dados: string[];
let vetor: number[];
let valorProcurado: number;
let indice: number;
let i: number;

// Entrada
entrada = prompt("Digite os valores ordenados separados por espaco:"); // 7 12 23 45 89
entradaValorProcurado = prompt("Digite o valor procurado:"); // 45

// Processamento
if (entrada !== null && entradaValorProcurado !== null) {
    valorProcurado = parseInt(entradaValorProcurado);
    dados = entrada.split(" ");
    vetor = [];

    for (i = 0; i < dados.length; i++) {
        vetor[i] = parseInt(dados[i]);
    }

    indice = buscaBinaria(vetor, valorProcurado);

    // Saida
    if (indice !== -1) {
        console.log("Valor encontrado no indice " + indice);
    } else {
        console.log("Valor nao encontrado");
    }
}
