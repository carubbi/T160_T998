// Aula 10 - Exemplo 3 (busca linear)

function buscaLinear(valores, valorBusca) {
    let i;
    let indice;

    indice = -1;

    for (i = 0; i < valores.length; i++) {
        if (valores[i] == valorBusca) {
            indice = i;
            break;
        }
    }

    return indice;
}

// Declaracao de variaveis
let entrada;
let dados;
let valores;
let valorBusca;
let indice;
let i;

// Entrada
entrada = prompt("Digite os valores separados por espaco:"); // 12 45 7 89 23
valorBusca = parseInt(prompt("Digite o valor procurado:")); // 7

// Processamento
dados = entrada.split(" ");
valores = [];

for (i = 0; i < dados.length; i++) {
    valores[i] = parseInt(dados[i]);
}

indice = buscaLinear(valores, valorBusca);

// Saida
if (indice != -1) {
    console.log("Valor encontrado no indice " + indice);
} else {
    console.log("Valor nao encontrado");
}
