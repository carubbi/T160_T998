// Aula 10 - Exemplo 1 (troca de posicoes)

function trocarValores(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// Declaracao de variaveis
let entrada;
let dados;
let valores;
let i;

// Entrada
entrada = prompt("Digite os valores separados por espaco:"); // 12 45 7 89 23

// Processamento
dados = entrada.split(" ");

valores = [];

for (i = 0; i < dados.length; i++) {
    valores[i] = parseInt(dados[i]);
}

// Saida antes da troca
console.log("Antes da troca:");
console.log(valores);

// Processamento: troca primeiro com ultimo
trocarValores(valores, 0, valores.length - 1);

// Saida depois da troca
console.log("Depois da troca:");
console.log(valores);
