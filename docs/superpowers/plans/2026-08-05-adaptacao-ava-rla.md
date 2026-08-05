# Adaptação integral do AVA para RLA — Plano de implementação

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Converter todos os blocos locais de `prof/AVA` para T160 — Raciocínio Lógico Algorítmico — 2026.2, preservando o formato modular do AVA de RPG e eliminando o conteúdo disciplinar legado.

**Architecture:** Manter um fragmento HTML independente por assunto e um único bloco de avaliações para as turmas 90/91. Derivar currículo, método e bibliografia do projeto de ensino; derivar datas e operação do cronograma; usar o README de RPG somente como modelo estrutural e documental.

**Tech Stack:** HTML fragmentado para AVA/Moodle, Markdown, `xmllint`, Ripgrep, shell.

## Global Constraints

- A especificação aprovada é `docs/superpowers/specs/2026-08-05-adaptacao-ava-rla-design.md`.
- As fontes canônicas estão em `mat/ensino`.
- O repositório e os materiais locais de RLA são `https://github.com/carubbi/RLA`, `mat/aulas` e `mat/exs`.
- Beecrowd e OBI devem aparecer como fontes de exercícios em `mat_apoio.html`.
- O `README.md` deve preservar a estrutura e o nível de detalhamento do README de RPG, com conteúdo integralmente adaptado para RLA.
- A linguagem da disciplina é TypeScript executado em compiladores online.
- A fórmula é `AVx = 0,20 × max(AFx.1, AFx.2) + 0,80 × ASx`.
- AS significa Avaliação Somativa.
- Não alterar arquivos fora de `prof/AVA`.
- Preservar todas as alterações preexistentes no workspace.
- `/prof` é ignorado pelo Git; validar e relatar as alterações locais sem tentar adicioná-las ao versionamento.

---

### Task 1: Identidade, visão da disciplina e plano de ensino

**Files:**
- Modify: `prof/AVA/apres.html`
- Modify: `prof/AVA/visao_geral.html`
- Modify: `prof/AVA/motivacao.html`
- Modify: `prof/AVA/pre-req.html`
- Modify: `prof/AVA/plan_ensino.html`
- Read: `mat/ensino/proj_ensino_2026.md:1-79`

**Interfaces:**
- Consumes: identificação, ementa, objetivos, cargas horárias, conteúdos e ODS do projeto de ensino.
- Produces: cinco fragmentos autossuficientes que apresentam RLA sem referências a RPG.

- [ ] **Step 1: Capture a content baseline**

Run:

```bash
shasum -a 256 prof/AVA/apres.html prof/AVA/visao_geral.html prof/AVA/motivacao.html prof/AVA/pre-req.html prof/AVA/plan_ensino.html
```

Expected: five hashes, used only to confirmar que cada arquivo foi substituído.

- [ ] **Step 2: Replace the welcome, overview, motivation, and prerequisite fragments**

Use `apply_patch` to make the four short fragments express exactly these facts:

```text
apres.html
- Bem-vindo(a) ao semestre de 2026.2.
- T160 — Raciocínio Lógico Algorítmico.
- Teoria, representação de algoritmos, programação em TypeScript,
  resolução de problemas e testes.

visao_geral.html
- Unidade I — Utilização de algoritmos na resolução de problemas (14h).
- Unidade II — Estruturas de controle de fluxo (18h).
- Unidade III — Aplicação de algoritmos em problemas computacionais (22h).
- Unidade IV — Estruturas de dados simples e suas aplicações (18h).
- Fluxogramas, pseudocódigo, testes de mesa, TypeScript e compiladores online.

motivacao.html
- Algoritmos transformam problemas em sequências precisas e verificáveis.
- Progressão: decomposição; entrada/processamento/saída; controle de fluxo;
  funções; vetores e matrizes; busca e ordenação.
- Nenhum placeholder ou legenda de imagem de Grafos.

pre-req.html
- Pré-requisito institucional: inexistente.
- Não é exigida experiência prévia em programação.
- Recomenda-se familiaridade básica com computador, leitura cuidadosa,
  raciocínio passo a passo e disposição para testar soluções.
```

