// Aula 7 - Exemplo 6 (do...while para pedir um numero positivo)
// Declaracao de variaveis
let entradaNumero: string | null;
let num: number;

// Entrada
entradaNumero = prompt("Digite um numero positivo:"); // -2

// Processamento
if (entradaNumero !== null) {
  num = parseInt(entradaNumero);

  do {
    if (num <= 0) {
      console.log("Numero invalido");
      entradaNumero = prompt("Digite um numero positivo:"); // 0, 5

      if (entradaNumero !== null) {
        num = parseInt(entradaNumero);
      }
    }
  } while (num <= 0 && entradaNumero !== null);

  // Saida
  if (entradaNumero !== null) {
    console.log("Numero valido");
  }
}
