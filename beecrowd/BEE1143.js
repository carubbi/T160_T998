// Declarar as variáveis
let entrada;

function qc(valor) {
  let n;
  let i;
  let out;

  n = parseInt(valor);
  out = '';

  for (i = 1; i <= n; i++) {
    out += `${i} ${i ** 2} ${i ** 3}`;

    if (i < n) {
      out += '\n';
    }
  }

  return out;
}

// Entrada de dados
entrada = prompt('Digite N: ');

// Saida de dados
console.log(qc(entrada));

/*
// Opcao equivalente sem funcao:
let n;
let i;
let out;

n = parseInt(entrada);
out = '';

for (i = 1; i <= n; i++) {
  out += `${i} ${i ** 2} ${i ** 3}`;

  if (i < n) {
    out += '\n';
  }
}

console.log(out);
*/