Use `h3` para o título principal, `h4` para subtítulos e listas `ul` ou `ol`
quando houver três ou mais itens.

- [ ] **Step 3: Replace the teaching plan**

Rebuild `plan_ensino.html` with this exact hierarchy and curriculum:

```text
h2 Plano de ensino
h3 Identificação
- Disciplina: T160 — Raciocínio Lógico Algorítmico
- Carga horária: 72 horas
- Modalidade: presencial
- Pré-requisito: inexistente

h3 Ementa
- Utilização de algoritmos na resolução de problemas.
- Implantação das estruturas de controle de fluxo em algoritmos computacionais.
- Aplicação de algoritmos em problemas computacionais.
- Estruturas de dados simples e suas aplicações.

h3 Unidade I — Utilização de algoritmos na resolução de problemas (14h)
- Conceitual: Caracterizar o papel dos algoritmos no processo de resolução de
  problemas do mundo moderno.
- Procedimental: Desenvolver programas com elementos fundamentais de
  linguagens de programação.
- Atitudinal: Valorar o algoritmo como um solucionador de problemas.
- 01.01 — Conceito e representação simbólica de algoritmos.
- 01.02 — Ambiente computacional para o desenvolvimento de algoritmos.
- 01.03 — Variáveis, tipos de dados, expressões e operadores.
- 01.04 — Entrada e saída de dados.

h3 Unidade II — Implantação das estruturas de controle de fluxo em algoritmos computacionais (18h)
- Conceitual: Explicar o funcionamento de programas com o uso das estruturas
  sequencial, condicional e de repetição.
- Procedimental: Aplicar estruturas de controle na resolução de problemas
  computacionais.
- Atitudinal: Ser crítico no uso das estruturas de controle de fluxo na
  programação.
- 02.01 — Sequenciamento de comandos para estruturar um algoritmo.
- 02.02 — Estruturas condicionais simples, compostas e encadeadas: uso de if,
  if-else, else-if e switch-case.
- 02.03 — Estruturas de repetição: uso de while, do while e for.

h3 Unidade III — Aplicação de algoritmos em problemas computacionais (22h)
- Conceitual: Identificar algoritmos adequados para a aplicação em problemas
  computacionais.
- Procedimental: Decompor problemas em funções e implementar algoritmos
  fundamentais com estruturas de controle.
- Atitudinal: Valorar a importância dos algoritmos e suas combinações para a
  resolução de problemas computacionais.
- 03.01 — Reutilização de código com o uso de funções.
- 03.02 — Algoritmo de troca de valores.
- 03.03 — Algoritmo de contagem, soma e multiplicação.
- 03.04 — Algoritmo de fatorial.
- 03.05 — Algoritmo de sequência de Fibonacci.
- 03.06 — Algoritmo de conversão de base.
- 03.07 — Algoritmo de geração dos n-primeiros números primos.
Parágrafo com a sequência pedagógica: estudar 03.02 a 03.07 antes de 03.01,
para introduzir funções pela decomposição e refatoração das soluções.

h3 Unidade IV — Estruturas de dados simples e suas aplicações (18h)
- Conceitual: Identificar cenários propícios para o emprego de estruturas de
  dados.
- Procedimental: Desenvolver algoritmos com vetores, matrizes, busca e
  ordenação.
- Atitudinal: Exercer criticidade na escolha de estruturas de dados e técnicas
  algorítmicas adequadas.
- 04.01 — Armazenamento de um conjunto de dados: vetores e matrizes.
- 04.02 — Técnicas de busca: busca linear e busca binária.
- 04.03 — Técnicas básicas de ordenação: método da bolha.

h3 Objetivo de Desenvolvimento Sustentável
- ODS 4 — Educação de qualidade, com link
  https://brasil.un.org/pt-br/sdgs/4
```

Every external link must use:

```html
target="_blank" rel="noopener noreferrer"
```

