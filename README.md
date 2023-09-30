# GitProfile


<h2>Padrões do projeto</h2>
<h3>Versionamento</h3>
<p><b>Commits:</b> todos os comits vão seguir o seguinte padrão: data no formato dd/mm/aaaa.quantidade de alterações no código feitas naquele dia - autor: mensagem.</p><p>Exemplo:<i>"30/09/2023.1 - Sascha: First commit."</i></p><p><b>!!!:</b> Exceto para os commits do arquivo README.md, estes não possuem mensagens em seus commits</p>
<hr>
<h3>paginaMain.css</h3>
<p>O CSS foi planejado para funcionar em módulos, cada módulo é referente a uma parte da página (veja acima). Em cada página html é necessário importar o <b>reset.css</b> e um arquivo <b>main.css</b>.</p><p>Não existe um arquivo main para todas as paginas e sim um padrão <b>paginaMain.css</b> isso me permite importar módulos expecifícos de acordo com apágina que estou fazendo. Como, nesta versão só tenho uma página, só vai ter o arquivo <i>indexMain.css</i>.</p><p>Esta solução também difiulta eu ter algum proplema pelo fato de esquecer de importar um arquivo do CSS</p>

<h2>ETC..</h2>
