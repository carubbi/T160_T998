<img src="../imgs/UNIFOR_logo1b.png" width="400">

# Raciocínio Lógico Algorítmico
Orientador: Prof. Me Ricardo Carubbi

## Aula 3: Variáveis, Tipos e Operadores

### Objetivo da aula
Compreender como representar dados em algoritmos e aplicar operadores para construir expressões corretas em problemas computacionais.

### 1. Variáveis
Variáveis são espaços de memória usados para armazenar valores que podem mudar durante a execução de um algoritmo.

Exemplos:

```typescript
let idade: number;
let media: number;
let nome: string;

idade = 20;
media = 8.5;
nome = "Ana";
```

Boas práticas:
- usar nomes claros (`quantidadeAlunos`, `notaFinal`);
- declarar explicitamente o tipo de cada variável;
- inicializar variáveis antes de usar;
- evitar palavras reservadas da linguagem como nome de variável;
- evitar nomes genéricos como `x`, `y` quando o contexto não for matemático.

#### 1.1 Palavras reservadas (principais)
Palavras reservadas não devem ser usadas como identificadores, como nomes de
variáveis ou funções.

Principais palavras que aparecerão na disciplina:
- `let`, `const`, `var`
- `if`, `else`, `switch`, `case`, `default`
- `for`, `while`, `do`, `break`, `continue`
- `function`, `return`
- `class`, `extends`, `constructor`, `super`
- `try`, `catch`, `finally`, `throw`
- `new`, `this`, `typeof`, `instanceof`, `delete`
- `import`, `export`, `from`
- `async`, `await`
- `true`, `false`, `null`

### 2. Tipos de variáveis
O tipo define quais valores uma variável pode guardar e quais operações são permitidas.

Principais tipos em TypeScript:
- `number`: inteiros e decimais (`-3`, `0`, `3.14`);
- `string`: textos (`"Computação"`, `'A'`);
- `boolean`: `true` ou `false`;
- `undefined`: ausência de um valor definido;
- `null`: ausência intencional de valor.

TypeScript usa `number` tanto para inteiros quanto para valores decimais. As
anotações de tipo ajudam o compilador a identificar operações incompatíveis,
como multiplicar um texto por um número.

#### 2.1 O tipo `any`

O tipo `any` permite que uma variável receba valores de qualquer tipo e
desativa a verificação de tipos para aquela variável:

```typescript
let valor: any;

valor = "dez";
console.log(valor * 2); // compila, mas produz NaN
```

> `any` será apresentado para fins de compreensão, mas não será utilizado nos
> exemplos e exercícios da disciplina. Todas as soluções devem declarar tipos
> específicos.

### 3. Operadores
Operadores permitem manipular e comparar dados.

#### 3.1 Atribuição
Usado para armazenar valor em variável.
- `=` atribui valor
- `+=`, `-=`, `*=`, `/=` atualizam com base no valor atual
Exemplo: `contador += 1;`

#### 3.2 Relacionais/comparação
Retornam valor booleano.
- `===` estritamente igual (valor e tipo)
- `!==` estritamente diferente
- `>` maior que
- `<` menor que
- `>=` maior ou igual
- `<=` menor ou igual

Exemplo:
`idade >= 18` retorna `true` se a idade for 18 ou mais.

#### 3.3 Lógicos
Combinam expressões booleanas.
- `&&` (E): `true` se ambas forem verdadeiras
- `||` (OU): `true` se ao menos uma for verdadeira
- `!` (NÃO): inverte o valor lógico

Exemplo:
`(nota >= 6.0) && (frequencia >= 75)`

#### 3.3.1 Tabela-verdade
**`&&` (E)**

| A | B | A && B (A e B) |
|---|---|--------|
| `false` | `false` | `false` |
| `false` | `true`  | `false` |
| `true`  | `false` | `false` |
| `true`  | `true`  | `true`  |

**`||` (OU)**

| A | B | A \|\| B (A ou B) |
|---|---|----------|
| `false` | `false` | `false` |
| `false` | `true`  | `true`  |
| `true`  | `false` | `true`  |
| `true`  | `true`  | `true`  |

**`!` (NEGAÇÃO)**

| A | !A (nega A) |
|---|----|
| `false` | `true`  |
| `true`  | `false` |

### Exemplo integrado (TypeScript)

```typescript
// Declaracao de variaveis
let idade: number;
let nota: number;
let aprovado: boolean;

// Entrada
idade = 19;
nota = 7.2;

// Processamento
aprovado = (idade >= 18) && (nota >= 6.0);

// Saída
console.log(aprovado); // true
```

### Fechamento
Nesta aula, vimos como:
1. declarar e usar variáveis;
2. escolher tipos adequados de dados;
3. aplicar operadores para criar expressões em algoritmos.

Esses conceitos são base para estruturas de decisão (`if`), repetição (`for`,
`while`) e funções em TypeScript.

### Saiba mais
- Documentação oficial do TypeScript: https://www.typescriptlang.org/docs/
- Tipos de uso cotidiano: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
