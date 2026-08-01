// Aula 8 - Exemplo 4 (troca de valores)
// Declaracao de variaveis
let entradaA: string | null;
let entradaB: string | null;
let a: number;
let b: number;
let temporaria: number;

// Entrada
entradaA = prompt("Digite o valor de a:"); // 10
entradaB = prompt("Digite o valor de b:"); // 25

// Processamento
if (entradaA !== null && entradaB !== null) {
  a = parseFloat(entradaA);
  b = parseFloat(entradaB);

  temporaria = a;
  a = b;
  b = temporaria;

  // Saida
  console.log(a); // 25
  console.log(b); // 10
}
