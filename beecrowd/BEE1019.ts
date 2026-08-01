// Declarar as variáveis
let entradaTempo: string;
let tempo: number;
let horas: number;
let minutos: number;
let segundos: number;
let resto: number;

// Entrada de dados
entradaTempo = prompt('Digite o tempo em segundos: ')!;

// Processamento dos dados
tempo = parseInt(entradaTempo);

horas = parseInt(String(tempo / 3600));
resto = tempo % 3600;
minutos = parseInt(String(resto / 60));
segundos = resto % 60;

// Saída de dados
console.log(`${horas}:${minutos}:${segundos}`);
