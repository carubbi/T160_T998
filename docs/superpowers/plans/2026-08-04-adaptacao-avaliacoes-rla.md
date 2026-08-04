# RLA Assessment Block Adaptation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the T290/RPG assessment content in the selected AVA HTML block with the complete 2026.2 T160/RLA assessment schedule.

**Architecture:** Keep the artifact as a self-contained HTML fragment for direct use in AVA/Moodle. Treat `prof/ensino/cronograma_docente_2026_2.md` as the sole source of dates, contents, weights, formats, and second-call rules; replace the target fragment in one focused edit and validate its structure and semantic invariants.

**Tech Stack:** HTML fragment, Markdown source, `xmllint`, Ripgrep.

## Global Constraints

- Modify only `prof/AVA/aval_T290-09-19_62-63.html`.
- Preserve the target filename even though it contains `T290`.
- Remove all T290/RPG evaluation content and unsupported AT/AP rules.
- Do not modify other files under `prof/AVA/`.
- Preserve unrelated preexisting workspace changes.

---

### Task 1: Replace and validate the assessment block

**Files:**
- Modify: `prof/AVA/aval_T290-09-19_62-63.html:1-37`
- Read: `prof/ensino/cronograma_docente_2026_2.md:269-320`
- Test: shell validation commands against the modified HTML

**Interfaces:**
- Consumes: the canonical AF, AS, AV, revision, second-call, content, and registration data from section 5 of the teaching schedule.
- Produces: one self-contained AVA/Moodle HTML fragment with sections for composition, AV1, AV2, AV3, common second calls, and application rules.

- [ ] **Step 1: Capture the baseline**

Run:

```bash
cp prof/AVA/aval_T290-09-19_62-63.html /tmp/aval_T290-09-19_62-63.before.html
shasum -a 256 /tmp/aval_T290-09-19_62-63.before.html
```

Expected: one SHA-256 hash for the 37-line original fragment.

- [ ] **Step 2: Replace the complete HTML fragment**

Use `apply_patch` to replace lines 1–37 with:

