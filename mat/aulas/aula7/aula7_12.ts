// Aula 7 - Exemplo 12 (for para somar n numeros)
// Declaracao de variaveis
let entradaQuantidade: string | null;
let entradaNumero: string | null;
let quantidade: number;
let i: number;
let num: number;
let soma: number;

// Entrada
entradaQuantidade = prompt("Digite quantos numeros deseja somar:"); // 3

// Processamento
if (entradaQuantidade !== null) {
  quantidade = parseInt(entradaQuantidade);
  entradaNumero = "";
  soma = 0;

  for (i = 1; i <= quantidade && entradaNumero !== null; i++) {
    entradaNumero = prompt(`Digite o ${i}o numero:`); // 10, 20, 5

    if (entradaNumero !== null) {
      num = parseInt(entradaNumero);
      soma += num;
    }
  }

  // Saida
  if (entradaNumero !== null) {
    console.log(soma);
  }
}
