// Aula 7 - Exemplo 9 (for basico com contador)
// Declaracao de variaveis
let entradaQuantidade: string | null;
let i: number;
let quantidade: number;

// Entrada
entradaQuantidade = prompt("Digite a quantidade de iteracoes:"); // 3

// Processamento
if (entradaQuantidade !== null) {
  quantidade = parseInt(entradaQuantidade);

  for (i = 0; i < quantidade; i++) {
    console.log(i);
  }
}
