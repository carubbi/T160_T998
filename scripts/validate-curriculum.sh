#!/usr/bin/env bash
set -euo pipefail

material_dirs=(
  aula2 aula3 aula4 aula5 aula6
  aula7 aula8 aula9 aula10 aula11
  beecrowd
)

failed=0

if find "${material_dirs[@]}" -type f -name '*.js' -print -quit | grep -q .; then
  echo "Erro: ainda existem arquivos JavaScript no material."
  find "${material_dirs[@]}" -type f -name '*.js' -print
  failed=1
fi

if grep -R -n -E '^```(javascript|js)$' README.md "${material_dirs[@]}" --include='*.md'; then
  echo "Erro: ainda existem cercas Markdown de JavaScript."
  failed=1
fi

if grep -R -n -E '\.js([^[:alnum:]_]|$)' README.md "${material_dirs[@]}" --include='*.md'; then
  echo "Erro: ainda existem referências a arquivos .js."
  failed=1
fi

if grep -R -n -E ':[[:space:]]*any([^[:alnum:]_]|$)|as[[:space:]]+any([^[:alnum:]_]|$)|any\[\]' "${material_dirs[@]}" --include='*.ts'; then
  echo "Erro: uma solução usa any."
  failed=1
fi

if grep -R -n -E ':[[:space:]]*(tuple|object|unknown|never)([^[:alnum:]_]|$)' "${material_dirs[@]}" --include='*.ts'; then
  echo "Erro: uma solução usa um tipo fora do desenho curricular."
  failed=1
fi

if grep -R -n -E 'prompt\(.*\)!' aula6 aula7 aula8 aula9 aula10 aula11 --include='*.ts'; then
  echo "Erro: prompt com asserção de não nulidade aparece a partir da Aula 6."
  failed=1
fi

if grep -R -n -E 'require\(|process\.stdin' "${material_dirs[@]}" --include='*.ts'; then
  echo "Erro: uma solução depende do ambiente Node."
  failed=1
fi

if grep -R -n -E '^[[:space:]]*(var|let|const)[[:space:]]+[A-Za-z_$][A-Za-z0-9_$]*[[:space:]]*(=|;)' "${material_dirs[@]}" --include='*.ts'; then
  echo "Erro: uma declaração de variável não possui tipo explícito."
  failed=1
fi

if grep -R -n -E '(number|string|boolean)\[\]' aula2 aula3 aula4 aula5 aula6 aula7 aula8 --include='*.ts'; then
  echo "Erro: um vetor tipado aparece antes da Aula 9."
  failed=1
fi

if grep -R -n -E 'string[[:space:]]*\|[[:space:]]*null' aula2 aula3 aula4 aula5 --include='*.ts'; then
  echo "Erro: a união string | null aparece antes da Aula 6."
  failed=1
fi

if [ "$failed" -ne 0 ]; then
  exit 1
fi

echo "Validação curricular concluída."
