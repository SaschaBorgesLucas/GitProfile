# GitProfile
<h2>Objetivos</h2>
<p>Este projeto tem como objetivo fazer uma aplicação utilizando HTML, CSS, Javascript, Fetch e GitHub que busque um usuário do github.com e retorne as seguintes informações: Imagem do usuário; Nome completo do usuário; Login do usuário; Bio do usuário; Número de seguidores do usuário; Número de pessoas que o usuário está seguindo; uma lista com até 10 últimos eventos do usuário no GitHub. Os eventos que serão apresentados são de dois tipos: <b>CreateEvent</b> e <b>PushEvent</b> apenas.</li>; Para cada atividade você deve mostrar o <b>nome do repositório</b> e a <b>mensagem do evento</b>; busca as informações dos repositórios do usuário do GitHub; Nome do repositório; Link do repositório; Quantidade de forks do repositório; Quantidade de estrelas do repositório; Quantidade de watchers do repositório; Mostrar a linguagem de programação do repositório.</p>
<p>Devido a grande quantidade de informações solicitadas a solução foi dividida em 3 partes: Usuário, Repositórios,e Eventos. Esta divisão é aplicada tanto ao desenvolvimento permitindo que a "euquipe" se foque em uma áre de cada vez, quanto no próprio código da solução. Assim os requisitos citados anteriormente ficaram divididos da seguinte maneira.*</p>
<i>* alguns requisitos tiveram seu texto alterado.</i>
<h4>Usuário</h4>
<ol>
  <li>Imagem do usuário</li>
  <li>Nome completo do usuário</li>
  <li>Login do usuário</li>
  <li>Bio do usuário</li>
  <li>Número de seguidores do usuário</li>
  <li>Número de pessoas que o usuário está seguindo</li>
</ol>
<h4>Repositórios</h4>
<ol>
  <li>Nome do repositóri</li>
  <li>Link do repositório</li>
  <li>Quantidade de forks do repositório</li>
  <li>Quantidade de estrelas do repositório</li>
  <li>Quantidade de watchers do repositório</li>
  <li>Mostrar a linguagem de programação do repositório</li>
</ol>
<h4>Eventos</h4>
<ol>
    <li>Apresentar uma lista com até 10 últimos eventos do usuário no GitHub.</li>
    <li>Apresentar apenas os eventos dos tipos: <b>CreateEvent</b> e <b>PushEvent</b>.</li>
    <li>Apresentar o nome do repositório de cada evento</li>
    <li>Apresentar a mensagem do evento</li>
</ol>
<h3>Objetivos implícitos</h3>
<p>Os seguintes objetivos não foram declarados de maneira explicita, mas serão implementados como forma de garantir um nível mínimo de quallidade do projeto:</p>
<ol>
  <li>As informações devem ser apresentadas de maneira clara</li>
  <li>A solução deve ser responsiva, ou seja funcionar e manter suas características tanto em celulares quanto em monitores</li>
  <li>Os campos de pesquisa devem passar por validação.</li>
  <li>Os elementos em uso devem ficar destacados.</li>
</ol>

<h2>Solução</h2>






<h2>Padrões do projeto</h2>
<h3>Versionamento</h3>
<p><b>Commits:</b> todos os comits vão seguir o seguinte padrão: data no formato dd/mm/aaaa.quantidade de alterações no código feitas naquele dia - autor: mensagem.</p><p>Exemplo:<i>"30/09/2023.1 - Sascha: First commit."</i></p><p><b>!!!:</b> Exceto para os commits do arquivo README.md, estes não possuem mensagens em seus commits</p>
<hr>
<h3>paginaMain.css</h3>
<p>O CSS foi planejado para funcionar em módulos, cada módulo é referente a uma parte da página (veja acima). Em cada página html é necessário importar o <b>reset.css</b> e um arquivo <b>main.css</b>.</p><p>Não existe um arquivo main para todas as paginas e sim um padrão <b>paginaMain.css</b> isso me permite importar módulos expecifícos de acordo com apágina que estou fazendo. Como, nesta versão só tenho uma página, só vai ter o arquivo <i>indexMain.css</i>.</p><p>Esta solução também difiulta eu ter algum proplema pelo fato de esquecer de importar um arquivo do CSS</p>

<h2>ETC..</h2>
