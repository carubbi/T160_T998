// Declarar as variáveis
let entradaTempo: string;
let entradaVelocidade: string;
let tempo: number;
let velocidade: number;
let litros: number;

// Entrada de dados
entradaTempo = prompt('Digite o tempo gasto: ')!;
entradaVelocidade = prompt('Digite a velocidade media: ')!;

// Processamento dos dados
tempo = parseInt(entradaTempo);
velocidade = parseInt(entradaVelocidade);
litros = (tempo * velocidade) / 12;

// Saída de dados
console.log(`${litros.toFixed(3)}`);
