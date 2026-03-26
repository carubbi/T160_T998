// Declarar as variáveis
let entradaA;
let entradaB;
let entradaC;
let a;
let b;
let c;

// Entrada de dados
entradaA = prompt('Digite A: ');
entradaB = prompt('Digite B: ');
entradaC = prompt('Digite C: ');

// Processamento e saída de dados
a = parseInt(entradaA);
b = parseInt(entradaB);
c = parseInt(entradaC);

/*
Solução com uma única saída de dados:
let saida;

if (a >= b + c || b >= a + c || c >= a + b) {
  saida = 'Invalido';
} else if (a === b && b === c) {
  saida = 'Valido-Equilatero';
  saida += '\nRetangulo: N';
} else if (a !== b && a !== c && b !== c) {
  saida = 'Valido-Escaleno';

  if (a * a === b * b + c * c || b * b === a * a + c * c || c * c === a * a + b * b) {
    saida += '\nRetangulo: S';
  } else {
    saida += '\nRetangulo: N';
  }
} else {
  saida = 'Valido-Isoceles';

  if (a * a === b * b + c * c || b * b === a * a + c * c || c * c === a * a + b * b) {
    saida += '\nRetangulo: S';
  } else {
    saida += '\nRetangulo: N';
  }
}

console.log(saida);
*/

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
