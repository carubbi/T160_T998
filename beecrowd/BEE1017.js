let entradaTempo;
let entradaVelocidade;
let tempo;
let velocidade;
let litros;

entradaTempo = prompt('Digite o tempo gasto: ');
entradaVelocidade = prompt('Digite a velocidade media: ');

tempo = parseInt(entradaTempo);
velocidade = parseInt(entradaVelocidade);
litros = (tempo * velocidade) / 12;

console.log(litros.toFixed(3));
