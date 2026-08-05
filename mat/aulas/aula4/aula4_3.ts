// Exemplo 3 - if...else if...else (autenticacao)
// Declaracao de variaveis
let username: string;
let entradaPassword: string;
let password: number;

// Entrada de dados
username = prompt("Digite o usuario:")!;
entradaPassword = prompt("Digite a senha numerica:")!;

// Conversao da senha para inteiro
password = parseInt(entradaPassword);

// Regras de autenticacao
if (username !== "usuario123" && password !== 123456) {
  console.log("Login e senha incorretos");
} else if (username !== "usuario123") {
  console.log("Login incorreto");
} else if (password !== 123456) {
  console.log("Senha incorreta");
} else {
  console.log("Usuario autenticado");
}
