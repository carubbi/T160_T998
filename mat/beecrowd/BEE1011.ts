// Declarar as variáveis
let entradaRaio: string;
let raio: number;
let volume: number;
let PI: number;

// Entrada de dados
entradaRaio = prompt('Digite o raio: ')!;

// Processamento dos dados
PI = 3.14159;
raio = parseFloat(entradaRaio);
volume = (4.0 / 3.0) * PI * raio * raio * raio;

// Saída de dados
console.log(`VOLUME = ${volume.toFixed(3)}`);