- [ ] **Step 4: Validate Task 1**

Run:

```bash
xmllint --html --noout prof/AVA/apres.html prof/AVA/visao_geral.html prof/AVA/motivacao.html prof/AVA/pre-req.html prof/AVA/plan_ensino.html
rg -n 'T160|Raciocínio Lógico Algorítmico|Unidade IV|04\\.03|ODS 4|TypeScript|inexistente' prof/AVA/apres.html prof/AVA/visao_geral.html prof/AVA/pre-req.html prof/AVA/plan_ensino.html
```

Expected: exit 0; all required curricular markers appear.

- [ ] **Step 5: Verify removal of legacy identity**

Run:

```bash
if rg -n -i 'Resolução de Problemas com Grafos|T290|T198|DFS|BFS|Euler|Hamilton|Kruskal|Dijkstra|Ford-Fulkerson|ODS 9|Python|Java' prof/AVA/apres.html prof/AVA/visao_geral.html prof/AVA/motivacao.html prof/AVA/pre-req.html prof/AVA/plan_ensino.html; then exit 1; fi
```

Expected: exit 0 and no output.

---

### Task 2: Metodologia, avaliações, contrato e integridade

**Files:**
- Modify: `prof/AVA/metodo.html`
- Move: `prof/AVA/aval_T290-09-19_62-63.html` to `prof/AVA/aval_T160-90-91.html`
- Modify: `prof/AVA/contrato.html`
- Modify: `prof/AVA/fraude.html`
- Read: `mat/ensino/proj_ensino_2026.md:207-233`
- Read: `mat/ensino/cronograma_2026_2_turmas_90-91.md:16-47`
- Read: `mat/ensino/cronograma_2026_2_turmas_90-91.md:266-313`

**Interfaces:**
- Consumes: organização das aulas, fórmula, instrumentos, datas e regras de aplicação.
- Produces: quatro fragmentos coerentes com avaliações individuais de RLA.

- [ ] **Step 1: Rebuild the methodology fragment**

Use `apply_patch` to give `metodo.html` this exact structure:

```text
h3 Metodologia

h4 Organização das aulas
- Aula teórica: construir conceitos, representar algoritmos, analisar soluções
  e preparar avaliações teóricas.
- Aula prática: aplicar conceitos em TypeScript, resolver problemas, executar
  testes e corrigir soluções.
- Aula integrada: articular sistematização conceitual e aplicação prática
  imediata quando o calendário impedir a sequência semanal usual.

h4 Estratégias de aprendizagem
- descrição narrativa, fluxograma e pseudocódigo;
- teste de mesa e rastreamento de variáveis;
- implementação em TypeScript em compilador online;
- casos de teste, execução, observação e depuração;
- resolução de problemas do material, Beecrowd e OBI quando indicados.

h4 Avaliação Formativa — AF
- duas AFs obrigatórias por AV;
- 40 minutos de dúvidas e revisão e 60 minutos de aplicação;
- 10 questões objetivas de múltipla escolha no estilo ENADE;
- maior nota entre AFx.1 e AFx.2 constitui a AF final;
- peso de 20%.

h4 Avaliação Somativa — AS
- uma prova individual de codificação por AV;
- duração de 100 minutos;
- duas questões da OBI adaptadas para TypeScript;
- compilador online, AVA/Moodle e Safe Exam Browser;
- peso de 80%;
- revisão integral no encontro imediatamente anterior.

h4 Composição
- AVx = 0,20 × max(AFx.1, AFx.2) + 0,80 × ASx.
- AS significa Avaliação Somativa, não Avaliação Substitutiva.

h4 Aprovação
- MP = (AV1 + AV2) / 2.
- MP inferior a 4 implica reprovação.
- AV3 inferior a 4 implica reprovação.
- NF = (MP + AV3) / 2.
- Aprovação com NF igual ou superior a 5 e frequência mínima de 75%.
```

- [ ] **Step 2: Rename and verify the assessment block**

Use `apply_patch` with `*** Move to:` to rename the file:

