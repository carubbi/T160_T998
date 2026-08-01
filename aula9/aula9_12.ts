// Aula 9 - Exemplo 12 (Beecrowd 1018 - Cedulas)
// Declaracao de variaveis
let entrada: string | null;
let valor: number;
let cedulas: number[];
let quantidade: number;
let i: number;

// Entrada
entrada = prompt("Digite o valor:"); // 576

if (entrada !== null) {
  valor = parseInt(entrada);
  cedulas = [100, 50, 20, 10, 5, 2, 1];

  // Saida exigida pelo problema: valor original
  console.log(valor);

  for (i = 0; i < cedulas.length; i++) {
    quantidade = parseInt(String(valor / cedulas[i]));
    valor = valor % cedulas[i];

    console.log(quantidade + " nota(s) de R$ " + cedulas[i] + ",00");
  }
}
