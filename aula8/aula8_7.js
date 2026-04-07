// Aula 8 - Exemplo 7 (sequencia de Fibonacci)
function gerarFibonacci(quantidade) {
  let a;
  let b;
  let proximo;
  let i;
  let sequencia;

  quantidade = parseInt(quantidade);
  a = 0;
  b = 1;
  sequencia = "";

  for (i = 1; i <= quantidade; i++) {
    sequencia += a;

    if (i < quantidade) {
      sequencia += ", ";
    }

    proximo = a + b;
    a = b;
    b = proximo;
  }

  return sequencia;
}

// Declaracao de variaveis
let quantidade;

// Entrada
quantidade = prompt("Digite a quantidade de termos:"); // 7

// Saida
console.log(gerarFibonacci(quantidade)); // 0, 1, 1, 2, 3, 5, 8
