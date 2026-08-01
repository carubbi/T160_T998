// Aula 6 - Exemplo 10 (lanche com adicional no X-Bacon)
// Declaracao de variaveis
let entradaCodigo: string | null;
let entradaQuantidade: string | null;
let comCheddar: string | null;
let codigo: number;
let quantidade: number;
let precoUnitario: number;
let valorTotal: number;
let mensagem: string;

// Entrada
entradaCodigo = prompt("Digite o codigo do item:"); // 3
entradaQuantidade = prompt("Digite a quantidade:"); // 2
comCheddar = prompt("Se for X-Bacon, deseja adicionar cheddar? (s/n)"); // s

// Processamento
if (entradaCodigo !== null && entradaQuantidade !== null && comCheddar !== null) {
  codigo = parseInt(entradaCodigo);
  quantidade = parseInt(entradaQuantidade);

  if (codigo >= 1 && codigo <= 4) {
    precoUnitario = 0;

    switch (codigo) {
      case 1:
        precoUnitario = 4.0;
        break;
      case 2:
        precoUnitario = 4.5;
        break;
      case 3:
        precoUnitario = 5.0;
        if (comCheddar === "s") {
          precoUnitario = precoUnitario + 0.5;
        }
        break;
      case 4:
        precoUnitario = 2.0;
        break;
    }

    valorTotal = precoUnitario * quantidade;
    mensagem = `Total: R$ ${valorTotal.toFixed(2)}`;
  } else {
    mensagem = "Codigo invalido";
  }

  // Saida
  console.log(mensagem);
}
