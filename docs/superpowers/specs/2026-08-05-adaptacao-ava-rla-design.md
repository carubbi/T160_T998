# Adaptação integral do AVA para RLA — Especificação

## 1. Objetivo

Substituir integralmente, em `prof/AVA`, o conteúdo disciplinar legado de
Resolução de Problemas com Grafos (RPG) por blocos HTML destinados à disciplina
T160 — Raciocínio Lógico Algorítmico (RLA), no semestre 2026.2.

A adaptação deve manter o formato modular de publicação no AVA/Moodle e usar os
documentos de `mat/ensino` como fontes canônicas. Não devem permanecer conteúdos
híbridos entre RLA e RPG.

## 2. Fontes canônicas

- `mat/ensino/proj_ensino_2026.md`: identificação, ementa, objetivos, conteúdos,
  cargas horárias, ODS, bibliografia e metodologia de avaliação.
- `mat/ensino/cronograma_2026_2_turmas_90-91.md`: organização das aulas,
  linguagem e ambientes, datas de avaliações, revisões, segundas chamadas,
  registros e distribuição semanal dos conteúdos.
- `mat/ensino/calendario_2026_2.md`: limites e datas institucionais.
- `mat/ensino/turmas_2026_2.md` e `mat/ensino/horarios.md`: turmas, salas,
  dias, horários e interpretação dos códigos institucionais.
- `mat/aulas` e `mat/exs`: materiais didáticos e exercícios existentes no
  repositório.

Em caso de divergência, o projeto de ensino prevalece para informações
curriculares e avaliativas; o cronograma prevalece para a operacionalização
das turmas 90/91 e para as datas.

## 3. Estratégia

Preservar a arquitetura de blocos HTML independentes usada no AVA de RPG, mas
reescrever todo conteúdo disciplinar para RLA. O `README.md` deve conservar a
organização, o nível de detalhamento, o mapa de publicação, o padrão técnico e
o checklist de validação do README de RPG. Seu conteúdo, entretanto, será
integralmente específico de RLA.

O arquivo legado `aval_T290-09-19_62-63.html` será renomeado para
`aval_T160-90-91.html`. Como existe somente um conjunto de turmas e datas nas
fontes canônicas atuais, haverá somente um bloco de avaliação.

## 4. Escopo por arquivo

### `README.md`

- identificar T160 — Raciocínio Lógico Algorítmico e o semestre 2026.2;
- listar os blocos comuns e o bloco de avaliação;
- explicar o mapa interno de publicação;
- descrever o conteúdo consolidado de cada arquivo;
- registrar o padrão técnico dos fragmentos HTML;
- fornecer checklist de validação antes da publicação;
- seguir como modelo estrutural o README existente de RPG, sem reproduzir
  regras ou conteúdos próprios de Grafos.

### `apres.html`

- apresentar a disciplina e o semestre;
- indicar a integração entre teoria, representação de algoritmos, programação
  em TypeScript, resolução de problemas e testes;
- orientar o estudante a consultar metodologia, cronograma, avaliações e
  materiais.

### `visao_geral.html`

- apresentar as quatro unidades e suas cargas horárias: 14h, 18h, 22h e 18h;
- formular um resultado de aprendizagem coerente com o projeto de ensino;
- explicitar o uso de TypeScript, compiladores online, pseudocódigo,
  fluxogramas e testes de mesa.

### `motivacao.html`

- explicar a relevância do raciocínio algorítmico em problemas cotidianos e
  computacionais;
- relacionar decomposição, precisão, controle de fluxo, funções, vetores,
  matrizes, busca e ordenação;
- remover os quatro placeholders e todas as legendas de imagens de Grafos;
- não criar novos placeholders sem uma imagem de RLA disponível e aprovada.

### `pre-req.html`

- informar que não existe pré-requisito institucional;
- apresentar como recomendação apenas familiaridade básica com uso de
  computador e disposição para resolver problemas, sem exigir programação
  prévia.

### `metodo.html`

- distinguir aula teórica, aula prática e aula integrada;
- explicar o uso de TypeScript em compiladores online;
- explicar fluxogramas, pseudocódigo, testes de mesa, execução e depuração;
- descrever AF, AS e a fórmula
  `AVx = 0,20 × max(AFx.1, AFx.2) + 0,80 × ASx`;
- registrar obrigatoriedade das duas AFs, maior nota como AF final, SEB,
  questões no estilo ENADE, problemas da OBI adaptados e revisão integral
  anterior a cada AS;
- preservar as regras institucionais de aprovação já presentes quando
  compatíveis com a disciplina regular.

### `aval_T160-90-91.html`

- preservar o conteúdo RLA já adaptado quando coincidir com as fontes;
- manter datas e conteúdos de AF1.1 a AF3.2, AS1 a AS3 e revisões;
- manter as segundas chamadas comuns em 25/09, 13/11 e 09/12;
- identificar AS como Avaliação Somativa;
- informar TypeScript, compilador online, AVA/Moodle e Safe Exam Browser.

### `contrato.html`

- manter comunicação institucional, tolerância, chamadas, frequência,
  convivência e dispositivos;
- substituir regras de AP e trabalhos em grupo por responsabilidade individual
  nas atividades, exercícios, AFs e ASs;
- orientar cumprimento de prazos, preparação do ambiente e conferência de
  registros.

### `fraude.html`

- aplicar as regras de integridade a AFs, ASs, exercícios e programas;
- vedar consulta ou auxílio não autorizado, compartilhamento de respostas,
  submissão de código de terceiros como próprio e manipulação de evidências;
