// Aula 4 - Conceitos fundamentais de estruturas condicionais

console.log('=== 1) Controle de fluxo ===');
console.log('Sequencial: executa em ordem.');
console.log('Condicional: escolhe caminho por condicao.');
console.log('Repeticao: repete bloco enquanto condicao for verdadeira.');

console.log('\n=== 2) Condicao logica ===');
const idade = 19;
const nota = 6.5;
const frequencia = 80;
console.log('idade >= 18 ->', idade >= 18);
console.log('nota >= 6 ->', nota >= 6);
console.log('(nota >= 6) && (frequencia >= 75) ->', (nota >= 6) && (frequencia >= 75));

console.log('\n=== 3) if (condicional simples) ===');
let valorCompra = 150;
if (valorCompra > 100) {
  valorCompra = valorCompra * 0.9;
}
console.log('Valor final com regra de desconto:', valorCompra);

console.log('\n=== 4) if...else (dois caminhos) ===');
const salarioAtual = 800;
let novoSalario;
if (salarioAtual <= 500) {
  novoSalario = salarioAtual * 1.2;
} else {
  novoSalario = salarioAtual * 1.1;
}
console.log('Novo salario:', novoSalario);

console.log('\n=== 5) if...else if...else (multiplas condicoes) ===');
const username = 'admin';
const password = 123456;

if (username !== 'usuario123' && password !== 123456) {
  console.log('Login e senha incorretos');
} else if (username !== 'usuario123') {
  console.log('Login incorreto');
} else if (password !== 123456) {
  console.log('Senha incorreta');
} else {
  console.log('Usuario autenticado');
}

console.log('\n=== 6) Operador ternario ===');
const numero = 13;
const classificacao = (numero % 2 === 0) ? 'Par' : 'Impar';
console.log('Classificacao do numero:', classificacao);

console.log('\n=== 7) Regra pratica de escolha ===');
console.log('if: quando so existe acao no caso verdadeiro.');
console.log('if...else: quando existem exatamente dois caminhos.');
console.log('if...else if...else: quando existem 3 ou mais possibilidades.');
console.log('ternario: quando a decisao e curta e objetiva.');
