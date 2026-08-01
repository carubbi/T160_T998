// Aula 7 - Exemplo 4 (while para pedir numeros ate digitar 0)
// Declaracao de variaveis
let entradaNumero: string | null;
let num: number;
let soma: number;

// Entrada
entradaNumero = prompt("Digite um numero (0 para encerrar):"); // 5

// Processamento
if (entradaNumero !== null) {
  num = parseInt(entradaNumero);
  soma = 0;

  while (num !== 0 && entradaNumero !== null) {
    soma += num;
    entradaNumero = prompt("Digite um numero (0 para encerrar):"); // 3, 2, 0

    if (entradaNumero !== null) {
      num = parseInt(entradaNumero);
    }
  }

  // Saida
  if (entradaNumero !== null) {
    console.log(soma);
  }
}
