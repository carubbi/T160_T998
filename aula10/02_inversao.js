// Aula 10 - Exemplo 2 (inversao de vetor)

function inverterNoProprioVetor(arr) {
    let n;
    let meio;
    let i;

    n = arr.length;
    meio = parseInt(n / 2);

    for (i = 0; i < meio; i++) {
        [arr[i], arr[n - 1 - i]] = [arr[n - 1 - i], arr[i]];
    }
}

// Declaracao de variaveis
let entrada;
let dados;
let vetor;
let i;

// Entrada
entrada = prompt("Digite os valores separados por espaco:"); // 12 45 7 89 23

// Processamento
dados = entrada.split(" ");
vetor = [];

for (i = 0; i < dados.length; i++) {
    vetor[i] = parseInt(dados[i]);
}

// Saida antes da inversao
console.log("Vetor original: " + vetor);

// Processamento: inversao no proprio vetor
inverterNoProprioVetor(vetor);

// Saida depois da inversao
console.log("Vetor invertido: " + vetor);
