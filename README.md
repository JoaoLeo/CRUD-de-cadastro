# CRUD-de-cadastro
Um crud simples de cadastro de usuários.

# O sistema se baseia nas 4 operações básicas de um banco de dados: Create, Read, Update e Delete.

# Funcionalidades:
1. Tela inicial  -> Mostra todos os usuários cadastrados, botões com opções que levam a rotas de edição, visualização ou exclusão dos dados e a opção de cadastrar novos.
2. Tela de cadastro -> Formulário para criar novos usuários com informações de nome, email e idade. Não aceita campos nulos, o campo email aceita apenas emails válidos
e o campo de idade não aceita números abaixo de 0.
3. Tela de edição -> Possibilita a alteração de algum dado do usuário escolhido.
4. Tela de detalhes -> Mostra todos os dados do usuário escolhido e possui um botão que redireciona para a tela inicial.
5. Botão de deleção -> Mostra uma confirmação que se for verdadeira excluí o usuário do banco de dados e se for falsa cancela a operação.

# Rotas/Métodos HTTP: 
1. Tela inicial -  "/" - GET
2. Tela de cadastro - "/cadastrarUser" - GET  e "/salvarUser" - POST
3. Tela de edição - "/editarUser/:id" - GET  e "/salvarEdicao" - POST
4. Tela de detalhes - "/informacoesUser/:id" - GET 
5. Botão de deleção - "/deletarUser" - POST

# Tecnologias utilizadas:
Node.js - Linguagem de programação principal.
Express.js - Framework utilizado para criação do servidor, funcionalidade e das rotas.
Sequelize - Biblioteca para manipulação de banco de dados.
MySQL - Banco de dados utilizado.
Body-parser - Biblioteca que pega dados para a requisição e envia para o backend.
EJS - View engine utilizada renderização do frontend.

# Considerações finais: 
- Esse sistema foi construído por um iniciante no desenvolvimento de backend, criei ele com projeto pessoal para testar meu conhecimento e minha capacidade de pesquisar 
e solucionar problemas, qualquer sugestões ou críticas que possam me ajudar nos meus estudos por favor entre em contato comigo pelo meu LinkedIn que está no meu perfil.
