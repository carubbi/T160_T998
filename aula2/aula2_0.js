// Aula 2 - Conceitos fundamentais em JavaScript (visao conceitual)

console.log('=== 1) O que e algoritmo ===');
console.log('Algoritmo: sequencia finita de passos para resolver um problema.');

console.log('\n=== 2) Estrutura basica ===');
console.log('INICIO -> ENTRADA -> PROCESSAMENTO -> SAIDA -> FIM');

// Exemplo minimo do fluxo E/P/S (Entrada, Processamento e Saida)
var entradaA = 4;
var entradaB = 5;
var saidaSoma = entradaA + entradaB;
console.log('Entrada:', entradaA, entradaB);
console.log('Processamento: soma = entradaA + entradaB');
console.log('Saida:', saidaSoma);

console.log('\n=== 3) Formas de representar algoritmos ===');
console.log('Descricao narrativa: passos em linguagem natural.');
console.log('Fluxograma: passos com simbolos e setas.');
console.log('Pseudocodigo: passos com sintaxe proxima de programacao.');

console.log('\n=== 4) Variaveis e operacoes basicas (Aula 2 usa var) ===');
var numero1 = 10;
var numero2 = 2;
var multiplicacao = numero1 * numero2;
var divisao = numero1 / numero2;
var resto = numero1 % numero2;
console.log('numero1:', numero1, '| numero2:', numero2);
console.log('multiplicacao (*):', multiplicacao);
console.log('divisao (/):', divisao);
console.log('resto (%):', resto);

console.log('\n=== 5) Validacao simples antes de calcular ===');
var divisor = 0;
if (divisor === 0) {
  console.log('Validacao: impossivel dividir por zero.');
} else {
  console.log('Resultado da divisao:', numero1 / divisor);
}

console.log('\n=== 6) Teste de mesa (simulacao manual) ===');
console.log('Teste de mesa: acompanhar valores linha a linha antes de executar.');
console.log('Exemplo: entradaA=4, entradaB=5, saidaSoma=9.');

console.log('\n=== 7) Observacao de linguagem ===');
console.log('Nesta fase, usamos var por simplicidade.');
console.log('Nas proximas aulas, a preferencia sera por let e const.');
