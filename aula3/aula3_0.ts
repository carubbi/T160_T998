// Aula 3 - Exemplos de boas praticas, tipos e operadores em TypeScript

// Declaracao de variaveis
let quantidadeAlunos: number;
let notaFinal: number;
let totalPresencas: number;
let curso: string;
let moduloAtual: number;
let idadeAluno: number;
let notaProva: number;
let numeroInteiro: number;
let numeroDecimal: number;
let nomeDisciplina: string;
let conceito: string;
let aprovado: boolean;
let valorIndefinido: undefined;
let semValor: null;
let contador: number;
let idade: number;
let frequencia: number;
let nota: number;
let passouPorMediaEFrequencia: boolean;
let passouPorNotaOuFrequencia: boolean;
let naoAprovado: boolean;

console.log('=== 1) Boas praticas ===');

// 1.1 Nomes claros de variaveis
quantidadeAlunos = 32;
notaFinal = 8.7;
console.log('quantidadeAlunos:', quantidadeAlunos);
console.log('notaFinal:', notaFinal);

// 1.2 Inicializar variaveis antes de usar
totalPresencas = 0;
totalPresencas += 1;
console.log('totalPresencas:', totalPresencas);

// 1.3 Atribuir valores compativeis com os tipos declarados
curso = 'Raciocinio Logico';
moduloAtual = 1;
moduloAtual += 1;
console.log('curso:', curso, '| moduloAtual:', moduloAtual);

// 1.4 Evitar palavras reservadas e nomes genericos sem contexto
// Exemplo ruim (nao fazer): let if = 10; let x = 5;
// Exemplo bom:
idadeAluno = 19;
notaProva = 7.5;
console.log('idadeAluno:', idadeAluno, '| notaProva:', notaProva);

console.log('\n=== 2) Tipos principais em TypeScript ===');

// number (inteiros e decimais)
numeroInteiro = -3;
numeroDecimal = 3.14;

// string (textos)
nomeDisciplina = 'Computacao';
conceito = 'A';

// boolean (true/false)
aprovado = true;

// undefined (valor padrao de variavel nao inicializada)
valorIndefinido = undefined;

// null (ausencia intencional de valor)
semValor = null;

console.log('numeroInteiro:', numeroInteiro, '| tipo:', typeof numeroInteiro);
console.log('numeroDecimal:', numeroDecimal, '| tipo:', typeof numeroDecimal);
console.log('nomeDisciplina:', nomeDisciplina, '| tipo:', typeof nomeDisciplina);
console.log('conceito:', conceito, '| tipo:', typeof conceito);
console.log('aprovado:', aprovado, '| tipo:', typeof aprovado);
console.log('valorIndefinido:', valorIndefinido, '| tipo:', typeof valorIndefinido);
console.log('semValor:', semValor, '| tipo:', typeof semValor);

console.log('\n=== 3) Operadores ===');

console.log('\n3.1 Atribuicao');
contador = 10;
console.log('contador inicial:', contador);

contador += 5; // 15
contador -= 2; // 13
contador *= 3; // 39
contador /= 3; // 13
console.log('contador final apos +=, -=, *=, /=:', contador);

console.log('\n3.2 Relacionais / comparacao');
idade = 18;
console.log('idade === 18:', idade === 18);
console.log('idade !== 21:', idade !== 21);
console.log('idade > 16:', idade > 16);
console.log('idade < 21:', idade < 21);
console.log('idade >= 18:', idade >= 18);
console.log('idade <= 17:', idade <= 17);

console.log('\n3.3 Logicos');
frequencia = 80;
nota = 6.5;
passouPorMediaEFrequencia = (nota >= 6.0) && (frequencia >= 75);
passouPorNotaOuFrequencia = (nota >= 7.0) || (frequencia >= 85);
naoAprovado = !passouPorMediaEFrequencia;

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
