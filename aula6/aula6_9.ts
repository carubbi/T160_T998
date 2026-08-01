// Aula 6 - Exemplo 9 (switch dentro de if)
// Declaracao de variaveis
let usuarioAutenticado: string | null;
let entradaOpcaoMenu: string | null;
let entradaNota1: string | null;
let entradaNota2: string | null;
let opcaoMenu: number;
let nota1: number;
let nota2: number;
let resultado: number;
let mensagem: string;

// Entrada
usuarioAutenticado = prompt("Usuario autenticado? (true/false)"); // true
entradaOpcaoMenu = prompt("Digite a opcao do menu:"); // 2
entradaNota1 = prompt("Digite a nota 1:"); // 8.0
entradaNota2 = prompt("Digite a nota 2:"); // 6.0

// Processamento
if (
  usuarioAutenticado !== null &&
  entradaOpcaoMenu !== null &&
  entradaNota1 !== null &&
  entradaNota2 !== null
) {
  opcaoMenu = parseInt(entradaOpcaoMenu);
  nota1 = parseFloat(entradaNota1);
  nota2 = parseFloat(entradaNota2);

  if (usuarioAutenticado === "true") {
    switch (opcaoMenu) {
      case 1:
        resultado = nota1 + nota2;
        mensagem = `Soma: ${resultado}`;
        break;
      case 2:
        resultado = (nota1 + nota2) / 2;
        mensagem = `Media: ${resultado}`;
        break;
      case 3:
        resultado = nota1 > nota2 ? nota1 - nota2 : nota2 - nota1;
        mensagem = `Diferenca: ${resultado}`;
        break;
      default:
        mensagem = "Opcao invalida.";
    }
  } else {
    mensagem = "Usuario nao autenticado.";
  }

  // Saida
  console.log(mensagem);
}
