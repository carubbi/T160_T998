// Aula 10 - Exemplo 1 (troca de posicoes)

// Troca dois valores de posicao no vetor.
function trocarValores(arr: number[], idx1: number, idx2: number): void {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// Declaracao de variaveis
let entrada: string | null;
let dados: string[];
let vetor: number[];
let i: number;

// Entrada
entrada = prompt("Digite os valores separados por espaco:"); // 12 45 7 89 23

// Processamento
if (entrada !== null) {
    dados = entrada.split(" ");

    vetor = [];

    for (i = 0; i < dados.length; i++) {
        vetor[i] = parseInt(dados[i]);
    }

    // Saida antes da troca
    console.log("Antes da troca:");
    console.log(vetor);

    // Processamento: troca primeiro com ultimo
    trocarValores(vetor, 0, vetor.length - 1);

    // Saida depois da troca
    console.log("Depois da troca:");
    console.log(vetor);
}
