// Aula 8 - Funcoes e algoritmos classicos

function somar(a: number, b: number): number {
  return a + b;
}

function mostrarMensagem(nome: string): void {
  let saudacao: string;

  saudacao = "Ola, " + nome;
  console.log(saudacao);
}

function calcularDobro(numero: number): number {
  return numero * 2;
}

function calcularContagem(n: number): number {
  let contador: number;
  let i: number;

  contador = 0;

  for (i = 1; i <= n; i++) {
    contador++;
  }

  return contador;
}

function calcularSoma(n: number): number {
  let soma: number;
  let i: number;

  soma = 0;

  for (i = 1; i <= n; i++) {
    soma = soma + i;
  }

  return soma;
}

function calcularProduto(n: number): number {
  let produto: number;
  let i: number;

  produto = 1;

  for (i = 1; i <= n; i++) {
    produto = produto * i;
  }

  return produto;
}

function calcularFatorial(n: number): number {
  let fatorial: number;
  let i: number;

  fatorial = 1;

  for (i = 1; i <= n; i++) {
    fatorial = fatorial * i;
  }

  return fatorial;
}

function gerarFibonacci(quantidade: number): string {
  let a: number;
  let b: number;
  let proximo: number;
  let i: number;
  let sequencia: string;

  a = 0;
  b = 1;
  sequencia = "";

  for (i = 1; i <= quantidade; i++) {
    sequencia += a;

    if (i < quantidade) {
      sequencia += ", ";
    }

    proximo = a + b;
    a = b;
    b = proximo;
  }

  return sequencia;
}

function decimalParaBinario(numero: number): string {
  let binario: string;
  let resto: number;

  if (numero === 0) {
    return "0";
  }

  binario = "";

  while (numero > 0) {
    resto = numero % 2;
    binario = resto + binario;
    numero = Math.trunc(numero / 2);
  }

  return binario;
}

function ehPrimo(numero: number): boolean {
  let divisor: number;

  if (numero < 2) {
    return false;
  }

  for (divisor = 2; divisor < numero; divisor++) {
    if (numero % divisor === 0) {
      return false;
    }
  }

  return true;
}

function gerarNPrimeirosPrimos(quantidade: number): string {
  let encontrados: number;
  let candidato: number;
  let resposta: string;

  encontrados = 0;
  candidato = 2;
  resposta = "";

  while (encontrados < quantidade) {
    if (ehPrimo(candidato)) {
      if (encontrados > 0) {
        resposta += ", ";
      }

      resposta += candidato;
      encontrados++;
    }

    candidato++;
  }

  return resposta;
}

// Declaracao de variaveis
let aluno: string;
let a: number;
let b: number;
let temporaria: number;
let contadorFinal: number;
let somaFinal: number;
let produtoFinal: number;

console.log("=== 1) Funcao basica ===");
console.log(somar(4, 7));

console.log("\n=== 2) Escopo em funcoes ===");
aluno = "Ana";
mostrarMensagem(aluno);
console.log(aluno);

console.log("\n=== 3) Reutilizacao: dobro ===");
console.log(calcularDobro(5));
console.log(calcularDobro(8));
console.log(calcularDobro(12));

console.log("\n=== 4) Troca de valores ===");
a = 10;
b = 25;
temporaria = a;
a = b;
b = temporaria;
console.log(a);
console.log(b);

console.log("\n=== 5) Contagem, soma e multiplicacao ===");
contadorFinal = calcularContagem(4);
somaFinal = calcularSoma(4);
produtoFinal = calcularProduto(4);
console.log("Contagem: " + contadorFinal);
console.log("Soma: " + somaFinal);
console.log("Produto: " + produtoFinal);

console.log("\n=== 6) Fatorial ===");
console.log(calcularFatorial(5));

console.log("\n=== 7) Fibonacci ===");
console.log(gerarFibonacci(7));

console.log("\n=== 8) Decimal para binario ===");
console.log(decimalParaBinario(13));

console.log("\n=== 9) N primeiros primos ===");
console.log(gerarNPrimeirosPrimos(5));
