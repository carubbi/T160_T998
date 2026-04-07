// Aula 8 - Exemplo 5 (contagem, soma e multiplicacao)
function calcularResumo(n) {
  let contador;
  let soma;
  let produto;
  let i;

  n = parseInt(n);
  contador = 0;
  soma = 0;
  produto = 1;

  for (i = 1; i <= n; i++) {
    contador++;
    soma = soma + i;
    produto = produto * i;
  }

  return [contador, soma, produto];
}

// Declaracao de variaveis
let resultado;
let contadorFinal;
let somaFinal;
let produtoFinal;
let n;

// Entrada
n = prompt("Digite o valor de n:"); // 4

// Processamento
resultado = calcularResumo(n);
[contadorFinal, somaFinal, produtoFinal] = resultado;

// Saida
console.log("Contagem: " + contadorFinal);
console.log("Soma: " + somaFinal);
console.log("Produto: " + produtoFinal);
