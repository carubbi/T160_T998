// Declarar as variaveis
let entradaX: string | null;
let entradaY: string | null;
let x: number;
let y: number;

entradaX = "";
entradaY = "";

while (entradaX !== null && entradaY !== null) {
  entradaX = prompt('Digite X: ');
  entradaY = prompt('Digite Y: ');

  if (entradaX !== null && entradaY !== null) {
    x = parseInt(entradaX);
    y = parseInt(entradaY);

    if (x === y) {
      break;
    }

    if (x < y) {
      console.log('Crescente');
    } else {
      console.log('Decrescente');
    }
  }
}
