function ehPrimo(numero: number): boolean {
  let divisor: number;

  if (numero < 2) {
    return false;
  }

  for (divisor = 2; divisor < numero; divisor++) {
    if (numero % divisor === 0) {
      return false;
    }
  }

  return true;
}

let entradaT: string | null;
let entradaX: string | null;
let t: number;
let caso: number;
let x: number;
let mensagem: string;

entradaT = prompt('Digite a quantidade de casos: ');

if (entradaT !== null) {
  t = parseInt(entradaT);
  entradaX = "";

  for (caso = 1; caso <= t && entradaX !== null; caso++) {
    entradaX = prompt('Digite o numero: ');

    if (entradaX !== null) {
      x = parseInt(entradaX);

      if (ehPrimo(x)) {
        mensagem = `${entradaX} eh primo`;
      } else {
        mensagem = `${entradaX} nao eh primo`;
      }

      console.log(mensagem);
    }
  }
}
