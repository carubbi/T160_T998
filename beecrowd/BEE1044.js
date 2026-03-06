let entradaA;
let entradaB;
let A;
let B;

entradaA = prompt('Digite A: ');
entradaB = prompt('Digite B: ');

A = parseInt(entradaA);
B = parseInt(entradaB);

if ((A % B === 0) || (B % A === 0)) {
  console.log('Sao Multiplos');
} else {
  console.log('Nao sao Multiplos');
}
