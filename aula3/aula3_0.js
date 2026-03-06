// Aula 3 - Exemplos de boas praticas, tipos e operadores em JavaScript

console.log('=== 1) Boas praticas ===');

// 1.1 Nomes claros de variaveis
const quantidadeAlunos = 32;
const notaFinal = 8.7;
console.log('quantidadeAlunos:', quantidadeAlunos);
console.log('notaFinal:', notaFinal);

// 1.2 Inicializar variaveis antes de usar
let totalPresencas = 0;
totalPresencas += 1;
console.log('totalPresencas:', totalPresencas);

// 1.3 Preferir const por padrao e let quando houver mudanca
const curso = 'Raciocinio Logico';
let moduloAtual = 1;
moduloAtual += 1;
console.log('curso:', curso, '| moduloAtual:', moduloAtual);

// 1.4 Evitar palavras reservadas e nomes genericos sem contexto
// Exemplo ruim (nao fazer): let if = 10; let x = 5;
// Exemplo bom:
const idadeAluno = 19;
const notaProva = 7.5;
console.log('idadeAluno:', idadeAluno, '| notaProva:', notaProva);

console.log('\n=== 2) Tipos principais em JavaScript ===');

// number (inteiros e decimais)
const numeroInteiro = -3;
const numeroDecimal = 3.14;

// string (textos)
const nomeDisciplina = 'Computacao';
const conceito = 'A';

// boolean (true/false)
const aprovado = true;

// undefined (valor padrao de variavel nao inicializada)
let valorIndefinido;

// null (ausencia intencional de valor)
const semValor = null;

console.log('numeroInteiro:', numeroInteiro, '| tipo:', typeof numeroInteiro);
console.log('numeroDecimal:', numeroDecimal, '| tipo:', typeof numeroDecimal);
console.log('nomeDisciplina:', nomeDisciplina, '| tipo:', typeof nomeDisciplina);
console.log('conceito:', conceito, '| tipo:', typeof conceito);
console.log('aprovado:', aprovado, '| tipo:', typeof aprovado);
console.log('valorIndefinido:', valorIndefinido, '| tipo:', typeof valorIndefinido);
console.log('semValor:', semValor, '| tipo:', typeof semValor);

console.log('\n=== 3) Operadores ===');

console.log('\n3.1 Atribuicao');
let contador = 10;
console.log('contador inicial:', contador);

contador += 5; // 15
contador -= 2; // 13
contador *= 3; // 39
contador /= 3; // 13
console.log('contador final apos +=, -=, *=, /=:', contador);

console.log('\n3.2 Relacionais / comparacao');
const idade = 18;
console.log('idade === 18:', idade === 18);
console.log('idade !== 21:', idade !== 21);
console.log('idade > 16:', idade > 16);
console.log('idade < 21:', idade < 21);
console.log('idade >= 18:', idade >= 18);
console.log('idade <= 17:', idade <= 17);

console.log('\n3.3 Logicos');
const frequencia = 80;
const nota = 6.5;
const passouPorMediaEFrequencia = (nota >= 6.0) && (frequencia >= 75);
const passouPorNotaOuFrequencia = (nota >= 7.0) || (frequencia >= 85);
const naoAprovado = !passouPorMediaEFrequencia;

console.log('(nota >= 6.0) && (frequencia >= 75):', passouPorMediaEFrequencia);
console.log('(nota >= 7.0) || (frequencia >= 85):', passouPorNotaOuFrequencia);
console.log('!passouPorMediaEFrequencia:', naoAprovado);

console.log('\n3.3.1 Tabela-verdade no console');
console.log('\nA && B');
console.log(`A=false, B=false => ${false && false}`);
console.log(`A=false, B=true => ${false && true}`);
console.log(`A=true, B=false => ${true && false}`);
console.log(`A=true, B=true => ${true && true}`);

console.log('\nA || B');
console.log(`A=false, B=false => ${false || false}`);
console.log(`A=false, B=true => ${false || true}`);
console.log(`A=true, B=false => ${true || false}`);
console.log(`A=true, B=true => ${true || true}`);

console.log('\n!A');
console.log(`A=false => ${!false}`);
console.log(`A=true => ${!true}`);
