// Declarar as variaveis
let entradaCodigo: string | null;
let codigo: number;
let alcool: number;
let gasolina: number;
let diesel: number;

alcool = 0;
gasolina = 0;
diesel = 0;
entradaCodigo = "";

while (entradaCodigo !== null) {
  entradaCodigo = prompt('Digite o codigo: ');

  if (entradaCodigo !== null) {
    codigo = parseInt(entradaCodigo);

    if (codigo === 1) {
      alcool++;
    } else if (codigo === 2) {
      gasolina++;
    } else if (codigo === 3) {
      diesel++;
    } else if (codigo === 4) {
      break;
    }
  }
}

if (entradaCodigo !== null) {
  console.log('MUITO OBRIGADO');
  console.log(`Alcool: ${alcool}`);
  console.log(`Gasolina: ${gasolina}`);
  console.log(`Diesel: ${diesel}`);
}
