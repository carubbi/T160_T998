// Declarar as variáveis
let entradaSenha;
let senha;

// Entrada e processamento dos dados
senha = parseInt(prompt('Digite a senha: '));

while (senha !== 2002) {
  console.log('Senha Invalida');
  entradaSenha = prompt('Digite a senha: ');
  senha = parseInt(entradaSenha);
}

// Saída de dados
console.log('Acesso Permitido');
