// Aula 8 - Exemplo 4 (troca de valores)
function trocarValores(a, b) {
  let aux;

  a = parseFloat(a);
  b = parseFloat(b);

  aux = a;
  a = b;
  b = aux;

  return [a, b];
}

// Declaracao de variaveis
let resultado;
let novoA;
let novoB;

// Entrada
novoA = prompt("Digite o valor de a:"); // 10
novoB = prompt("Digite o valor de b:"); // 25

// Processamento
resultado = trocarValores(novoA, novoB);
[novoA, novoB] = resultado;

// Saida
console.log(novoA); // 25
console.log(novoB); // 10
