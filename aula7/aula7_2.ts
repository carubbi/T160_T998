// Aula 7 - Exemplo 2 (while para pedir um numero positivo)
// Declaracao de variaveis
let entradaNumero: string | null;
let num: number;

// Entrada
entradaNumero = prompt("Digite um numero positivo:"); // -3

// Processamento
if (entradaNumero !== null) {
  num = parseInt(entradaNumero);

  while (num <= 0 && entradaNumero !== null) {
    console.log("Numero invalido");
    entradaNumero = prompt("Digite um numero positivo:"); // 0, 7

    if (entradaNumero !== null) {
      num = parseInt(entradaNumero);
    }
  }

  // Saida
  if (entradaNumero !== null) {
    console.log("Numero valido");
  }
}
