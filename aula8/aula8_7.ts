// Aula 8 - Exemplo 7 (sequencia de Fibonacci)
function gerarFibonacci(quantidade: number): string {
  let a: number;
  let b: number;
  let proximo: number;
  let i: number;
  let sequencia: string;

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
let entradaQuantidade: string | null;
let quantidade: number;

// Entrada
entradaQuantidade = prompt("Digite a quantidade de termos:"); // 7

if (entradaQuantidade !== null) {
  quantidade = parseInt(entradaQuantidade);

  // Saida
  console.log(gerarFibonacci(quantidade)); // 0, 1, 1, 2, 3, 5, 8
}
