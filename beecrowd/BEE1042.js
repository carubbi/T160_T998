// Declarar as variáveis
let entradaA;
let entradaB;
let entradaC;
let r;
let a;
let b;
let c;

function ord(valorA, valorB, valorC) {
  let a;
  let b;
  let c;

  function troca(x, y) {
    return [y, x];
  }

  a = parseInt(valorA);
  b = parseInt(valorB);
  c = parseInt(valorC);

  if (a > b) {
    [a, b] = troca(a, b);
  }

  if (a > c) {
    [a, c] = troca(a, c);
  }

  if (b > c) {
    [b, c] = troca(b, c);
  }

  return [a, b, c];
}

// Entrada de dados
entradaA = prompt('Digite A: ');
entradaB = prompt('Digite B: ');
entradaC = prompt('Digite C: ');

// Saida de dados
r = ord(entradaA, entradaB, entradaC);
[a, b, c] = r;

console.log(a);
console.log(b);
console.log(c);
console.log('');
console.log(entradaA);
console.log(entradaB);
console.log(entradaC);

/*
// Opcao equivalente sem funcao:
let a;
let b;
let c;
let t;

a = parseInt(entradaA);
b = parseInt(entradaB);
c = parseInt(entradaC);

if (a > b) {
  t = a;
  a = b;
  b = t;
}

if (a > c) {
  t = a;
  a = c;
  c = t;
}

if (b > c) {
  t = b;
  b = c;
  c = t;
}

console.log(a);
console.log(b);
console.log(c);
console.log('');
console.log(entradaA);
console.log(entradaB);
console.log(entradaC);
*/
