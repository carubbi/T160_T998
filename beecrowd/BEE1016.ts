// Declarar as variáveis
let entradaDistancia: string;
let distancia: number;
let tempo: number;

// Entrada de dados
entradaDistancia = prompt('Digite a distancia: ')!;

// Processamento dos dados
distancia = parseInt(entradaDistancia);
tempo = distancia * 2;

// Saída de dados
console.log(`${tempo} minutos`);
