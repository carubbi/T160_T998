// Aula 8 - Exemplo 9 (geracao dos n primeiros numeros primos)
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

function gerarNPrimeirosPrimos(quantidade: number): string {
  let encontrados: number;
  let candidato: number;
  let resposta: string;

  encontrados = 0;
  candidato = 2;
  resposta = "";

  while (encontrados < quantidade) {
    if (ehPrimo(candidato)) {
      if (encontrados > 0) {
        resposta += ", ";
      }

      resposta += candidato;
      encontrados++;
    }

    candidato++;
  }

  return resposta;
}

// Declaracao de variaveis
let entradaQuantidade: string | null;
let quantidade: number;

// Entrada
entradaQuantidade = prompt("Digite quantos numeros primos deseja gerar:"); // 5

if (entradaQuantidade !== null) {
  quantidade = parseInt(entradaQuantidade);

  // Saida
  console.log(gerarNPrimeirosPrimos(quantidade)); // 2, 3, 5, 7, 11
}
