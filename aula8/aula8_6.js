// Aula 8 - Exemplo 6 (fatorial)
function calcularFatorial(n) {
  let fatorial;
  let i;

  n = parseInt(n);
  fatorial = 1;

  for (i = 1; i <= n; i++) {
    fatorial = fatorial * i;
  }

  return fatorial;
}

// Declaracao de variaveis
let numero;

// Entrada
numero = prompt("Digite um numero para calcular o fatorial:"); // 5

// Saida
console.log(calcularFatorial(numero)); // 120
