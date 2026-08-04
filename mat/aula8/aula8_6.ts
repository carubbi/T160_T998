// Aula 8 - Exemplo 6 (fatorial)
function calcularFatorial(n: number): number {
  let fatorial: number;
  let i: number;

  fatorial = 1;

  for (i = 1; i <= n; i++) {
    fatorial = fatorial * i;
  }

  return fatorial;
}

// Declaracao de variaveis
let entradaNumero: string | null;
let numero: number;

// Entrada
entradaNumero = prompt("Digite um numero para calcular o fatorial:"); // 5

if (entradaNumero !== null) {
  numero = parseInt(entradaNumero);

  // Saida
  console.log(calcularFatorial(numero)); // 120
}
