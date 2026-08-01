// Aula 6 - Exemplo 8 (switch com if aninhado)
// Declaracao de variaveis
let perfil: string | null;
let matriculaAtiva: string | null;
let entradaValorCurso: string | null;
let valorCurso: number;
let valorFinal: number;

// Entrada
perfil = prompt("Digite o perfil do usuario: "); // aluno
matriculaAtiva = prompt("A matricula esta ativa? (true/false): "); // true
entradaValorCurso = prompt("Digite o valor do curso: "); // 1200

// Processamento
if (perfil !== null && matriculaAtiva !== null && entradaValorCurso !== null) {
  valorCurso = parseFloat(entradaValorCurso);

  switch (perfil) {
    case "aluno":
      if (matriculaAtiva === "true") {
        valorFinal = valorCurso * 0.8;
      } else {
        valorFinal = valorCurso;
      }
      break;

    case "professor":
      valorFinal = valorCurso * 0.7;
      break;

    case "visitante":
      valorFinal = valorCurso * 1.0;
      break;

    default:
      valorFinal = -1;
  }

  // Saida
  if (valorFinal === -1) {
    console.log("Perfil invalido.");
  } else {
    console.log(`R$ ${valorFinal.toFixed(2)}`);
  }
}
