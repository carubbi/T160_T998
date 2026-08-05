function gerarQuadradosCubos(n: number): string {
  let i: number;
  let saida: string;

  saida = '';

  for (i = 1; i <= n; i++) {
    saida += `${i} ${i ** 2} ${i ** 3}`;

    if (i < n) {
      saida += '\n';
    }
  }

  return saida;
}

let entrada: string | null;
let n: number;

entrada = prompt('Digite N: ');

if (entrada !== null) {
  n = parseInt(entrada);
  console.log(gerarQuadradosCubos(n));
}
