<img src="../imgs/UNIFOR_logo1b.png" width="400">

# Raciocínio Lógico Algorítmico: Aula 11
Orientador: Prof. Me Ricardo Carubbi

## Matrizes em TypeScript

### Objetivo da aula
Compreender matrizes como vetores de vetores tipados, acessando elementos por
linha e coluna e aplicando laços aninhados em algoritmos de leitura, soma,
média, busca, transposição e multiplicação.

## 1. De vetor para matriz
Um vetor usa um índice:

```typescript
let vetor: number[];

vetor = [10, 20, 30];
console.log(vetor[1]);
```

Uma matriz usa dois índices:

```typescript
let matriz: number[][];

matriz = [
  [1, 2, 3],
  [4, 5, 6]
];

console.log(matriz[1][2]);
```

O tipo `number[][]` indica uma estrutura cujas linhas são vetores `number[]`.
O primeiro índice representa a linha; o segundo, a coluna.

## 2. Linhas, colunas e índices

| | coluna 0 | coluna 1 | coluna 2 |
| --- | --- | --- | --- |
| linha 0 | 1 | 2 | 3 |
| linha 1 | 4 | 5 | 6 |

- `matriz.length` informa a quantidade de linhas;
- `matriz[0].length` informa a quantidade de colunas da primeira linha;
- os índices começam em `0`.

```typescript
matriz[1][2] = 9;
console.log(matriz[1][2]);
```

## 3. Percurso com laços aninhados
O laço externo percorre as linhas; o interno percorre as colunas.

```typescript
// Declaracao de variaveis
let matriz: number[][];
let i: number;
let j: number;

matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (i = 0; i < matriz.length; i++) {
  for (j = 0; j < matriz[i].length; j++) {
    console.log("Linha " + i + ", coluna " + j + ": " + matriz[i][j]);
  }
}
```

## 4. Matriz vazia e preenchimento
Antes de preencher uma posição, é preciso criar sua linha.

```typescript
// Declaracao de variaveis
let matriz: number[][];
let i: number;
let j: number;

matriz = [];

for (i = 0; i < 3; i++) {
  matriz[i] = [];

  for (j = 0; j < 3; j++) {
    matriz[i][j] = i * 10 + j;
  }
}
```

Sem `matriz[i] = []`, a linha ainda não existe.

## 5. Leitura em uma única entrada

```typescript
// Declaracao de variaveis
let entrada: string | null;
let dados: string[];
let matriz: number[][];
let nLinhas: number;
let nColunas: number;
let indice: number;
let i: number;
let j: number;

nLinhas = 3;
matriz = [];
indice = 0;
entrada = prompt("Digite os valores separados por espaco:");

if (entrada !== null) {
  dados = entrada.split(" ");
  nColunas = parseInt(String(dados.length / nLinhas));

  for (i = 0; i < nLinhas; i++) {
    matriz[i] = [];

    for (j = 0; j < nColunas; j++) {
      matriz[i][j] = parseInt(dados[indice]);
      indice++;
    }
  }
}
```

A quantidade total de valores precisa ser compatível com o número de linhas.

## 6. Função para gerar uma matriz

```typescript
function gerarMatriz(entrada: string, nLinhas: number): number[][] {
  let dados: string[];
  let matriz: number[][];
  let nColunas: number;
  let indice: number;
  let i: number;
  let j: number;

  dados = entrada.split(" ");
  nColunas = parseInt(String(dados.length / nLinhas));
  matriz = [];
  indice = 0;

  for (i = 0; i < nLinhas; i++) {
    matriz[i] = [];

    for (j = 0; j < nColunas; j++) {
      matriz[i][j] = parseInt(dados[indice]);
      indice++;
    }
  }

  return matriz;
}
```

O parâmetro textual permanece `string`; a verificação de `null` ocorre antes
da chamada.

## 7. Soma e média

```typescript
// Declaracao de variaveis
let matriz: number[][];
let soma: number;
let media: number;
let quantidade: number;
let i: number;
let j: number;

matriz = [
  [8, 7, 9],
  [6, 10, 5]
];
quantidade = 0;
soma = 0;

for (i = 0; i < matriz.length; i++) {
  for (j = 0; j < matriz[i].length; j++) {
    soma = soma + matriz[i][j];
    quantidade++;
  }
}

media = soma / quantidade;
console.log("Soma: " + soma);
console.log("Media: " + media);
```

## 8. Maior valor e posição
Inicializamos o maior com o primeiro elemento existente.

