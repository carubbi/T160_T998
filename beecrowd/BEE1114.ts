// Declarar as variaveis
let entradaSenha: string | null;
let senha: number;

entradaSenha = prompt('Digite a senha: ');

if (entradaSenha !== null) {
  senha = parseInt(entradaSenha);

  while (senha !== 2002 && entradaSenha !== null) {
    console.log('Senha Invalida');
    entradaSenha = prompt('Digite a senha: ');

    if (entradaSenha !== null) {
      senha = parseInt(entradaSenha);
    }
  }

  if (entradaSenha !== null) {
    console.log('Acesso Permitido');
  }
}