```text
prof/AVA/aval_T290-09-19_62-63.html
→ prof/AVA/aval_T160-90-91.html
```

Keep the already adapted RLA content. Correct only discrepancies found against
the canonical dates and formula:

```text
AF1.1 01/09; AF1.2 08/09; revisão 10/09; AS1 15/09
AF2.1 15/10; AF2.2 27/10; revisão 29/10; AS2 03/11
AF3.1 24/11; AF3.2 01/12; revisão 03/12; AS3 08/12
Segundas chamadas: 25/09 21h–22h40; 13/11 21h–22h40;
09/12 19h–20h40
```

- [ ] **Step 3: Rebuild the didactic contract**

Keep the headings Comunicação, Frequência, Convivência e dispositivos, and
Atividades e prazos. Replace the legacy final section with:

```html
<h4>Atividades e prazos</h4>
<ul>
    <li>O estudante deverá acompanhar o cronograma, os avisos e os prazos publicados no AVA/Moodle;</li>
    <li>as duas AFs de cada AV são obrigatórias, embora somente a maior nota componha a AF final;</li>
    <li>o estudante é responsável por testar previamente o acesso ao AVA/Moodle, ao Safe Exam Browser e ao compilador online;</li>
    <li>exercícios e programas deverão ser produzidos com compreensão das decisões, dos comandos e dos casos de teste utilizados;</li>
    <li>situações excepcionais serão tratadas conforme as normas institucionais.</li>
</ul>
```

- [ ] **Step 4: Rebuild academic-integrity guidance**

Use these exact policy boundaries:

```text
- AFs e ASs: sem consulta, comunicação ou auxílio não autorizado.
- É vedado compartilhar respostas, apresentar código de terceiros como próprio
  ou manipular evidências de execução e autoria.
- Fora das avaliações, bibliografia, documentação, Beecrowd, provas anteriores
  da OBI e IA podem apoiar o estudo quando a atividade não proibir e o
  estudante compreender e conseguir explicar a solução.
- Código ou ideia externa deve ser identificada quando incorporada a uma
  atividade entregue.
- As ocorrências serão analisadas conforme evidências e normas institucionais.
```

Do not mention AP, AT, group work, presentations, GitHub commits, `Accepted`,
Python, or Java.

- [ ] **Step 5: Validate Task 2**

Run:

```bash
xmllint --html --noout prof/AVA/metodo.html prof/AVA/aval_T160-90-91.html prof/AVA/contrato.html prof/AVA/fraude.html
test ! -e prof/AVA/aval_T290-09-19_62-63.html
rg -n '0,20.*0,80|Avaliação Somativa|Safe Exam Browser|TypeScript|01/09|08/09|15/09|15/10|27/10|03/11|24/11|01/12|08/12' prof/AVA/metodo.html prof/AVA/aval_T160-90-91.html
```

Expected: exit 0; the old filename is absent and every required rule appears.

- [ ] **Step 6: Verify removal of the legacy assessment model**

Run:

```bash
if rg -n -i '\\bAT\\b|\\bAP\\b|0,70|0,30|T1|T2|T3|Accepted|trabalho em grupo|apresentação|Python|Java|grafos' prof/AVA/metodo.html prof/AVA/contrato.html prof/AVA/fraude.html; then exit 1; fi
```

Expected: exit 0 and no output.

---

### Task 3: Bibliografia, materiais e recursos complementares

**Files:**
- Modify: `prof/AVA/bibliografia.html`
- Modify: `prof/AVA/mat_apoio.html`
- Modify: `prof/AVA/recursos.html`
- Modify: `prof/AVA/refs.html`
- Modify: `prof/AVA/saiba_mais.html`
- Read: `mat/ensino/proj_ensino_2026.md:166-187`
- Read: `mat/ensino/cronograma_2026_2_turmas_90-91.md:314-339`

**Interfaces:**
- Consumes: bibliografia oficial, organização dos materiais locais e fontes de exercícios.
- Produces: cinco fragmentos de apoio sem referências específicas de Grafos.

