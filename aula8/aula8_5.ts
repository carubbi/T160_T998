// Aula 8 - Exemplo 5 (contagem, soma e multiplicacao)
function calcularContagem(n: number): number {
  let contador: number;
  let i: number;

  contador = 0;

  for (i = 1; i <= n; i++) {
    contador++;
  }

  return contador;
}

function calcularSoma(n: number): number {
  let soma: number;
  let i: number;

  soma = 0;

  for (i = 1; i <= n; i++) {
    soma = soma + i;
  }

  return soma;
}

function calcularProduto(n: number): number {
  let produto: number;
  let i: number;

  produto = 1;

  for (i = 1; i <= n; i++) {
    produto = produto * i;
  }

  return produto;
}

// Declaracao de variaveis
let entradaN: string | null;
let n: number;
let contadorFinal: number;
let somaFinal: number;
let produtoFinal: number;

// Entrada
entradaN = prompt("Digite o valor de n:"); // 4

// Processamento
if (entradaN !== null) {
  n = parseInt(entradaN);
  contadorFinal = calcularContagem(n);
  somaFinal = calcularSoma(n);
  produtoFinal = calcularProduto(n);

  // Saida
  console.log("Contagem: " + contadorFinal);
  console.log("Soma: " + somaFinal);
  console.log("Produto: " + produtoFinal);
}
