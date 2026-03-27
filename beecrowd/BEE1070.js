// Declarar as variáveis
let entradaX;
let x;
let i;

// Entrada de dados
entradaX = prompt('Digite X: ');

// Processamento dos dados
x = parseInt(entradaX);

if (x % 2 === 0) {
  x++;
}

// Saída de dados
for (i = 0; i < 6; i++) {
  console.log(x);
  x += 2;
}
