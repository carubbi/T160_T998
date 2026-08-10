// Aula 7 - Exemplo 3 (while para pedir senha ate acertar)
// Declaracao de variaveis
let senha: string | null;
let mensagem: string;

// Entrada
senha = prompt("Digite a senha:"); // 1111

// Processamento
mensagem = "";

while (senha !== "1234" && senha !== null) {
  mensagem += "Senha incorreta\n";
  senha = prompt("Digite a senha:"); // 9999, 1234
}

if (senha !== null) {
  mensagem += "Acesso liberado";

  // Saida
  console.log(mensagem);
}
