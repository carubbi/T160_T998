# Aula 5 - Exercício 3

## Descrição narrativa
1. Ler a média final.
2. Se média >= 9, mostrar "Conceito A".
3. Senão, se média >= 7, mostrar "Conceito B".
4. Senão, se média >= 5, mostrar "Conceito C".
5. Caso contrário, mostrar "Conceito D".

## Fluxograma

```mermaid
flowchart TD
A([INICIO]) --> B[\media\]
B --> C{media >= 9}
C -- TRUE --> D[/Conceito A/]
C -- FALSE --> E{media >= 7}
E -- TRUE --> F[/Conceito B/]
E -- FALSE --> G{media >= 5}
G -- TRUE --> H[/Conceito C/]
G -- FALSE --> I[/Conceito D/]
D --> J([FIM])
F --> J
H --> J
I --> J
```

## Teste de mesa

| media | saída |
| --- | --- |
| 9.2 | Conceito A |
| 8.2 | Conceito B |
| 5.5 | Conceito C |
| 3.9 | Conceito D |
