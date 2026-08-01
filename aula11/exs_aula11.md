<img src="../imgs/UNIFOR_logo1b.png" width="400"> 

# Raciocínio Lógico Algorítmico: Aula 11
Orientador: Prof. Me Ricardo Carubbi

# Exercícios: Matrizes

## Objetivo

Praticar o uso de matrizes `number[][]` em TypeScript usando:

- arrays bidimensionais;
- acesso por `matriz[linha][coluna]`;
- `matriz.length`;
- `matriz[i].length`;
- laços `for` aninhados;
- leitura de todos os elementos da matriz em uma única entrada;
- separação dos valores com `split(" ")`;
- conversão com `parseInt` ou `parseFloat`;
- soma, média, maior valor e busca.

## Orientação

Resolva os exercícios usando o mesmo padrão didático da aula:

- use `for`;
- acesse posições por índice;
- use `prompt` para ler os dados de entrada;
- leia todos os elementos da matriz em um único `prompt`;
- digite os valores na ordem em que aparecem ao percorrer a matriz em ordem por linhas;
- separe os valores da entrada com `split(" ")`;
- informe apenas `nLinhas` no código e deduza `nColunas` usando `dados.length / nLinhas`;
- evite `map`, `filter`, `reduce`, `forEach` e `push`;
- separe entrada, processamento e saída.

## 1. Criando e exibindo uma matriz 2x3

Leia todos os elementos de uma matriz 2x3 usando um único `prompt`.

Digite os valores separados por espaço, em ordem por linhas.

No código, use `nLinhas = 2` e deduza `nColunas`.

Exemplo de entrada:

```text
1 2 3 4 5 6
```

Use `split(" ")` para separar os valores da entrada.

Depois, exiba todos os valores usando dois laços `for`.

## 2. Acessando posições específicas

Leia todos os elementos de uma matriz 2x3 usando um único `prompt`.

No código, use `nLinhas = 2` e deduza `nColunas`.

Depois, exiba:

- o valor da linha `0`, coluna `0`;
- o valor da linha `0`, coluna `2`;
- o valor da linha `1`, coluna `1`;
- o valor da linha `1`, coluna `2`.

Depois, altere o valor da linha `1`, coluna `2` para `9` e exiba novamente a matriz inteira.

## 3. Lendo uma matriz 3x3

Leia uma matriz 3x3.

Todos os elementos devem ser digitados em um único `prompt`, separados por espaço.

No código, use `nLinhas = 3` e deduza `nColunas`.

Exemplo:

```text
1 2 3 4 5 6 7 8 9
```

Use `split(" ")` para separar os valores da entrada.

Depois, exiba todos os valores da matriz.

## 4. Soma de todos os elementos

Leia uma matriz 3x3 de números inteiros e calcule a soma de todos os elementos.

Todos os elementos devem ser lidos em um único `prompt` e separados com `split(" ")`.

No código, use `nLinhas = 3` e deduza `nColunas`.

Exemplo:

```text
1 2 3 4 5 6 7 8 9
```

Saída esperada:

```text
Soma: 45
```

## 5. Média geral da matriz

Leia uma matriz 2x3 de números reais e calcule a média geral dos elementos.

Todos os elementos devem ser lidos em um único `prompt` e separados com `split(" ")`.

No código, use `nLinhas = 2` e deduza `nColunas`.

Exemplo:

```text
8.0 7.0 9.0 6.0 10.0 5.0
```

Saída esperada:

```text
Media: 7.5
```

## 6. Maior valor e posição

Leia uma matriz 3x3 de números inteiros.

Todos os elementos devem ser lidos em um único `prompt` e separados com `split(" ")`.

No código, use `nLinhas = 3` e deduza `nColunas`.

Depois, encontre:

- o maior valor;
- a linha onde ele aparece;
- a coluna onde ele aparece.

Exemplo:

```text
12 45 7 89 23 14 5 91 30
```

Saída esperada:

```text
Maior valor: 91
Linha: 2
Coluna: 1
```

## 7. Busca em matriz

Leia uma matriz 3x3 de números inteiros e depois leia um valor procurado.

