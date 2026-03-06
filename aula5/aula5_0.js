// Aula 5 - Conceitos fundamentais: aplicacao correta de estruturas condicionais

console.log('=== 1) Como escolher a estrutura certa ===');
console.log('if: quando existe acao apenas para o caso verdadeiro.');
console.log('if...else: quando existem exatamente dois caminhos.');
console.log('if...else if...else: quando existem tres ou mais condicoes.');
console.log('switch...case: quando a decisao depende de valores exatos da mesma variavel.');

console.log('\n=== 2) if (condicional simples) ===');
let temperatura = 32;
if (temperatura > 30) {
  console.log('Dia quente');
}
console.log('Verificacao concluida');

console.log('\n=== 3) if...else (dois caminhos) ===');
let nota = 6.5;
if (nota >= 7) {
  console.log('Aprovado');
} else {
  console.log('Reprovado');
}

console.log('\n=== 4) if...else if...else (multiplas condicoes) ===');
let media = 8.2;
if (media >= 9) {
  console.log('Conceito A');
} else if (media >= 7) {
  console.log('Conceito B');
} else if (media >= 5) {
  console.log('Conceito C');
} else {
  console.log('Conceito D');
}

console.log('\n=== 5) switch...case (valor exato) ===');
let dia = 3;
switch (dia) {
  case 1:
    console.log('Domingo');
    break;
  case 2:
    console.log('Segunda-feira');
    break;
  case 3:
    console.log('Terca-feira');
    break;
  case 4:
    console.log('Quarta-feira');
    break;
  case 5:
    console.log('Quinta-feira');
    break;
  case 6:
    console.log('Sexta-feira');
    break;
  case 7:
    console.log('Sabado');
    break;
  default:
    console.log('Dia invalido');
}

console.log('\n=== 6) Pontos de atencao ===');
console.log('A ordem no else if importa: da condicao mais restritiva para a mais ampla.');
console.log('No switch, usar break para evitar executar casos seguintes (fall-through).');
console.log('Usar default para tratar valores nao previstos.');
