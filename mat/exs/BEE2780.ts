function calcularPontuacao(distancia: number): number {
  if (distancia <= 800) {
    return 1;
  } else if (distancia <= 1400) {
    return 2;
  } else {
    return 3;
  }
}

let entradaDistancia: string | null;
let distancia: number;

entradaDistancia = prompt('Digite a distancia: ');

if (entradaDistancia !== null) {
  distancia = parseInt(entradaDistancia);
  console.log(calcularPontuacao(distancia));
}