Todos os elementos da matriz devem ser lidos em um único `prompt` e separados com `split(" ")`.

O valor procurado também deve ser lido com `prompt`.

No código, use `nLinhas = 3` e deduza `nColunas`.

Informe se o valor aparece na matriz.

Se aparecer, informe a linha e a coluna da ocorrência encontrada.

Exemplo:

```text
Matriz:
12 45 7 89 23 14 5 91 30

Valor procurado:
23
```

Saída esperada:

```text
Valor encontrado
Linha: 1
Coluna: 1
```

## 8. Soma de cada linha

Leia uma matriz 3x3 de números inteiros.

Todos os elementos devem ser lidos em um único `prompt` e separados com `split(" ")`.

No código, use `nLinhas = 3` e deduza `nColunas`.

Depois, calcule e exiba a soma de cada linha separadamente.

Exemplo:

```text
1 2 3 4 5 6 7 8 9
```

Saída esperada:

```text
Soma da linha 0: 6
Soma da linha 1: 15
Soma da linha 2: 24
```

## 9. Soma de cada coluna

Leia uma matriz 3x3 de números inteiros.

Todos os elementos devem ser lidos em um único `prompt` e separados com `split(" ")`.

No código, use `nLinhas = 3` e deduza `nColunas`.

Use a função `gerarMatriz(entrada, nLinhas)` para criar a matriz antes de calcular as somas.

Depois, calcule e exiba a soma de cada coluna separadamente.

Exemplo:

```text
1 2 3 4 5 6 7 8 9
```

Saída esperada:

```text
Soma da coluna 0: 12
Soma da coluna 1: 15
Soma da coluna 2: 18
```

Solução de referência:

- `11_exercicio9_soma_colunas_funcao.ts`

## 10. Exercício de indexação por cores

Observe a figura:

<img src="imgs/colorIndex.png" width="400">

Leia todos os elementos da matriz 6x6 usando um único `prompt`.

No código, use `nLinhas = 6` e deduza `nColunas`.

Use a função `gerarMatriz(entrada, nLinhas)` para criar a matriz antes de acessar os elementos por cor.

Para testar, use os valores da figura:

```text
0 1 2 3 4 5 10 11 12 13 14 15 20 21 22 23 24 25 30 31 32 33 34 35 40 41 42 43 44 45 50 51 52 53 54 55
```

Depois, leia com `prompt` o nome da cor desejada:

```text
azul
vermelho
roxo
verde
```

Usando acesso por índice, exiba os elementos destacados pela cor digitada.

A matriz esperada é:

```typescript
let matriz: number[][];

matriz = [
    [0, 1, 2, 3, 4, 5],
    [10, 11, 12, 13, 14, 15],
    [20, 21, 22, 23, 24, 25],
    [30, 31, 32, 33, 34, 35],
    [40, 41, 42, 43, 44, 45],
    [50, 51, 52, 53, 54, 55]
];
```

### 10.1 Gerando a matriz por função

Crie uma função para gerar a matriz da figura a partir de suas dimensões.

A função deve receber:

- `nLinhas`;
- `nColunas`.

Para cada posição, use:

```typescript
matriz[i][j] = i * 10 + j;
```

Depois de gerar a matriz, imprima todos os seus elementos.

Para a figura, chame a função com:

```typescript
matriz = gerarMatrizPorDimensoes(6, 6);
```

### 10.2 Elementos azuis

Valores esperados:

```text
2 12 22 32 42 52
```

Formato esperado:

```typescript
for (i = 0; i < matriz.length; i++) {
    console.log(matriz[i][2]);
}
```

### 10.3 Elementos vermelhos

Valores esperados:

```text
3 4
```

Formato esperado:

```typescript
for (j = 3; j <= 4; j++) {
    console.log(matriz[0][j]);
}
```

### 10.4 Elementos roxos

Valores esperados:

```text
20 22 24 40 42 44
```

Formato esperado:

```typescript
for (i = 2; i <= 4; i = i + 2) {
    for (j = 0; j <= 4; j = j + 2) {
        console.log(matriz[i][j]);
    }
}
```

### 10.5 Elementos verdes

Valores esperados:

```text
44 45 54 55
```

