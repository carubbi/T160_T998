function calcularFatorial(numero: number): number {
  let resultado: number;
  let contador: number;

  resultado = 1;

  for (contador = 1; contador <= numero; contador++) {
    resultado *= contador;
  }

  return resultado;
}

let entradaN: string | null;
let n: number;

entradaN = prompt('Digite N: ');

if (entradaN !== null) {
  n = parseInt(entradaN);
  console.log(calcularFatorial(n));
}
