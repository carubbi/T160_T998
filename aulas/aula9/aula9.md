<img src="../imgs/UNIFOR_logo1b.png" width="400">

# Raciocínio Lógico Algorítmico: Aula 9
Orientador: Prof. Me Ricardo Carubbi

## Vetores em TypeScript

### Objetivo da aula
Compreender como declarar, preencher, acessar e percorrer vetores tipados em
TypeScript, usando índices e laços explícitos.

## 1. Conceito de vetor
Um vetor, chamado de array em TypeScript, armazena vários valores do mesmo
tipo sob um único nome. Cada elemento é identificado por um índice.

```typescript
// Declaracao de variaveis
let notas: number[];

// Processamento
notas = [8.5, 7.0, 9.2, 6.5, 10.0];
```

O tipo `number[]` indica um vetor de números. De forma semelhante:

```typescript
let nomes: string[];
let respostas: boolean[];
```

Nesta aula, trabalharemos somente com vetores de uma dimensão. Matrizes serão
estudadas posteriormente.

## 2. Vetor vazio e preenchimento por índice
Em TypeScript, podemos começar com um vetor vazio e preencher suas posições.

```typescript
// Declaracao de variaveis
let valores: number[];
let i: number;

// Processamento
valores = [];

for (i = 0; i < 3; i++) {
  valores[i] = i + 1;
}

// Saida
for (i = 0; i < valores.length; i++) {
  console.log(valores[i]);
}
```

Mesmo vazio, o vetor possui um tipo definido. Portanto, `valores` só deve
receber números.

## 3. Índices
O primeiro índice de um vetor é `0`.

```typescript
// Declaracao de variaveis
let notas: number[];

// Processamento
notas = [8.5, 7.0, 9.2, 6.5, 10.0];

// Saida
console.log(notas[0]);
console.log(notas[1]);
console.log(notas[4]);
```

| Índice | 0 | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- | --- |
| Valor | 8.5 | 7.0 | 9.2 | 6.5 | 10.0 |

Tentar acessar um índice inexistente produz `undefined` durante a execução.
Por isso, os limites dos laços devem ser definidos com cuidado.

## 4. Alteração de valores
Um elemento pode ser substituído por meio de seu índice.

```typescript
// Declaracao de variaveis
let notas: number[];
let i: number;

// Processamento
notas = [8.5, 7.0, 9.2];
notas[1] = 8.0;

// Saida
for (i = 0; i < notas.length; i++) {
  console.log(notas[i]);
}
```

## 5. Propriedade `length`
A propriedade `length` informa a quantidade de elementos.

```typescript
// Declaracao de variaveis
let notas: number[];
let ultimoIndice: number;

// Processamento
notas = [8.5, 7.0, 9.2, 6.5, 10.0];
ultimoIndice = notas.length - 1;

// Saida
console.log(notas.length);
console.log(ultimoIndice);
console.log(notas[ultimoIndice]);
```

Se o vetor possui cinco elementos, `length` vale `5`, mas o último índice vale
`4`.

## 6. Percurso com `for`
O padrão mais comum para percorrer todas as posições é:

```typescript
for (i = 0; i < notas.length; i++) {
  console.log(notas[i]);
}
```

Usamos `<`, e não `<=`, porque o índice igual a `length` já está fora do vetor.

## 7. Várias entradas com `prompt()`
Quando cada elemento é lido separadamente, o cancelamento também deve
interromper o preenchimento.

```typescript
// Declaracao de variaveis
let notas: number[];
let entrada: string | null;
let i: number;

// Processamento
notas = [];
entrada = "";

// Entrada e preenchimento
for (i = 0; i < 5 && entrada !== null; i++) {
  entrada = prompt("Digite uma nota:");

  if (entrada !== null) {
    notas[i] = parseFloat(entrada);
  }
}

// Saida
if (entrada !== null) {
  for (i = 0; i < notas.length; i++) {
    console.log(notas[i]);
  }
}
```

## 8. Separação de uma entrada com `split()`
O método `split()` divide uma `string` e produz um vetor de textos.

```typescript
// Declaracao de variaveis
let entrada: string | null;
let partes: string[];
let numeros: number[];
let i: number;

// Entrada
entrada = prompt("Digite as notas separadas por espaco:");

// Processamento
if (entrada !== null) {
  partes = entrada.split(" ");
  numeros = [];

  for (i = 0; i < partes.length; i++) {
    numeros[i] = parseFloat(partes[i]);
  }

  // Saida
  for (i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
  }
}
```

Para separar linhas, usamos `entrada.split("\n")`. Em ambos os casos,
`split()` produz `string[]`; cada elemento precisa ser convertido antes de ser
armazenado em `number[]`.

## 9. Soma e média

