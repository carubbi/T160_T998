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

    if (x === 0 || y === 0) {
      break;
    }

    if (x > 0 && y > 0) {
      console.log('primeiro');
    } else if (x < 0 && y > 0) {
      console.log('segundo');
    } else if (x < 0 && y < 0) {
      console.log('terceiro');
    } else {
      console.log('quarto');
    }
  }
}
