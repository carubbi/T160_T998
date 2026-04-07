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

/*
Opcao equivalente usando variavel temporaria de forma direta:
let a;
let b;
let temp;

a = prompt("Digite o valor de a:"); // 10
b = prompt("Digite o valor de b:"); // 25

a = parseFloat(a);
b = parseFloat(b);

temp = a;
a = b;
b = temp;

console.log(a); // 25
console.log(b); // 10
*/
