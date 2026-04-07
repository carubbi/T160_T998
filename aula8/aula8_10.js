// Aula 8 - Exemplo 10 (Beecrowd 1153 - Fatorial Simples)
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

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

console.log(calcularFatorial(input));
