let entradaA;
let entradaB;
let entradaC;
let A;
let B;
let C;
let MEDIA;

entradaA = prompt('Digite A: ');
entradaB = prompt('Digite B: ');
entradaC = prompt('Digite C: ');

A = parseFloat(entradaA);
B = parseFloat(entradaB);
C = parseFloat(entradaC);
MEDIA = ((A * 2) + (B * 3) + (C * 5)) / 10;

console.log('MEDIA = ' + MEDIA.toFixed(1));