- [ ] **Step 1: Replace the official bibliography**

Build `bibliografia.html` with exactly three sections:

```text
h3 Bibliografia
h4 Bibliografia básica
- ASCENCIO, Ana Fernanda Gomes; CAMPOS, Edilene Aparecida Veneruchi de.
  Fundamentos da programação de computadores: algoritmos, Pascal, C/C++
  (padrão ANSI) e Java. 3. ed. São Paulo: Pearson Education do Brasil, 2012.
  569 p. ISBN 9788564574168. (Cód.: 8906x7)
- FORBELLONE, Andre Luiz Vilar; EBERSPACHER, Henri Frederico. Lógica de
  programação: a construção de algoritmos e estruturas de dados. 4. ed.
  Reimpressão (2023). São Paulo; Porto Alegre: Pearson Education do Brasil:
  Bookman, 2022. 305 p. ISBN 9788582605721. (Cód.: 34391)
- MANZANO, José Augusto N. G.; OLIVEIRA, Jayr Figueiredo de. Algoritmos:
  lógica para desenvolvimento de programação de computadores. 29. ed. São
  Paulo: Érica, 2019. 1 recurso online. ISBN 9788536531472. Minha Biblioteca:
  https://integrada.minhabiblioteca.com.br/books/9788536531472. Acesso em:
  23 mar. 2026. Esta obra está prevista para sair do catálogo em breve.
  (DIGITAL) (Cód.: 573744)
- DROMEY, R. G. How to Solve It by Computer. Englewood Cliffs:
  Prentice-Hall, 1982.

h4 Bibliografia complementar
- AGUILAR, Luis Joyanes. Fundamentos de programação: algoritmos, estruturas de
  dados e objetos. 3. ed. Porto Alegre: AMGH, 2008. 1 recurso online.
  ISBN 9788580550146. Minha Biblioteca:
  https://integrada.minhabiblioteca.com.br/books/9788580550146. Acesso em:
  23 mar. 2026. (DIGITAL) (Cód.: 568371)
- CORMEN, Thomas H. et al. Algoritmos: teoria e prática. 3. ed. São Paulo:
  GEN LTC, 2012. 1 recurso online. ISBN 9788595158092. Minha Biblioteca:
  https://integrada.minhabiblioteca.com.br/books/9788595158092. Acesso em:
  23 mar. 2026. (DIGITAL) (Cód.: 575841)
- FLANAGAN, David. JavaScript: o guia definitivo. 6. ed. Porto Alegre:
  Bookman, 2013. 1 recurso online. ISBN 9788565837484. Minha Biblioteca:
  https://integrada.minhabiblioteca.com.br/books/9788565837484. Acesso em:
  24 mar. 2026. (DIGITAL) (Cód.: 568844)
- MEYERS, Scott. C++ eficaz: 55 maneiras de aprimorar seus programas e
  projetos. 3. ed. Porto Alegre: Bookman, 2011. 1 recurso online.
  ISBN 9788577808205. Minha Biblioteca:
  https://integrada.minhabiblioteca.com.br/books/9788577808205. Acesso em:
  23 mar. 2026. (DIGITAL) (Cód.: 567049)
- PIVA JUNIOR, Dilermando et al. Algoritmos e programação de computadores.
  2. ed. Rio de Janeiro: Elsevier, 2019. 1 recurso online.
  ISBN 9788595150508. Minha Biblioteca:
  https://integrada.minhabiblioteca.com.br/books/9788595150508. Acesso em:
  23 mar. 2026. (DIGITAL) (Cód.: 574708)

h4 Periódicos
- Science of Computer Programming. Amsterdã: Elsevier, 1981-. Quinzenal.
  ISSN 0167-6423. https://www.sciencedirect.com/journal/science-of-computer-programming.
  Acesso em: 23 mar. 2026.
- Programming and Computer Software. New York: Springer, 2000-.
  ISSN 0361-7688. https://link.springer.com/journal/11086.
  Acesso em: 23 mar. 2026.
- Numerical Algorithms. Basel: Springer Nature, 1991-. Trimestral.
  ISSN 1017-1398.
  https://link.springer.com/journal/11075/volumes-and-issues/79-2.
  Acesso em: 4 ago. 2026. Possui Qualis A2 na área de Ciência da Computação,
  quadriênio 2017-2020. Portal de Periódicos Capes, base Springer.
```

