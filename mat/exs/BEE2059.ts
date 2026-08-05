let entradaP: string | null;
let entradaJ1: string | null;
let entradaJ2: string | null;
let entradaR: string | null;
let entradaA: string | null;
let p: number;
let j1: number;
let j2: number;
let r: number;
let a: number;
let soma: number;

entradaP = prompt('Digite par ou impar: ');
entradaJ1 = prompt('Digite o valor do jogador 1: ');
entradaJ2 = prompt('Digite o valor do jogador 2: ');
entradaR = prompt('Digite se jogador 1 roubou: ');
entradaA = prompt('Digite se jogador 2 acusou: ');

if (
  entradaP !== null &&
  entradaJ1 !== null &&
  entradaJ2 !== null &&
  entradaR !== null &&
  entradaA !== null
) {
  p = parseInt(entradaP);
  j1 = parseInt(entradaJ1);
  j2 = parseInt(entradaJ2);
  r = parseInt(entradaR);
  a = parseInt(entradaA);
  soma = j1 + j2;

  if (r === 1 && a === 1) {
    console.log('Jogador 2 ganha!');
  } else if (r === 1 && a === 0) {
    console.log('Jogador 1 ganha!');
  } else if (r === 0 && a === 1) {
    console.log('Jogador 1 ganha!');
  } else if ((soma % 2 === 0 && p === 1) || (soma % 2 !== 0 && p === 0)) {
    console.log('Jogador 1 ganha!');
  } else {
    console.log('Jogador 2 ganha!');
  }
}
