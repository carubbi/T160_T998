// Aula 7 - Exemplo 7 (do...while para pedir nota ate ela estar valida)
// Declaracao de variaveis
let entradaNota: string | null;
let nota: number;

// Entrada
entradaNota = prompt("Digite uma nota de 0 a 10:"); // 12

// Processamento
if (entradaNota !== null) {
  nota = parseFloat(entradaNota);

  do {
    if (nota < 0 || nota > 10) {
      console.log("Nota invalida");
      entradaNota = prompt("Nota invalida. Digite uma nota de 0 a 10:"); // -1, 8

      if (entradaNota !== null) {
        nota = parseFloat(entradaNota);
      }
    }
  } while ((nota < 0 || nota > 10) && entradaNota !== null);

  // Saida
  if (entradaNota !== null) {
    console.log(`Nota valida: ${nota}`);
  }
}