```typescript
// Declaracao de variaveis
let entrada: string | null;
let partes: string[];
let notas: number[];
let soma: number;
let media: number;
let i: number;

// Entrada
entrada = prompt("Digite as notas separadas por quebra de linha:");

// Processamento
if (entrada !== null) {
  partes = entrada.split("\n");
  notas = [];
  soma = 0;

  for (i = 0; i < partes.length; i++) {
    notas[i] = parseFloat(partes[i]);
  }

  for (i = 0; i < notas.length; i++) {
    soma = soma + notas[i];
  }

  media = soma / notas.length;

  // Saida
  console.log("Soma: " + soma);
  console.log("Media: " + media);
}
```

## 10. Maior valor e posição
O primeiro elemento pode ser usado como maior valor inicial. Depois,
comparamos os demais.

```typescript
// Declaracao de variaveis
let valores: number[];
let maior: number;
let posicao: number;
let i: number;

// Processamento
valores = [12, 45, 7, 89, 23];
maior = valores[0];
posicao = 0;

for (i = 1; i < valores.length; i++) {
  if (valores[i] > maior) {
    maior = valores[i];
    posicao = i;
  }
}

// Saida
console.log("Maior valor: " + maior);
console.log("Indice: " + posicao);
console.log("Ordem de entrada: " + (posicao + 1));
```

Índice e ordem de entrada não são iguais: o índice começa em zero, enquanto a
ordem usada na linguagem cotidiana começa em um.

## 11. Busca linear
A busca linear compara o valor procurado com cada elemento.

```typescript
// Declaracao de variaveis
let valores: number[];
let procurado: number;
let encontrado: boolean;
let i: number;

// Processamento
valores = [12, 45, 7, 89, 23];
procurado = 7;
encontrado = false;

for (i = 0; i < valores.length; i++) {
  if (valores[i] === procurado) {
    encontrado = true;
  }
}

// Saida
if (encontrado) {
  console.log("Valor encontrado");
} else {
  console.log("Valor nao encontrado");
}
```

Algoritmos de busca e ordenação serão aprofundados na Aula 10.

## 12. Beecrowd 1018 — Cédulas
As cédulas disponíveis podem ser armazenadas em um vetor.

```typescript
// Declaracao de variaveis
let entrada: string | null;
let valor: number;
let cedulas: number[];
let quantidade: number;
let i: number;

// Entrada
entrada = prompt("Digite o valor:");

if (entrada !== null) {
  valor = parseInt(entrada);
  cedulas = [100, 50, 20, 10, 5, 2, 1];

  console.log(valor);

  for (i = 0; i < cedulas.length; i++) {
    quantidade = parseInt(String(valor / cedulas[i]));
    valor = valor % cedulas[i];

    console.log(quantidade + " nota(s) de R$ " + cedulas[i] + ",00");
  }
}
```

O exemplo é uma adaptação didática para compilador online e mantém
`prompt()` como mecanismo de entrada.

## 13. TypeScript e Java
Há semelhanças importantes:

- os elementos são acessados por índices iniciados em `0`;
- os colchetes representam a estrutura;
- laços podem percorrer as posições;
- os elementos possuem um tipo.

Também há diferenças:

- TypeScript usa `number[]` para vetores numéricos;
- Java pode usar tipos como `int[]` e `double[]`;
- um array Java é criado com tamanho definido;
- os arrays usados nesta aula em TypeScript podem crescer durante a execução.

Não devemos escrever `int` em TypeScript nem afirmar que `number[]` possui
tamanho fixo.

## 14. Padrão didático adotado

- declarar os vetores no início do bloco;
- indicar `number[]`, `string[]` ou `boolean[]`;
- inicializar o vetor depois;
- preencher e percorrer por índices;
- usar laços explícitos;
- não usar `map`, `filter`, `reduce` ou `sort` nesta etapa;
- separar entrada textual, conversão, processamento e saída.

## 15. Erros comuns

- esquecer que o primeiro índice é `0`;
- usar `i <= vetor.length`;
- misturar textos e números no mesmo vetor;
- esquecer de converter elementos produzidos por `split()`;
- calcular uma média dividindo por uma quantidade incorreta;
- acessar o primeiro elemento de um vetor vazio;
- ignorar o possível `null` retornado por `prompt()`.

## 16. Fechamento
Nesta aula, aprendemos a:

1. declarar vetores tipados;
2. acessar e alterar elementos por índice;
3. usar `length`;
4. preencher e percorrer vetores com `for`;
5. converter `string[]` em `number[]`;
6. calcular soma, média, maior valor e posição;
7. realizar uma busca linear.

## Saiba mais
- TypeScript Handbook - Everyday Types: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays
- MDN - Array: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
- MDN - String.prototype.split(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
