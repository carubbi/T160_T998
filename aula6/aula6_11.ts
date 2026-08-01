// Aula 6 - Exemplo 11 (validacao com if aninhado)
// Declaracao de variaveis
let entradaNota: string | null;
let nota: number;
let mensagem: string;

// Entrada
entradaNota = prompt("Digite a nota:"); // 8

// Processamento
if (entradaNota !== null) {
  nota = parseFloat(entradaNota);

  if (nota >= 0) {
    if (nota <= 10) {
      mensagem = "Nota valida";
    } else {
      mensagem = "Nota invalida";
    }
  } else {
    mensagem = "Nota invalida";
  }

  // Saida
  console.log(mensagem);
}
