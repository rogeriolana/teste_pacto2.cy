Teste Cypress: Acesso à Política de Privacidade do UOL

Este teste automatizado usa Cypress para acessar a home do UOL, localizar o link "Segurança e privacidade" e verificar o título e a data de atualização na página de Política de Privacidade.

📋 Pré-requisitos

Node.js 18+

Cypress instalado no projeto:

npm install cypress --save-dev

▶️ Como executar
Interface interativa
npx cypress open


Selecione o teste na interface e execute no navegador desejado.

Modo headless
npx cypress run --spec "cypress/e2e/politica_privacidade_uol.cy.js"

🛠 O que o teste faz

Acessa a página inicial do UOL.

Tira screenshot da home (01-home-uol).

Localiza o link “Segurança e privacidade” e confirma que possui href.

Tira screenshot do link (02-link-politica-encontrado).

Visita a página de Política de Privacidade.

Verifica se o título contém "Normas de Segurança e Privacidade" e tira screenshot (03-politica-carregada).

Confere se existe uma data de atualização no formato esperado e tira screenshot (04-data-verificada).

📂 Arquivo

politica_privacidade_uol.cy.js → script Cypress com o teste automatizado.
