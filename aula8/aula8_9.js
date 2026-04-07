// Aula 8 - Exemplo 9 (geracao dos n primeiros numeros primos)
function ehPrimo(numero) {
  let divisor;

  numero = parseInt(numero);

  if (numero < 2) {
    return false;
  }

  for (divisor = 2; divisor < numero; divisor++) {
    if (numero % divisor == 0) {
      return false;
    }
  }

  return true;
}

function gerarNPrimeirosPrimos(quantidade) {
  let encontrados;
  let candidato;
  let resposta;

  quantidade = parseInt(quantidade);
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
let quantidade;

// Entrada
quantidade = prompt("Digite quantos numeros primos deseja gerar:"); // 5

// Saida
console.log(gerarNPrimeirosPrimos(quantidade)); // 2, 3, 5, 7, 11
