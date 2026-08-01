// Aula 7 - Exemplo 1 (while basico com contador)
// Declaracao de variaveis
let entradaQuantidade: string | null;
let i: number;
let quantidade: number;

// Entrada
entradaQuantidade = prompt("Digite a quantidade de iteracoes:"); // 3

// Processamento
if (entradaQuantidade !== null) {
  i = 0;
  quantidade = parseInt(entradaQuantidade);

  while (i < quantidade) {
    console.log(i);
    i++;
  }
}
