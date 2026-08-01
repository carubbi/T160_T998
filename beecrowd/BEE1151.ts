function gerarFibonacci(n: number): string {
  let a: number;
  let b: number;
  let proximo: number;
  let i: number;
  let saida: string;

  a = 0;
  b = 1;
  saida = '';

  for (i = 1; i <= n; i++) {
    saida += a;

    if (i < n) {
      saida += ' ';
    }

    proximo = a + b;
    a = b;
    b = proximo;
  }

  return saida;
}

let entrada: string | null;
let n: number;

entrada = prompt('Digite a quantidade de termos: ');

if (entrada !== null) {
  n = parseInt(entrada);
  console.log(gerarFibonacci(n));
}
