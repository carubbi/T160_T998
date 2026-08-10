// Aula 7 - Exemplo 10 (for para contar de 0 ate um limite)
// Declaracao de variaveis
let entradaLimite: string | null;
let limite: number;
let i: number;
let mensagem: string;

// Entrada
entradaLimite = prompt("Digite o limite da contagem:"); // 3

// Processamento
if (entradaLimite !== null) {
  limite = parseInt(entradaLimite);
  mensagem = "";

  for (i = 0; i <= limite; i++) {
    mensagem += `${i}\n`;
  }

  // Saida
  console.log(mensagem);
}
