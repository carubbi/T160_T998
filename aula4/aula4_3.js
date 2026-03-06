// Exemplo 3 - if...else if...else (autenticacao)
// Entrada de dados
const username = prompt("Digite o usuario:");
let password = prompt("Digite a senha numerica:");

// Conversao da senha para inteiro
password = parseInt(password);

// Regras de autenticacao
if (username != "usuario123" && password != 123456) {
  console.log("Login e senha incorretos");
} else if (username != "usuario123") {
  console.log("Login incorreto");
} else if (password != 123456) {
  console.log("Senha incorreta");
} else {
  console.log("Usuario autenticado");
}
