// Declarar as variáveis
let entradaN;

function calcularFatorial(valor) {
  let numero;
  let resultado;
  let contador;

  numero = parseInt(valor);
  resultado = 1;

  for (contador = 1; contador <= numero; contador++) {
    resultado *= contador;
  }

  return resultado;
}

// Entrada de dados
entradaN = prompt('Digite N: ');

// Saída de dados
console.log(calcularFatorial(entradaN));

/*
// Opcao equivalente sem funcao:
let n;
let fatorial;
let i;

// Processamento dos dados
n = parseInt(entradaN);
fatorial = 1;

for (i = 1; i <= n; i++) {
  fatorial *= i;
}

// Saida de dados
console.log(fatorial);
*/