- [ ] **Step 2: Replace the material-support fragment**

Use this exact organization:

```text
h3 Material de apoio
- GitHub RLA: https://github.com/carubbi/RLA

h4 Unidade I — Fundamentos
- Aula 1
- Aula 2
- Aula 3

h4 Unidade II — Estruturas de controle
- Aula 4
- Aula 5
- Aula 6
- Aula 7

h4 Unidade III — Algoritmos e funções
- Aula 8

h4 Unidade IV — Estruturas de dados simples
- Aula 9
- Aula 10
- Aula 11

h4 Exercícios e problemas
- Acervo local: https://github.com/carubbi/RLA/tree/main/mat/exs
- Beecrowd: https://judge.beecrowd.com/pt
- OBI: https://olimpiada.ic.unicamp.br/
- Provas anteriores da OBI: https://olimpiada.ic.unicamp.br/passadas/
- Informar que as questões de AS são adaptadas da OBI para TypeScript.
```

Link every lesson to
`https://github.com/carubbi/RLA/tree/main/mat/aulas/aulaN`.

- [ ] **Step 3: Replace resources, additional references, and further study**

Set the responsibilities without duplicating content:

```text
recursos.html
- TypeScript Playground: https://www.typescriptlang.org/play
- VisuAlgo: https://visualgo.net/en
- Beecrowd: https://judge.beecrowd.com/pt
- Alerta: as ferramentas apoiam, mas não substituem testes de mesa, casos de
  teste, execução e depuração.

refs.html
- TypeScript Handbook: https://www.typescriptlang.org/docs/handbook/intro.html
- MDN JavaScript Guide:
  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide
- Beecrowd and OBI official portals.
- Do not repeat the official bibliography.

saiba_mais.html
- Heading “Saiba mais”.
- State “Aprofundamento opcional e não avaliativo, salvo indicação expressa
  do professor”.
- Link to Beecrowd problem practice.
- Link to prior OBI competitions and tasks.
- Explain progressive practice: understand the problem, identify
  input-processing-output, design, implement, test, and compare solutions.
```

- [ ] **Step 4: Validate Task 3**

Run:

```bash
xmllint --html --noout prof/AVA/bibliografia.html prof/AVA/mat_apoio.html prof/AVA/recursos.html prof/AVA/refs.html prof/AVA/saiba_mais.html
rg -n 'carubbi/RLA|mat/aulas/aula11|mat/exs|Beecrowd|beecrowd|OBI|olimpiada\\.ic\\.unicamp\\.br|TypeScript' prof/AVA/mat_apoio.html prof/AVA/recursos.html prof/AVA/refs.html prof/AVA/saiba_mais.html
```

Expected: exit 0 and every requested source appears.

- [ ] **Step 5: Verify removal of graph-specific sources**

Run:

```bash
if rg -n -i 'carubbi/RPG|algs4|SNAP|Graph Online|Nature|Newman|grafos|DFS|BFS|Dijkstra|Ford-Fulkerson' prof/AVA/bibliografia.html prof/AVA/mat_apoio.html prof/AVA/recursos.html prof/AVA/refs.html prof/AVA/saiba_mais.html; then exit 1; fi
```

Expected: exit 0 and no output.

---

### Task 4: README canônico e validação final

**Files:**
- Modify: `prof/AVA/README.md`
- Verify unchanged: `prof/AVA/mini_cv.html`
- Verify unchanged: `prof/AVA/imgs/perfil.jpeg`
- Verify: all `prof/AVA/*.html`

**Interfaces:**
- Consumes: every final HTML fragment and the approved design.
- Produces: publication map, content inventory, validation checklist, and a verified AVA package.

