// Aula 10 - Exemplo 1 (troca de posicoes)

function trocarValores(arr) {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
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
trocarValores(valores);

// Saida depois da troca
console.log("Depois da troca:");
console.log(valores);
