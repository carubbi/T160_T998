// Exemplo 1 - if
// Declaracao de variaveis
let entrada: string;
let valorCompra: number;

// Entrada (sempre chega como texto)
entrada = prompt("Digite o valor da compra:")!;

// Conversao para numero decimal
valorCompra = parseFloat(entrada);

// Regra: aplica desconto apenas acima de 100
if (valorCompra > 100) {
  valorCompra = valorCompra * 0.9; // desconto de 10%
}

// Saida final
console.log(`Valor final: ${valorCompra}`);
