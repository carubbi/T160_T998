// Aula 10 - Exemplo 2 (inversao de vetor)

// Cria e retorna um novo vetor com os valores em ordem inversa.
function criarVetorInvertido(arr: number[]): number[] {
    let invertido: number[];
    let i: number;
    let j: number;

    invertido = [];
    j = arr.length - 1;

    for (i = 0; i < arr.length; i++) {
        invertido[j] = arr[i];
        j--;
    }

    return invertido;
}

// Inverte a ordem dos valores dentro do mesmo vetor.
function inverterNoMesmoVetor(arr: number[]): void {
    let n: number;
    let meio: number;
    let i: number;

    n = arr.length;
    meio = parseInt(String(n / 2));

    for (i = 0; i < meio; i++) {
        [arr[i], arr[n - 1 - i]] = [arr[n - 1 - i], arr[i]];
    }
}

// Declaracao de variaveis
let entrada: string | null;
let dados: string[];
let vetor: number[];
let copia: number[];
let valor: number;
let i: number;

// Entrada
entrada = prompt("Digite os valores separados por espaco:"); // 12 45 7 89 23

// Processamento
if (entrada !== null) {
    dados = entrada.split(" ");
    vetor = [];
    copia = [];

    for (i = 0; i < dados.length; i++) {
        valor = parseInt(dados[i]);

        vetor[i] = valor;
        copia[i] = valor;
    }

    // Saida antes da inversao
    console.log("Vetor original: " + vetor);

    // Processamento: inversao usando outro vetor
    console.log("Invertido em outro vetor: " + criarVetorInvertido(vetor));

    // Processamento: inversao no proprio vetor, usando a copia
    inverterNoMesmoVetor(copia);

    // Saida depois da inversao
    console.log("Invertido no proprio vetor: " + copia);
}
