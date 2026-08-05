function gerarSequencia(n: number): string {
  let i: number;
  let quadrado: number;
  let cubo: number;
  let saida: string;

  saida = '';

  for (i = 1; i <= n; i++) {
    quadrado = i ** 2;
    cubo = i ** 3;
    saida += `${i} ${quadrado} ${cubo}\n`;
    saida += `${i} ${quadrado + 1} ${cubo + 1}`;

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
  console.log(gerarSequencia(n));
}
