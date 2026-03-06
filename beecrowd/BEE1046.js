let entradaInicio;
let entradaFim;
let inicio;
let fim;
let duracao;

entradaInicio = prompt('Digite a hora inicial: ');
entradaFim = prompt('Digite a hora final: ');

inicio = parseInt(entradaInicio);
fim = parseInt(entradaFim);

if (inicio < fim) {
  duracao = fim - inicio;
} else {
  duracao = (24 - inicio) + fim;
}

console.log('O JOGO DUROU ' + duracao + ' HORA(S)');
