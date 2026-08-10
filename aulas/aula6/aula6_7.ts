// Aula 6 - Exemplo 7 (faixa de desempenho)
// Declaracao de variaveis
let entradaNota1: string | null;
let entradaNota2: string | null;
let nota1: number;
let nota2: number;
let media: number;
let resultado: string;

// Entrada
entradaNota1 = prompt("Digite a nota 1:"); // 8.0
entradaNota2 = prompt("Digite a nota 2:"); // 6.0

// Processamento
if (entradaNota1 !== null && entradaNota2 !== null) {
  nota1 = parseFloat(entradaNota1);
  nota2 = parseFloat(entradaNota2);

  if (nota1 >= 0 && nota2 >= 0) {
    media = (nota1 + nota2) / 2;

    if (media >= 7) {
      resultado = "Aluno aprovado com bom desempenho.";
    } else {
      if (media >= 5) {
        resultado = "Aluno aprovado.";
      } else {
        resultado = "Aluno reprovado.";
      }
    }
  } else {
    resultado = "Notas invalidas.";
  }

  // Saida
  console.log(resultado);
}
