// Aula 6 - Exemplo 6 (aptidao para CNH)
// Declaracao de variaveis
let entradaIdade: string | null;
let idade: number;
let anosApto: number;
let mensagem: string;

// Entrada
entradaIdade = prompt("Digite a idade do candidato:"); // 18

// Processamento
if (entradaIdade !== null) {
  idade = parseInt(entradaIdade);

  if (idade < 0) {
    mensagem = "A idade deve ser maior ou igual a zero!";
  } else {
    if (idade >= 18) {
      mensagem = "O candidato esta apto a tirar a CNH!";
    } else {
      anosApto = 18 - idade;
      mensagem = `Faltam ${anosApto} ano(s) para o candidato estar apto!`;
    }
  }

  // Saida
  console.log(mensagem);
}
