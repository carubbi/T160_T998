// Aula 8 - Funcoes e algoritmos classicos

function somar(a, b) {
  a = parseFloat(a);
  b = parseFloat(b);

  return a + b;
}

function mostrarMensagem(nome) {
  let saudacao;

  saudacao = "Ola, " + nome;
  console.log(saudacao);
}

function calcularDobro(numero) {
  numero = parseFloat(numero);

  return numero * 2;
}

function trocarValores(a, b) {
  let aux;

  a = parseFloat(a);
  b = parseFloat(b);

  aux = a;
  a = b;
  b = aux;

  return [a, b];
}

function calcularResumo(n) {
  let contador;
  let soma;
  let produto;
  let i;

  n = parseInt(n);
  contador = 0;
  soma = 0;
  produto = 1;

  for (i = 1; i <= n; i++) {
    contador++;
    soma = soma + i;
    produto = produto * i;
  }

  return [contador, soma, produto];
}

function calcularFatorial(n) {
  let fatorial;
  let i;

  n = parseInt(n);
  fatorial = 1;

  for (i = 1; i <= n; i++) {
    fatorial = fatorial * i;
  }

  return fatorial;
}

function gerarFibonacci(quantidade) {
  let a;
  let b;
  let proximo;
  let i;
  let sequencia;

  quantidade = parseInt(quantidade);
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

function decimalParaBinario(numero) {
  let binario;
  let resto;

  numero = parseInt(numero);

  if (numero == 0) {
    return "0";
  }

  binario = "";

  while (numero > 0) {
    resto = numero % 2;
    binario = resto + binario;
    numero = parseInt(numero / 2);
  }

  return binario;
}

function ehPrimo(numero) {
  let divisor;

  numero = parseInt(numero);

  if (numero < 2) {
    return false;
  }

  for (divisor = 2; divisor < numero; divisor++) {
    if (numero % divisor == 0) {
      return false;
    }
  }

  return true;
}

function gerarNPrimeirosPrimos(quantidade) {
  let encontrados;
  let candidato;
  let resposta;

  quantidade = parseInt(quantidade);
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

console.log("=== 1) Funcao basica ===");
console.log(somar(4, 7));

console.log("\n=== 2) Escopo em funcoes ===");
let aluno = "Ana";
mostrarMensagem(aluno);
console.log(aluno);

console.log("\n=== 3) Reutilizacao: dobro ===");
console.log(calcularDobro(5));
console.log(calcularDobro(8));
console.log(calcularDobro(12));

console.log("\n=== 4) Troca de valores ===");
let novoA = 10;
let novoB = 25;
[novoA, novoB] = trocarValores(novoA, novoB);
console.log(novoA);
console.log(novoB);

console.log("\n=== 5) Contagem, soma e multiplicacao ===");
let contadorFinal;
let somaFinal;
let produtoFinal;
[contadorFinal, somaFinal, produtoFinal] = calcularResumo(4);
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