```typescript
// Declaracao de variaveis
let matriz: number[][];
let maior: number;
let linhaMaior: number;
let colunaMaior: number;
let i: number;
let j: number;

matriz = [
  [12, 45, 7],
  [89, 23, 14],
  [5, 91, 30]
];
maior = matriz[0][0];
linhaMaior = 0;
colunaMaior = 0;

for (i = 0; i < matriz.length; i++) {
  for (j = 0; j < matriz[i].length; j++) {
    if (matriz[i][j] > maior) {
      maior = matriz[i][j];
      linhaMaior = i;
      colunaMaior = j;
    }
  }
}
```

## 9. Busca em matriz
A busca percorre cada posição e registra a linha e a coluna.

```typescript
// Declaracao de variaveis
let matriz: number[][];
let procurado: number;
let encontrado: boolean;
let linhaEncontrada: number;
let colunaEncontrada: number;
let i: number;
let j: number;

matriz = [
  [12, 45, 7],
  [89, 23, 14],
  [5, 91, 30]
];
procurado = 23;
encontrado = false;
linhaEncontrada = -1;
colunaEncontrada = -1;

for (i = 0; i < matriz.length; i++) {
  for (j = 0; j < matriz[i].length; j++) {
    if (matriz[i][j] === procurado) {
      encontrado = true;
      linhaEncontrada = i;
      colunaEncontrada = j;
    }
  }
}
```

## 10. Soma por linha ou coluna
Para somar uma linha, fixamos `i` e variamos `j`. Para somar uma coluna,
fixamos `j` e variamos `i`.

```typescript
for (j = 0; j < matriz[0].length; j++) {
  somaColuna = 0;

  for (i = 0; i < matriz.length; i++) {
    somaColuna = somaColuna + matriz[i][j];
  }

  console.log("Soma da coluna " + j + ": " + somaColuna);
}
```

## 11. Beecrowd 1181 e 1187
Os exemplos `08_beecrowd_1181.ts` e `09_beecrowd_1187.ts` são adaptações
didáticas para compilador online.

- o problema 1181 seleciona uma linha e calcula soma ou média;
- o problema 1187 seleciona posições da área superior;
- ambos usam uma matriz `12 × 12`;
- as entradas permanecem baseadas em `prompt()`.

## 12. Matriz transposta
Na transposta, linhas tornam-se colunas.

```typescript
function calcularTransposta(matriz: number[][]): number[][] {
  let transposta: number[][];
  let i: number;
  let j: number;

  transposta = [];

  for (j = 0; j < matriz[0].length; j++) {
    transposta[j] = [];

    for (i = 0; i < matriz.length; i++) {
      transposta[j][i] = matriz[i][j];
    }
  }

  return transposta;
}
```

Uma matriz `2 × 3` produz uma transposta `3 × 2`.

## 13. Multiplicação de matrizes
Para multiplicar `a × b`, a quantidade de colunas de `a` deve ser igual à
quantidade de linhas de `b`.

```typescript
function multiplicarMatrizes(a: number[][], b: number[][]): number[][] {
  let resultado: number[][];
  let i: number;
  let j: number;
  let k: number;
  let soma: number;

  resultado = [];

  for (i = 0; i < a.length; i++) {
    resultado[i] = [];

    for (j = 0; j < b[0].length; j++) {
      soma = 0;

      for (k = 0; k < a[i].length; k++) {
        soma = soma + a[i][k] * b[k][j];
      }

      resultado[i][j] = soma;
    }
  }

  return resultado;
}
```

Esse algoritmo usa três laços porque cada elemento do resultado depende de
uma linha, de uma coluna e do percurso compartilhado por ambas.

## 14. Erros comuns

- esquecer de criar cada linha com `matriz[i] = []`;
- trocar os índices de linha e coluna;
- usar o mesmo limite nos dois laços sem verificar as dimensões;
- acessar `matriz[0]` quando a matriz está vazia;
- calcular a média sem contar os elementos;
- omitir `number[][]` nos parâmetros e retornos;
- ignorar o possível `null` de `prompt()`.

## 15. Fechamento
Nesta aula, aprendemos a:

1. declarar matrizes `number[][]`;
2. acessar posições por linha e coluna;
3. preencher e percorrer matrizes com laços aninhados;
4. calcular soma, média, maior valor e posição;
5. buscar elementos;
6. transpor e multiplicar matrizes.

## Saiba mais
- TypeScript Handbook - Arrays: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays
- MDN - Array: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