```html
<h3>Avaliações</h3>
<p><strong>Composição:</strong> AVx = (0,20 × maior nota entre AFx.1 e AFx.2) + (0,80 × ASx).</p>
<p><strong>AF — Avaliação Formativa:</strong> duas avaliações objetivas obrigatórias por AV, em datas e marcos de aprendizagem distintos; cada uma contém 10 questões no estilo ENADE, com 40 minutos prévios de dúvidas e revisão e 60 minutos de aplicação. A maior nota constitui a AF final.</p>
<p><strong>AS — Avaliação Somativa:</strong> uma avaliação individual de código de 100 minutos por AV, com duas questões da OBI adaptadas para TypeScript em compilador online.</p>
<h4>AV1</h4>
<ul>
    <li><strong>AF1.1:</strong> 01/09 — variáveis, tipos, expressões, operadores, entrada, saída e estrutura sequencial;</li>
    <li><strong>AF1.2:</strong> 08/09 — estruturas condicionais simples, compostas, encadeadas e aninhadas;</li>
    <li><strong>Revisão integral:</strong> 10/09;</li>
    <li><strong>AS1:</strong> 15/09 — avaliação individual de código;</li>
    <li><strong>Registro da AV1:</strong> até 21/09.</li>
</ul>
<p><strong>Conteúdo da AV1:</strong> variáveis; tipos; entrada e saída; sequenciamento; expressões; operadores; condicionais.</p>
<h4>AV2</h4>
<ul>
    <li><strong>AF2.1:</strong> 15/10 — estruturas de repetição e algoritmos fundamentais;</li>
    <li><strong>AF2.2:</strong> 27/10 — funções, parâmetros, retorno, escopo, decomposição, reutilização e modularidade;</li>
    <li><strong>Revisão integral:</strong> 29/10;</li>
    <li><strong>AS2:</strong> 03/11 — avaliação individual de código;</li>
    <li><strong>Registro da AV2:</strong> até 10/11.</li>
</ul>
<p><strong>Conteúdo da AV2:</strong> repetição; funções; modularidade; algoritmos fundamentais.</p>
<h4>AV3</h4>
<ul>
    <li><strong>AF3.1:</strong> 24/11 — vetores, busca linear e binária e ordenação pelo método da bolha;</li>
    <li><strong>AF3.2:</strong> 01/12 — matrizes e integração das estruturas de dados simples;</li>
    <li><strong>Revisão integral:</strong> 03/12;</li>
    <li><strong>AS3:</strong> 08/12 — avaliação individual de código;</li>
    <li><strong>Registro da AV3:</strong> até 11/12.</li>
</ul>
<p><strong>Conteúdo da AV3:</strong> vetores; matrizes; busca linear e binária; Bubble Sort.</p>
<h4>Segundas chamadas comuns</h4>
<ul>
    <li><strong>AS1:</strong> 25/09 (sex.), horário N6CD, das 21h às 22h40; lançamento da nota até 30/09;</li>
    <li><strong>AS2:</strong> 13/11 (sex.), horário N6CD, das 21h às 22h40; lançamento da nota até 19/11;</li>
    <li><strong>AS3:</strong> 09/12 (qua.), das 19h às 20h40; registro até 11/12.</li>
</ul>
<p>As sessões serão comuns aos estudantes convocados de RLA e RPG. Cada estudante realizará no AVA/Moodle, com Safe Exam Browser, o instrumento correspondente à sua disciplina. O local será divulgado no AVA/Moodle. Essas sessões não substituem encontros regulares.</p>
<h4>Aplicação</h4>
<ul>
    <li>As AFs e as ASs serão realizadas no AVA/Moodle com Safe Exam Browser;</li>
    <li>as ASs serão resolvidas em TypeScript, em compilador online;</li>
    <li>AS significa Avaliação Somativa, não Avaliação Substitutiva;</li>
    <li>cada avaliação cobrará somente conteúdos ensinados e praticados anteriormente.</li>
</ul>
```

- [ ] **Step 3: Validate HTML structure**

Run:

```bash
xmllint --html --noout prof/AVA/aval_T290-09-19_62-63.html
```

Expected: exit status 0 and no parser errors.

- [ ] **Step 4: Verify removal of incompatible content**

Run:

```bash
if rg -n 'AT[123]|AP[123]|grafos|modelagem|coloração|emparelhamento|eulerian|hamiltonian|fluxo máximo' prof/AVA/aval_T290-09-19_62-63.html; then exit 1; fi
```

Expected: exit status 0 and no matches.

- [ ] **Step 5: Verify required RLA facts**

Run:

```bash
rg -n '0,20 × maior nota|AF1\.1.*01/09|AF1\.2.*08/09|AS1.*15/09|AF2\.1.*15/10|AF2\.2.*27/10|AS2.*03/11|AF3\.1.*24/11|AF3\.2.*01/12|AS3.*08/12|25/09.*N6CD|13/11.*N6CD|09/12.*19h às 20h40|Safe Exam Browser|TypeScript|Avaliação Somativa, não Avaliação Substitutiva' prof/AVA/aval_T290-09-19_62-63.html
```

Expected: every required date, rule, and environment appears in the output.

- [ ] **Step 6: Compare the final artifact with the baseline**

Run:

```bash
diff -u /tmp/aval_T290-09-19_62-63.before.html prof/AVA/aval_T290-09-19_62-63.html
```

Expected: the complete T290/RPG fragment is replaced by the approved RLA structure; no unrelated file is part of this delta.

- [ ] **Step 7: Report completion without committing ignored AVA content**

Run:

```bash
git status --short
```

Expected: preexisting workspace changes remain untouched. Because `/prof/` is ignored, report the verified local HTML change explicitly rather than claiming it appears in the Git diff.
