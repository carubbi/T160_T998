// Declarar as variáveis
let entradaInicio: string;
let entradaFim: string;
let inicio: number;
let fim: number;
let duracao: number;

// Entrada de dados
entradaInicio = prompt('Digite a hora inicial: ')!;
entradaFim = prompt('Digite a hora final: ')!;

// Processamento dos dados
inicio = parseInt(entradaInicio);
fim = parseInt(entradaFim);

if (inicio < fim) {
  duracao = fim - inicio;
} else {
  duracao = (24 - inicio) + fim;
}

// Saída de dados
console.log(`O JOGO DUROU ${duracao} HORA(S)`);
