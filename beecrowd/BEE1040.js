// Declarar as variáveis
let entradaN1;
let entradaN2;
let entradaN3;
let entradaN4;
let n1;
let n2;
let n3;
let n4;
let media;
let exame;
let mediaFinal;

// Entrada de dados
entradaN1 = prompt('Digite a nota 1: ');
entradaN2 = prompt('Digite a nota 2: ');
entradaN3 = prompt('Digite a nota 3: ');
entradaN4 = prompt('Digite a nota 4: ');

// Processamento dos dados
n1 = parseFloat(entradaN1);
n2 = parseFloat(entradaN2);
n3 = parseFloat(entradaN3);
n4 = parseFloat(entradaN4);

media = (n1 * 2 + n2 * 3 + n3 * 4 + n4) / 10;

console.log(`Media: ${media.toFixed(1)}`);

if (media >= 7.0) {
  console.log('Aluno aprovado.');
} else if (media < 5.0) {
  console.log('Aluno reprovado.');
} else {
  console.log('Aluno em exame.');
  exame = parseFloat(prompt('Digite a nota do exame: '));
  console.log(`Nota do exame: ${exame.toFixed(1)}`);

  mediaFinal = (media + exame) / 2;

  if (mediaFinal >= 5.0) {
    console.log('Aluno aprovado.');
  } else {
    console.log('Aluno reprovado.');
  }

  console.log(`Media final: ${mediaFinal.toFixed(1)}`);
}

/*
Solução com uma única saída de dados:
saida = `Media: ${media.toFixed(1)}`;

if (media >= 7.0) {
  saida += '\nAluno aprovado.';
} else if (media < 5.0) {
  saida += '\nAluno reprovado.';
} else {
  saida += '\nAluno em exame.';
  exame = parseFloat(prompt('Digite a nota do exame: '));
  saida += `\nNota do exame: ${exame.toFixed(1)}`;

  mediaFinal = (media + exame) / 2;

  if (mediaFinal >= 5.0) {
    saida += '\nAluno aprovado.';
  } else {
    saida += '\nAluno reprovado.';
  }

  saida += `\nMedia final: ${mediaFinal.toFixed(1)}`;
}

// Saída de dados
console.log(saida);
*/