- [ ] **Step 1: Rebuild README from the RPG model**

Preserve this top-level structure:

```text
# Estrutura do AVA/Moodle — 2026.2
## Finalidade
## Arquivos
### Blocos comuns
### Bloco de avaliação
## Mapa interno de publicação
## Conteúdo consolidado
### one subsection per HTML fragment
## Padrão técnico
## Validação anterior à publicação
```

The README must state:

```text
- Disciplina: T160 — Raciocínio Lógico Algorítmico.
- Turmas: teórica 90 e prática 91.
- One evaluation fragment: aval_T160-90-91.html.
- Every container receives all common blocks and this assessment block.
- The HTML fragments do not identify class codes, except the assessment
  filename and the internal publication map.
- mini_cv.html and imgs/perfil.jpeg preserve the current photo-insertion flow.
- Beecrowd and OBI are exercise sources in mat_apoio.html.
```

For “Conteúdo consolidado”, describe the actual final content of every file:
`apres`, `mini_cv`, `visao_geral`, `motivacao`, `pre-req`, `metodo`,
`aval_T160-90-91`, `contrato`, `fraude`, `plan_ensino`, `bibliografia`,
`mat_apoio`, `recursos`, `refs`, and `saiba_mais`.

The validation checklist must explicitly confirm:

```text
2026.2; T160; 72h; four units; ODS 4; no prerequisite; TypeScript;
AF 20%; AS 80%; both AFs mandatory; highest AF selected; SEB;
all evaluation and second-call dates; Beecrowd; OBI; absence of RPG legacy;
HTML structure; external-link attributes; absence of embedded images.
```

- [ ] **Step 2: Validate every HTML fragment**

Run:

```bash
for file in prof/AVA/*.html; do xmllint --html --noout "$file" || exit 1; done
```

Expected: exit 0 and no parser errors.

- [ ] **Step 3: Validate file inventory**

Run:

```bash
test -f prof/AVA/aval_T160-90-91.html
test ! -e prof/AVA/aval_T290-09-19_62-63.html
for file in apres bibliografia contrato fraude mat_apoio metodo mini_cv motivacao plan_ensino pre-req recursos refs saiba_mais visao_geral; do test -f "prof/AVA/$file.html" || exit 1; done
test -f prof/AVA/imgs/perfil.jpeg
```

Expected: exit 0.

- [ ] **Step 4: Run semantic legacy scan**

Run:

```bash
rg -n -i 'Resolução de Problemas com Grafos|T290|T198|teoria dos grafos|DFS|BFS|Euler|Hamilton|Kruskal|Dijkstra|Ford-Fulkerson|0,70|0,30|carubbi/RPG|algs4|SNAP|Graph Online|Nature|Newman|ODS 9' prof/AVA
```

Expected: no matches, except mentions in `README.md` that explicitly document
the absence of legacy content. Rewrite those checklist phrases if they create
false positives.

- [ ] **Step 5: Validate required RLA invariants**

Run:

```bash
rg -n 'T160|Raciocínio Lógico Algorítmico|Unidade IV|ODS 4|TypeScript|Beecrowd|OBI|Avaliação Somativa|Safe Exam Browser|0,20|0,80|25/09|13/11|09/12' prof/AVA
```

Expected: every invariant appears in the appropriate fragment and is documented
in the README.

- [ ] **Step 6: Check external-link hygiene**

Run:

```bash
if rg -n '<a href="https?://[^"]+"(?! target="_blank" rel="noopener noreferrer")' prof/AVA/*.html --pcre2; then exit 1; fi
```

Expected: exit 0 and no output.

- [ ] **Step 7: Inspect the final scope**

Run:

```bash
find prof/AVA -maxdepth 2 -type f | sort
git status --short
```

Expected: the AVA inventory is complete; unrelated preexisting changes remain
untouched. Because `/prof` is ignored, the final report must enumerate the
locally modified files instead of claiming they appear in `git diff`.
