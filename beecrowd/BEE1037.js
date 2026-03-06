let entradaValor;
let valor;

entradaValor = prompt('Digite o valor: ');
valor = parseFloat(entradaValor);

if (valor < 0 || valor > 100) {
  console.log('Fora de intervalo');
} else if (valor <= 25) {
  console.log('Intervalo [0,25]');
} else if (valor <= 50) {
  console.log('Intervalo (25,50]');
} else if (valor <= 75) {
  console.log('Intervalo (50,75]');
} else {
  console.log('Intervalo (75,100]');
}
