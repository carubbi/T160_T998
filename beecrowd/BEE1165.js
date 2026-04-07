// Declarar as variáveis
let entradaT;
let t;
let caso;
let entradaX;
let msg;

function primo(valor) {
  let x;
  let d;

  x = parseInt(valor);

  if (x < 2) {
    return false;
  }

  for (d = 2; d < x; d++) {
    if (x % d === 0) {
      return false;
    }
  }

  return true;
}

// Entrada de dados
entradaT = prompt('Digite a quantidade de casos: ');

// Processamento dos dados
t = parseInt(entradaT);

// Saida de dados
for (caso = 1; caso <= t; caso++) {
  entradaX = prompt('Digite o numero: ');

  if (primo(entradaX)) {
    msg = `${entradaX} eh primo`;
  } else {
    msg = `${entradaX} nao eh primo`;
  }

  console.log(msg);
}

/*
// Opcao equivalente sem funcao:
let x;
let d;
let ok;

for (caso = 1; caso <= t; caso++) {
  entradaX = prompt('Digite o numero: ');
  x = parseInt(entradaX);
  ok = true;

  if (x < 2) {
    ok = false;
  } else {
    for (d = 2; d < x; d++) {
      if (x % d === 0) {
        ok = false;
        break;
      }
    }
  }

  if (ok) {
    console.log(`${entradaX} eh primo`);
  } else {
    console.log(`${entradaX} nao eh primo`);
  }
}
*/
