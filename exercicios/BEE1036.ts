// Declarar as variáveis
let entradaA: string | null;
let entradaB: string | null;
let entradaC: string | null;
let A: number;
let B: number;
let C: number;
let delta: number;
let R1: number;
let R2: number;
let raizDelta: number;

// Entrada de dados
entradaA = prompt('Digite A: ');
entradaB = prompt('Digite B: ');
entradaC = prompt('Digite C: ');

if (entradaA !== null && entradaB !== null && entradaC !== null) {
  // Processamento dos dados
  // Converter as entradas (string) para numérico
  A = parseFloat(entradaA);
  B = parseFloat(entradaB);
  C = parseFloat(entradaC);

  delta = (B * B) - (4 * A * C);

  // Saída de dados
  if ((A === 0) || (delta < 0)) {
    console.log(`Impossivel calcular`);
  } else {
    raizDelta = delta ** (1 / 2);
    R1 = (-B + raizDelta) / (2 * A);
    R2 = (-B - raizDelta) / (2 * A);
    console.log(`R1 = ${R1.toFixed(5)}`);
    console.log(`R2 = ${R2.toFixed(5)}`);
  }
}
