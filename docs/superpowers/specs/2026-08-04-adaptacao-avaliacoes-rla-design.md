# Desenho da adaptação do bloco de avaliações para RLA

## Objetivo

Substituir integralmente o conteúdo de
`prof/AVA/aval_T290-09-19_62-63.html` por um bloco de avaliações fiel ao
cronograma docente de Raciocínio Lógico Algorítmico de 2026.2. O nome
preexistente do arquivo será mantido por decisão do usuário, embora ainda
contenha a identificação `T290`.

## Escopo aprovado

- Editar somente o HTML indicado.
- Preservar o formato simples de títulos, parágrafos e listas adequado à colagem
  no AVA/Moodle.
- Remover integralmente composição, siglas, datas, conteúdos e regras de
  aplicação herdados de T290/RPG.
- Recriar o bloco a partir dos dados de T160/RLA.
- Não adaptar os demais blocos de `prof/AVA/` nem seu `README.md`.

## Estrutura do HTML

O bloco terá as seguintes seções:

1. **Avaliações e composição:** definição de AF, AS e AV e fórmula
   `AVx = 0,20 × max(AFx.1, AFx.2) + 0,80 × ASx`.
2. **AV1, AV2 e AV3:** datas, conteúdos e formato das duas AFs, da revisão
   integral e da AS de cada ciclo, além do prazo de registro.
3. **Segundas chamadas comuns:** datas, horários, ambiente e regra de que essas
   sessões não criam encontros regulares adicionais.
4. **Aplicação:** duração e formato de AF e AS, uso do AVA/Moodle, Safe Exam
   Browser e compilador online, além da regra de antecedência entre ensino,
   prática e cobrança.

## Conteúdo avaliativo

- Cada AF é obrigatória, ocupa 100 minutos — 40 para dúvidas e revisão e 60 para
  dez questões objetivas no estilo ENADE — e a maior nota entre as duas AFs
  constitui a AF final.
- Cada AS ocupa 100 minutos e contém duas questões da OBI adaptadas para
  TypeScript, resolvidas em compilador online.
- AV1 abrange variáveis, tipos, entrada e saída, sequenciamento, expressões,
  operadores e condicionais.
- AV2 abrange repetição, funções, modularidade e algoritmos fundamentais.
- AV3 abrange vetores, matrizes, busca linear e binária e Bubble Sort.
- As datas, revisões, segundas chamadas e prazos de registro serão transcritos da
  seção “Avaliações e entregas” do cronograma docente.

## Fonte

A fonte pedagógica e cronológica será
`prof/ensino/cronograma_docente_2026_2.md`, especialmente as seções
“Critérios de planejamento”, “Cronograma por unidade” e “Avaliações e
entregas”.

## Riscos e controles

- O nome do arquivo continuará incompatível com seu conteúdo; ele será preservado
  porque o usuário autorizou expressamente a substituição no repositório de RLA.
- O restante de `prof/AVA/` ainda descreve T290/RPG. A conclusão não apresentará
  o diretório completo como adaptado.
- Regras presentes apenas no HTML antigo, como tolerância de entrada e liberação
  de justificativas, não serão transportadas sem suporte no cronograma canônico.
- Alterações preexistentes fora do alvo serão preservadas.

## Critérios de aceitação

- Não restam no HTML referências a AT, AP, Grafos ou aos conteúdos de T290.
- Fórmula, datas, conteúdos, prazos, segundas chamadas e regras de aplicação
  coincidem com o cronograma docente.
- A estrutura HTML permanece simples e bem formada para o AVA/Moodle.
- Nenhum outro arquivo de `prof/AVA/` é alterado.
