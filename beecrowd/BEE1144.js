// Declarar as variáveis
let entrada;

function seq(valor) {
  let n;
  let i;
  let q;
  let c;
  let out;

  n = parseInt(valor);
  out = '';

  for (i = 1; i <= n; i++) {
    q = i ** 2;
    c = i ** 3;

    out += `${i} ${q} ${c}\n`;
    out += `${i} ${q + 1} ${c + 1}`;

    if (i < n) {
      out += '\n';
    }
  }

  return out;
}

// Entrada de dados
entrada = prompt('Digite N: ');

// Saida de dados
console.log(seq(entrada));

/*
// Opcao equivalente sem funcao:
let n;
let i;
let q;
let c;
let out;

n = parseInt(entrada);
out = '';

for (i = 1; i <= n; i++) {
  q = i ** 2;
  c = i ** 3;

  out += `${i} ${q} ${c}\n`;
  out += `${i} ${q + 1} ${c + 1}`;

  if (i < n) {
    out += '\n';
  }
}

console.log(out);
*/
