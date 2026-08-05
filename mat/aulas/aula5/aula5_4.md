# Aula 5 - Exercício 4

## Descrição narrativa
1. Ler o valor numérico do dia da semana.
2. Comparar o valor com os casos de 1 a 7.
3. Mostrar o nome correspondente ao dia.
4. Se não estiver entre 1 e 7, mostrar "Dia invalido".

## Fluxograma

```mermaid
flowchart TD
A([INICIO]) --> B[\dia\]
B --> C{dia == 1..7?}
C -- TRUE --> D[/Mostra nome do dia/]
C -- FALSE --> E[/Dia invalido/]
D --> F([FIM])
E --> F
```

## Teste de mesa

| dia | saída |
| --- | --- |
| 1 | Domingo |
| 3 | Terca-feira |
| 7 | Sabado |
| 9 | Dia invalido |
