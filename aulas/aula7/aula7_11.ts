// Aula 7 - Exemplo 11 (for para gerar a tabuada)
// Declaracao de variaveis
let entradaNumero: string | null;
let num: number;
let fator: number;
let prod: number;
let tabuada: string;

// Entrada
entradaNumero = prompt("Digite o numero da tabuada:"); // 4

// Processamento
if (entradaNumero !== null) {
  num = parseInt(entradaNumero);
  tabuada = "";

  for (fator = 1; fator <= 10; fator++) {
    prod = num * fator;
    tabuada += `${num} x ${fator} = ${prod}\n`;
  }

  // Saida
  console.log(tabuada);
}
