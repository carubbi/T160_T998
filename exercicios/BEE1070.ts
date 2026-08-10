// Declarar as variáveis
let entradaX: string | null;
let x: number;
let i: number;

// Entrada de dados
entradaX = prompt('Digite X: ');

// Processamento dos dados
if (entradaX !== null) {
x = parseInt(entradaX);

if (x % 2 === 0) {
  x++;
}

// Saída de dados
for (i = 0; i < 6; i++) {
  console.log(x);
  x += 2;
}
}
