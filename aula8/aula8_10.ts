// Aula 8 - Exemplo 10 (Beecrowd 1153 - Fatorial Simples)
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
let entrada: string | null;
let numero: number;

// Entrada
entrada = prompt("Digite um numero:"); // 5

if (entrada !== null) {
  numero = parseInt(entrada);

  // Saida
  console.log(calcularFatorial(numero));
}