- permitir estudo com bibliografia, documentação, Beecrowd, provas anteriores
  da OBI e ferramentas de IA fora das avaliações, com compreensão e respeito às
  regras da atividade;
- evitar impor entregas, declarações ou trabalhos em grupo não previstos nas
  fontes canônicas.

### `plan_ensino.html`

- reproduzir identificação, ementa, objetivos e conteúdos das quatro unidades;
- registrar modalidade presencial, carga horária de 72 horas e ausência de
  pré-requisito;
- registrar o ODS 4 — Educação de qualidade;
- manter a sequência pedagógica específica da Unidade III descrita no projeto
  de ensino.

### `bibliografia.html`

- reproduzir integralmente as bibliografias básica e complementar e os
  periódicos do projeto de ensino;
- manter links disponibilizados na fonte canônica;
- não conservar obras específicas de Grafos que não constem do projeto de RLA.

### `mat_apoio.html`

- identificar `https://github.com/carubbi/RLA` como repositório central;
- organizar links para as aulas 1 a 11 conforme as quatro unidades;
- incluir `mat/exs` como acervo local de exercícios;
- destacar o Beecrowd como fonte externa de problemas para prática e submissão;
- destacar a Olimpíada Brasileira de Informática (OBI), especialmente provas e
  tarefas anteriores, como fonte de problemas algorítmicos;
- esclarecer que problemas de OBI usados nas avaliações serão adaptados para
  TypeScript conforme o projeto de ensino;
- manter o AVA/Moodle como canal de comunicação, avaliações, notas e
  orientações.

### `recursos.html`

- substituir recursos específicos de Grafos por ferramentas pertinentes a
  RLA;
- incluir compilador online, visualização ou rastreamento de algoritmos e
  plataformas de problemas somente quando houver destino estável e utilidade
  didática clara;
- não apresentar ferramenta externa como substituta da compreensão, do teste
  de mesa ou da depuração.

### `refs.html`

- apresentar apenas referências adicionais pertinentes a lógica de
  programação, algoritmos, TypeScript/JavaScript, Beecrowd e OBI;
- priorizar destinos oficiais e estáveis;
- não duplicar integralmente a bibliografia oficial.

### `saiba_mais.html`

- substituir o conteúdo sobre redes complexas por aprofundamento opcional em
  resolução de problemas algorítmicos;
- apontar para acervos oficiais de problemas da OBI e para prática no
  Beecrowd;
- informar explicitamente que o aprofundamento é opcional e não avaliativo,
  salvo quando um exercício for indicado pelo professor.

### `mini_cv.html` e `imgs/perfil.jpeg`

- preservar o conteúdo por não conter informação disciplinar de RPG;
- não incorporar a imagem no fragmento, mantendo o fluxo atual de inserção no
  editor do AVA;
- corrigir apenas inconsistências técnicas encontradas durante a validação.

## 5. Conteúdo que deve desaparecer

Os blocos finais não devem conter, salvo quando necessário para explicar uma
sessão compartilhada de segunda chamada:

- Resolução de Problemas com Grafos ou código T290;
- teoria dos grafos, DFS, BFS, conectividade, Euler, Hamilton, árvores
  geradoras, caminhos mínimos ou fluxo máximo;
- AT, AP, fórmula 70%/30%, trabalhos T1–T3 ou apresentações de grupos;
- Python ou Java como linguagens da disciplina;
- repositório `carubbi/RPG`, materiais `algs4`, SNAP, Graph Online ou referências
  específicas de Grafos;
- pré-requisito T198;
- ODS 9 como ODS da disciplina.

A sigla RPG poderá aparecer somente no aviso de que as sessões extraordinárias
de segunda chamada são compartilhadas entre estudantes convocados de RLA e
RPG, pois essa regra consta do cronograma canônico.

## 6. Padrão técnico

- fragmentos HTML sem `html`, `head` ou `body`, adequados à colagem no editor do
  AVA/Moodle;
- hierarquia consistente com `h2`, `h3` e `h4`;
- parágrafos curtos e listas para conteúdos, critérios e datas;
- links externos absolutos com `target="_blank"` e
  `rel="noopener noreferrer"`;
- ausência de estilos inline, exceto no layout de `mini_cv.html`;
- ausência de códigos de turma dentro dos blocos comuns;
- um único bloco de avaliação específico para as turmas 90/91.

## 7. Validação

- validar todos os fragmentos com `xmllint --html --noout`;
- conferir datas, pesos, conteúdos e fórmulas contra `mat/ensino`;
- verificar a presença de RLA, T160, TypeScript, AF, AS, SEB, Beecrowd e OBI
  onde aplicável;
- procurar e eliminar os termos legados listados na seção 5;
- testar links locais e conferir os destinos externos;
- verificar que todos os arquivos listados no README existem;
- confirmar que o README preserva o modelo estrutural de RPG e descreve
  fielmente os novos blocos de RLA;
- preservar todas as alterações preexistentes fora de `prof/AVA`.

## 8. Critério de conclusão

O trabalho estará concluído quando todos os blocos de `prof/AVA` puderem ser
publicados conjuntamente como material de T160 — RLA — 2026.2, sem conteúdo
disciplinar legado de RPG, com informações curriculares e avaliativas
consistentes com `mat/ensino`, e com Beecrowd e OBI identificados como fontes de
exercícios em `mat_apoio.html`.
