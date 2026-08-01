// Declarar as variáveis
let entradaQuantidade: string | null;
let entradaNumero: string | null;
let quantidade: number;
let numero: number;
let dentro: number;
let fora: number;
let i: number;

// Entrada de dados
entradaQuantidade = prompt('Digite a quantidade de valores: ');

// Processamento dos dados
if (entradaQuantidade !== null) {
quantidade = parseInt(entradaQuantidade);
dentro = 0;
fora = 0;
entradaNumero = "";

for (i = 0; i < quantidade && entradaNumero !== null; i++) {
  entradaNumero = prompt('Digite um valor: ');

  if (entradaNumero !== null) {
    numero = parseInt(entradaNumero);

    if (numero >= 10 && numero <= 20) {
      dentro++;
    } else {
      fora++;
    }
  }
}

// Saída de dados
if (entradaNumero !== null) {
  console.log(`${dentro} in`);
  console.log(`${fora} out`);
}
}
