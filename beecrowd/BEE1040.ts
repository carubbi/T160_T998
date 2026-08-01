// Declarar as variaveis
let entradaN1: string | null;
let entradaN2: string | null;
let entradaN3: string | null;
let entradaN4: string | null;
let entradaExame: string | null;
let n1: number;
let n2: number;
let n3: number;
let n4: number;
let media: number;
let exame: number;
let mediaFinal: number;

entradaN1 = prompt('Digite a nota 1: ');
entradaN2 = prompt('Digite a nota 2: ');
entradaN3 = prompt('Digite a nota 3: ');
entradaN4 = prompt('Digite a nota 4: ');

if (
  entradaN1 !== null &&
  entradaN2 !== null &&
  entradaN3 !== null &&
  entradaN4 !== null
) {
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
    entradaExame = prompt('Digite a nota do exame: ');

    if (entradaExame !== null) {
      exame = parseFloat(entradaExame);
      console.log(`Nota do exame: ${exame.toFixed(1)}`);
      mediaFinal = (media + exame) / 2;

      if (mediaFinal >= 5.0) {
        console.log('Aluno aprovado.');
      } else {
        console.log('Aluno reprovado.');
      }

      console.log(`Media final: ${mediaFinal.toFixed(1)}`);
    }
  }
}
