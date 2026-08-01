let entradaA: string | null;
let entradaB: string | null;
let entradaC: string | null;
let a: number;
let b: number;
let c: number;

entradaA = prompt('Digite A: ');
entradaB = prompt('Digite B: ');
entradaC = prompt('Digite C: ');

if (entradaA !== null && entradaB !== null && entradaC !== null) {
  a = parseInt(entradaA);
  b = parseInt(entradaB);
  c = parseInt(entradaC);

  if (a >= b + c || b >= a + c || c >= a + b) {
    console.log('Invalido');
  } else if (a === b && b === c) {
    console.log('Valido-Equilatero');
    console.log('Retangulo: N');
  } else if (a !== b && a !== c && b !== c) {
    console.log('Valido-Escaleno');

    if (a * a === b * b + c * c || b * b === a * a + c * c || c * c === a * a + b * b) {
      console.log('Retangulo: S');
    } else {
      console.log('Retangulo: N');
    }
  } else {
    console.log('Valido-Isoceles');

    if (a * a === b * b + c * c || b * b === a * a + c * c || c * c === a * a + b * b) {
      console.log('Retangulo: S');
    } else {
      console.log('Retangulo: N');
    }
  }
}
