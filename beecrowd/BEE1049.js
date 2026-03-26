// Declarar as variáveis
let vertebrado;
let classe;
let alimentacao;
let animal;

// Entrada de dados
vertebrado = prompt('Digite o primeiro grupo: ');
classe = prompt('Digite o segundo grupo: ');
alimentacao = prompt('Digite o tipo de alimentacao: ');

// Processamento dos dados
if (vertebrado === 'vertebrado') {
  if (classe === 'ave') {
    if (alimentacao === 'carnivoro') {
      animal = 'aguia';
    } else {
      animal = 'pomba';
    }
  } else {
    if (alimentacao === 'onivoro') {
      animal = 'homem';
    } else {
      animal = 'vaca';
    }
  }
} else {
  if (classe === 'inseto') {
    if (alimentacao === 'hematofago') {
      animal = 'pulga';
    } else {
      animal = 'lagarta';
    }
  } else {
    if (alimentacao === 'hematofago') {
      animal = 'sanguessuga';
    } else {
      animal = 'minhoca';
    }
  }
}

// Saída de dados
console.log(animal);
