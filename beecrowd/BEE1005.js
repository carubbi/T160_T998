let entradaA;
let entradaB;
let A;
let B;
let MEDIA;

entradaA = prompt('Digite A: ');
entradaB = prompt('Digite B: ');

A = parseFloat(entradaA);
B = parseFloat(entradaB);
MEDIA = ((A * 3.5) + (B * 7.5)) / 11;

console.log('MEDIA = ' + MEDIA.toFixed(5));
