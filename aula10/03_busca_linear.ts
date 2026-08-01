// Aula 10 - Exemplo 3 (busca linear)

// Retorna o indice do valor no vetor, ou -1 se nao encontrar.
function buscaLinear(arr: number[], alvo: number): number {
    let i: number;
    let indice: number;

    indice = -1;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === alvo) {
            indice = i;
            break;
        }
    }

    return indice;
}

// Declaracao de variaveis
let entrada: string | null;
let entradaValorProcurado: string | null;
let dados: string[];
let valores: number[];
let valorProcurado: number;
let indice: number;
let i: number;

// Entrada
entrada = prompt("Digite os valores separados por espaco:"); // 12 45 7 89 23
entradaValorProcurado = prompt("Digite o valor procurado:"); // 7

// Processamento
if (entrada !== null && entradaValorProcurado !== null) {
    valorProcurado = parseInt(entradaValorProcurado);
    dados = entrada.split(" ");
    valores = [];

    for (i = 0; i < dados.length; i++) {
        valores[i] = parseInt(dados[i]);
    }

    indice = buscaLinear(valores, valorProcurado);

    // Saida
    if (indice !== -1) {
        console.log("Valor encontrado no indice " + indice);
    } else {
        console.log("Valor nao encontrado");
    }
}
