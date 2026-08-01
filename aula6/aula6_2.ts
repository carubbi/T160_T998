// Aula 6 - Exemplo 2 (if dentro de else)
// Declaracao de variaveis
let condicao1: string | null;
let condicao2: string | null;
let mensagem: string;

// Entrada
condicao1 = prompt("Digite o valor logico da condicao 1 (true/false):"); // false
condicao2 = prompt("Digite o valor logico da condicao 2 (true/false):"); // true

// Processamento
if (condicao1 !== null && condicao2 !== null) {
  if (condicao1 === "true") {
    mensagem = "acao 1";
  } else {
    if (condicao2 === "true") {
      mensagem = "acao 2";
    } else {
      mensagem = "acao 3";
    }
  }

  // Saida
  console.log(mensagem);
}
