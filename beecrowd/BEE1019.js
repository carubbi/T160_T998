let entradaTempo;
let tempo;
let horas;
let minutos;
let segundos;
let resto;

entradaTempo = prompt('Digite o tempo em segundos: ');
tempo = parseInt(entradaTempo);

horas = parseInt(tempo / 3600);
resto = tempo % 3600;
minutos = parseInt(resto / 60);
segundos = resto % 60;

console.log(horas + ':' + minutos + ':' + segundos);
