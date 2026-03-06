let entradaDistancia;
let entradaCombustivel;
let distancia;
let combustivel;
let consumo;

entradaDistancia = prompt('Digite a distancia total: ');
entradaCombustivel = prompt('Digite o combustivel gasto: ');

distancia = parseInt(entradaDistancia);
combustivel = parseFloat(entradaCombustivel);
consumo = distancia / combustivel;

console.log(consumo.toFixed(3) + ' km/l');