Formato esperado:

```typescript
for (i = 4; i <= 5; i++) {
    for (j = 4; j <= 5; j++) {
        console.log(matriz[i][j]);
    }
}
```

### Observação

O valor `44` aparece em mais de uma seleção. Isso acontece porque a mesma posição da matriz pode fazer parte de mais de um agrupamento visual.

Solução de referência para a seleção por cor:

- `12_exercicio10_indexacao_cores_funcao.ts`

## 11. Beecrowd 1181 - Linha na Matriz

Resolva o problema `1181 - Linha na Matriz`.

Na adaptação didática desta aula, use `prompt` para ler:

- a linha escolhida;
- a operação;
- todos os elementos da matriz em uma única entrada, separando os valores com `split(" ")`.

Use `nLinhas = 12` e deduza `nColunas`.

Use a função `gerarMatriz(entrada, nLinhas)` para criar a matriz antes de calcular a soma ou média da linha.

Esse exercício é indicado porque trabalha diretamente com uma linha específica da matriz.

Ideia geral:

1. ler o número da linha;
2. ler a operação desejada;
3. ler todos os elementos da matriz;
4. percorrer apenas a linha escolhida;
5. calcular soma ou média.

Ponto principal:

```typescript
matriz[linhaEscolhida][j]
```

Nesse exercício, a linha fica fixa e a coluna varia.

Solução de referência:

- `08_beecrowd_1181.ts`

## 12. Beecrowd 1187 - Área Superior

Resolva o problema `1187 - Área Superior`.

Na adaptação didática desta aula, use `prompt` para ler:

- a operação;
- todos os elementos da matriz em uma única entrada, separando os valores com `split(" ")`.

Use `nLinhas = 12` e deduza `nColunas`.

Esse exercício deve ser tratado como desafio.

Ele é mais difícil que o `1181` porque exige selecionar apenas uma região da matriz.

Ideia geral:

1. ler a operação desejada;
2. ler todos os elementos da matriz;
3. percorrer todas as posições;
4. selecionar apenas os elementos da área superior;
5. calcular soma ou média.

Uma forma de identificar a área superior é observar a relação entre linha e coluna.

Para uma matriz 12x12, os elementos da área superior satisfazem:

```typescript
j > i && j < 11 - i
```

Esse exercício reforça que nem todo percurso usa todos os elementos da matriz. Às vezes, o algoritmo percorre a matriz inteira, mas calcula apenas sobre as posições que obedecem a uma condição.

Solução de referência:

- `09_beecrowd_1187.ts`

## 13. Exercícios complementares resolvidos

Os exercícios abaixo são complementares. Eles devem ser estudados depois dos exercícios principais da aula.

### 13.1 Transposta de uma matriz

Crie uma função chamada `calcularTransposta`.

A função deve receber uma matriz e retornar sua transposta.

Exemplo:

```text
Matriz original:
1 2 3
4 5 6

Matriz transposta:
1 4
2 5
3 6
```

Solução de referência:

- `13_transposta_matriz.ts`

### 13.2 Multiplicação de matrizes

Crie uma função chamada `multiplicarMatrizes`.

A função deve receber duas matrizes e retornar o resultado da multiplicação.

Use como exemplo:

```typescript
a = [
    [1, 2, 3],
    [4, 5, 6]
];

b = [
    [7, 8],
    [9, 10],
    [11, 12]
];
```

Resultado esperado:

```text
58 64
139 154
```

Solução de referência:

- `14_multiplicacao_matrizes.ts`

## Progressão sugerida

Para estudar, resolva nesta ordem:

1. Exercícios 1, 2 e 3 para consolidar criação, acesso e leitura.
2. Exercícios 4 e 5 para praticar acumuladores.
3. Exercícios 6 e 7 para praticar comparação e busca.
4. Exercícios 8 e 9 para reforçar linha e coluna.
5. Exercício 10 para treinar indexação visual.
6. Beecrowd 1181.
7. Beecrowd 1187 como desafio.
8. Exercícios complementares de transposta e multiplicação.

## Fontes

- Categoria Iniciante do Beecrowd: https://judge.beecrowd.com/pt/problems/index/1
