// Declarar as variáveis
let entradaMes;
let mes;
let nomeMes;

// Entrada de dados
entradaMes = prompt('Digite o numero do mes: ');

// Processamento dos dados
mes = parseInt(entradaMes);

switch (mes) {
  case 1:
    nomeMes = 'January';
    break;
  case 2:
    nomeMes = 'February';
    break;
  case 3:
    nomeMes = 'March';
    break;
  case 4:
    nomeMes = 'April';
    break;
  case 5:
    nomeMes = 'May';
    break;
  case 6:
    nomeMes = 'June';
    break;
  case 7:
    nomeMes = 'July';
    break;
  case 8:
    nomeMes = 'August';
    break;
  case 9:
    nomeMes = 'September';
    break;
  case 10:
    nomeMes = 'October';
    break;
  case 11:
    nomeMes = 'November';
    break;
  default:
    nomeMes = 'December';
}

// Saída de dados
console.log(nomeMes);
