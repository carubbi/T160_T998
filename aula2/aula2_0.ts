// Aula 2 - Conceitos fundamentais em TypeScript (visao conceitual)

// Declaracao de variaveis
let entradaA: number;
let entradaB: number;
let saidaSoma: number;
let numero1: number;
let numero2: number;
let multiplicacao: number;
let divisao: number;
let resto: number;
let divisor: number;

console.log('=== 1) O que e algoritmo ===');
console.log('Algoritmo: sequencia finita de passos para resolver um problema.');

console.log('\n=== 2) Estrutura basica ===');
console.log('INICIO -> ENTRADA -> PROCESSAMENTO -> SAIDA -> FIM');

// Exemplo minimo do fluxo E/P/S (Entrada, Processamento e Saida)
entradaA = 4;
entradaB = 5;
saidaSoma = entradaA + entradaB;
console.log('Entrada:', entradaA, entradaB);
console.log('Processamento: soma = entradaA + entradaB');
console.log('Saida:', saidaSoma);

console.log('\n=== 3) Formas de representar algoritmos ===');
console.log('Descricao narrativa: passos em linguagem natural.');
console.log('Fluxograma: passos com simbolos e setas.');
console.log('Pseudocodigo: passos com sintaxe proxima de programacao.');

console.log('\n=== 4) Variaveis e operacoes basicas com tipos explicitos ===');
numero1 = 10;
numero2 = 2;
multiplicacao = numero1 * numero2;
divisao = numero1 / numero2;
resto = numero1 % numero2;
console.log('numero1:', numero1, '| numero2:', numero2);
console.log('multiplicacao (*):', multiplicacao);
console.log('divisao (/):', divisao);
console.log('resto (%):', resto);

console.log('\n=== 5) Validacao simples antes de calcular ===');
divisor = 0;
if (divisor === 0) {
  console.log('Validacao: impossivel dividir por zero.');
} else {
  console.log('Resultado da divisao:', numero1 / divisor);
}

console.log('\n=== 6) Teste de mesa (simulacao manual) ===');
console.log('Teste de mesa: acompanhar valores linha a linha antes de executar.');
console.log('Exemplo: entradaA=4, entradaB=5, saidaSoma=9.');

console.log('\n=== 7) Observacao de linguagem ===');
console.log('TypeScript permite declarar o tipo de cada variavel.');
console.log('Os tipos number, string e boolean serao detalhados na proxima aula.');
