// Declarar as variaveis
let entradaNota: string | null;
let nota: number;
let somaNotas: number;
let quantidadeValidas: number;

somaNotas = 0;
quantidadeValidas = 0;
entradaNota = "";

while (quantidadeValidas < 2 && entradaNota !== null) {
  entradaNota = prompt('Digite uma nota: ');

  if (entradaNota !== null) {
    nota = parseFloat(entradaNota);

    if (nota >= 0 && nota <= 10) {
      somaNotas += nota;
      quantidadeValidas++;
    } else {
      console.log('nota invalida');
    }
  }
}

if (entradaNota !== null) {
  console.log(`media = ${(somaNotas / 2).toFixed(2)}`);
}
