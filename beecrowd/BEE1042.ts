// Declarar as variaveis
let entradaA: string | null;
let entradaB: string | null;
let entradaC: string | null;
let a: number;
let b: number;
let c: number;
let temporaria: number;

// Entrada de dados
entradaA = prompt('Digite A: ');
entradaB = prompt('Digite B: ');
entradaC = prompt('Digite C: ');

if (entradaA !== null && entradaB !== null && entradaC !== null) {
  a = parseInt(entradaA);
  b = parseInt(entradaB);
  c = parseInt(entradaC);

  if (a > b) {
    temporaria = a;
    a = b;
    b = temporaria;
  }

  if (a > c) {
    temporaria = a;
    a = c;
    c = temporaria;
  }

  if (b > c) {
    temporaria = b;
    b = c;
    c = temporaria;
  }

  // Saida de dados
  console.log(a);
  console.log(b);
  console.log(c);
  console.log('');
  console.log(entradaA);
  console.log(entradaB);
  console.log(entradaC);
}
