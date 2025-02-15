# Javascript Quote Generator

Este projeto é um gerador de citações que busca uma nova citação aleatória de uma API externa e a exibe na página. O usuário pode alterar o tema da página e a fonte do texto com um clique, tornando a experiência mais personalizada.

## Funcionalidades
- **Gerar citação aleatória**: Ao clicar no botão "New Quote", uma nova citação é gerada e exibida.
- **Troca de temas**: Você pode alternar entre diferentes temas para mudar a aparência da página.
- **Alteração de fontes**: Permite escolher entre várias fontes para o texto exibido.

## Estrutura do Projeto
O projeto é composto pelos seguintes arquivos principais:
- **index.html**: O arquivo HTML que contém a estrutura básica da página.
- **style.css**: O arquivo de estilo que define a aparência da página, incluindo o layout, cores, fontes e temas.
- **script.js**: O arquivo JavaScript que lida com a lógica do gerador de citações e troca de temas.

### HTML 
A estrutura HTML é composta por um cabeçalho com o título do projeto e dois botões para alterar o tema e a fonte, além de uma seção principal para exibir a citação, o autor e a categoria da citação.

### CSS
O estilo é definido por variáveis CSS para facilitar a troca de temas. Cada tema é baseado em uma paleta de cores específica e tem uma aparência única. As fontes também são definidas no CSS, com opções para o usuário alterar conforme desejado.

### JavaScript
O JavaScript é responsável por fazer a requisição à API externa (https://api.quotable.io/random) para buscar uma nova citação, além de lidar com a troca de temas e fontes. Quando o botão de "New Quote" é clicado, o JavaScript atualiza a página com a nova citação, o autor e a categoria.

# Como Usar
1. Clone o repositório ou baixe os arquivos do projeto.
2. Abra o arquivo `index.html` em seu navegador.
3. Clique em New Quote para gerar uma nova citação.
4. Use os botões de Trocar Tema e Alterar Fonte para personalizar a aparência da página.
# Personalização
Você pode facilmente adicionar mais temas e fontes no arquivo style.css, alterando as variáveis e criando novas classes para diferentes opções.

# Tecnologias Usadas
- **HTML5**: Para estruturar o conteúdo da página.
- **CSS3**: Para estilizar a página, com uso de variáveis e temas dinâmicos.
- **JavaScript (ES6)**: Para interagir com a API externa, manipular DOM e alterar o tema e fontes.
- **API externa**: https://api.quotable.io/random para obter as citações.

# Capturas de tela:
![Captura de Tela](./images/screenshots/screenshot1.png)
![Captura de Tela](./images/screenshots/screenshot2.png)
![Captura de Tela](./images/screenshots/screenshot3.png)
