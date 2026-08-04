// Aula 6 - Exemplo 3 (condicional composta)
// Declaracao de variaveis
let condicao: string | null;
let mensagem: string;

// Entrada
condicao = prompt("Digite o valor logico da condicao (true/false):"); // true

// Processamento
if (condicao !== null) {
  if (condicao === "true") {
    mensagem = "caminho verdadeiro";
  } else {
    mensagem = "caminho falso";
  }

  // Saida
  console.log(mensagem);
}
