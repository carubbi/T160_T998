let entradaRaio;
let raio;
let volume;
const PI = 3.14159;

entradaRaio = prompt('Digite o raio: ');
raio = parseFloat(entradaRaio);
volume = (4.0 / 3.0) * PI * raio * raio * raio;

console.log('VOLUME = ' + volume.toFixed(3));
