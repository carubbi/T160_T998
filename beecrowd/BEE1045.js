// Declarar as variáveis
let entradaA;
let entradaB;
let entradaC;
let a;
let b;
let c;
let temp;

// Entrada de dados
entradaA = prompt('Digite A: ');
entradaB = prompt('Digite B: ');
entradaC = prompt('Digite C: ');

// Processamento dos dados
a = parseFloat(entradaA);
b = parseFloat(entradaB);
c = parseFloat(entradaC);

if (a < b) {
  temp = a;
  a = b;
  b = temp;
}

if (a < c) {
  temp = a;
  a = c;
  c = temp;
}

if (b < c) {
  temp = b;
  b = c;
  c = temp;
}

if (a >= b + c) {
  console.log('NAO FORMA TRIANGULO');
} else {
  if (a * a === b * b + c * c) {
    console.log('TRIANGULO RETANGULO');
  }

  if (a * a > b * b + c * c) {
    console.log('TRIANGULO OBTUSANGULO');
  }

  if (a * a < b * b + c * c) {
    console.log('TRIANGULO ACUTANGULO');
  }

  if (a === b && b === c) {
    console.log('TRIANGULO EQUILATERO');
  } else if (a === b || a === c || b === c) {
    console.log('TRIANGULO ISOSCELES');
  }
}

/*
Solução alternativa com saída única:
if (a >= b + c) {
  saida = 'NAO FORMA TRIANGULO';
} else {
  saida = '';

  if (a * a === b * b + c * c) {
    saida += 'TRIANGULO RETANGULO';
  }

  if (a * a > b * b + c * c) {
    if (saida !== '') {
      saida += '\n';
    }
    saida += 'TRIANGULO OBTUSANGULO';
  }

  if (a * a < b * b + c * c) {
    if (saida !== '') {
      saida += '\n';
    }
    saida += 'TRIANGULO ACUTANGULO';
  }

  if (a === b && b === c) {
    if (saida !== '') {
      saida += '\n';
    }
    saida += 'TRIANGULO EQUILATERO';
  } else if (a === b || a === c || b === c) {
    if (saida !== '') {
      saida += '\n';
    }
    saida += 'TRIANGULO ISOSCELES';
  }
}

// Saída de dados
console.log(saida);
*/
