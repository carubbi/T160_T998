// Aula 6 - Exemplo 12 (validacao com expressao logica unica)
// Declaracao de variaveis
let entradaNota: string | null;
let nota: number;
let mensagem: string;

// Entrada
entradaNota = prompt("Digite a nota:"); // 8

// Processamento
if (entradaNota !== null) {
  nota = parseFloat(entradaNota);

  if (nota >= 0 && nota <= 10) {
    mensagem = "Nota valida";
  } else {
    mensagem = "Nota invalida";
  }

  // Saida
  console.log(mensagem);
}
