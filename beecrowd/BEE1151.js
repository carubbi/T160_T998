// Declarar as variáveis
let entrada;

function fib(valor) {
  let n;
  let a;
  let b;
  let prox;
  let i;
  let out;

  n = parseInt(valor);
  a = 0;
  b = 1;
  out = '';

  for (i = 1; i <= n; i++) {
    out += a;

    if (i < n) {
      out += ' ';
    }

    prox = a + b;
    a = b;
    b = prox;
  }

  return out;
}

// Entrada de dados
entrada = prompt('Digite a quantidade de termos: ');

// Saida de dados
console.log(fib(entrada));

/*
// Opcao equivalente sem funcao:
let n;
let a;
let b;
let prox;
let i;
let out;

n = parseInt(entrada);
a = 0;
b = 1;
out = '';

for (i = 1; i <= n; i++) {
  out += a;

  if (i < n) {
    out += ' ';
  }

  prox = a + b;
  a = b;
  b = prox;
}

console.log(out);
*/
