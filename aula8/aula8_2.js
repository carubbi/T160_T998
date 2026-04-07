// Aula 8 - Exemplo 2 (escopo de variaveis em funcoes)
function mostrarMensagem(nome) {
  let saudacao;

  saudacao = "Ola, " + nome;
  console.log(saudacao);
}

// Declaracao de variaveis
let aluno;

// Entrada
aluno = prompt("Digite o nome do aluno:"); // Ana

// Processamento e saida
mostrarMensagem(aluno);
console.log(aluno);
