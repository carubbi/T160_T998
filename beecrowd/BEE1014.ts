// Declarar as variáveis
let entradaDistancia: string;
let entradaCombustivel: string;
let distancia: number;
let combustivel: number;
let consumo: number;

// Entrada de dados
entradaDistancia = prompt('Digite a distancia total: ')!;
entradaCombustivel = prompt('Digite o combustivel gasto: ')!;

// Processamento dos dados
distancia = parseInt(entradaDistancia);
combustivel = parseFloat(entradaCombustivel);
consumo = distancia / combustivel;

// Saída de dados
console.log(`${consumo.toFixed(3)} km/l`);
