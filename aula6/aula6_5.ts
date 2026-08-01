// Aula 6 - Exemplo 5 (media do aluno com validacao)
// Declaracao de variaveis
let entradaNota1: string | null;
let entradaNota2: string | null;
let alunoNota1: number;
let alunoNota2: number;
let alunoMedia: number;
let situacaoAluno: string;
let mensagem: string;

// Entrada
entradaNota1 = prompt("Digite a nota 1 do aluno:"); // 7.0
entradaNota2 = prompt("Digite a nota 2 do aluno:"); // 4.0

// Processamento
if (entradaNota1 !== null && entradaNota2 !== null) {
  alunoNota1 = parseFloat(entradaNota1);
  alunoNota2 = parseFloat(entradaNota2);

  if (alunoNota1 >= 0 && alunoNota2 >= 0) {
    alunoMedia = (alunoNota1 + alunoNota2) / 2;

    if (alunoMedia >= 5) {
      situacaoAluno = "aprovado!";
    } else {
      situacaoAluno = "reprovado!";
    }

    mensagem = `Media: ${alunoMedia}. O aluno esta ${situacaoAluno}`;
  } else {
    mensagem = "A nota deve ser maior ou igual a zero!";
  }

  // Saida
  console.log(mensagem);
}
