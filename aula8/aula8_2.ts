// Aula 8 - Exemplo 2 (escopo de variaveis em funcoes)
function mostrarMensagem(nome: string): void {
  let saudacao: string;

  saudacao = "Ola, " + nome;
  console.log(saudacao);
}

// Declaracao de variaveis
let aluno: string | null;

// Entrada
aluno = prompt("Digite o nome do aluno:"); // Ana

// Processamento e saida
if (aluno !== null) {
  mostrarMensagem(aluno);
  console.log(aluno);
}
