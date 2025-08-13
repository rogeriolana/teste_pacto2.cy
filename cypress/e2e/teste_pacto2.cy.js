describe('Acessa a página de Política de Privacidade via link da primeira página', () => {
  Cypress.on('uncaught:exception', () => false);

  it('Deve navegar da home até a página de Política e verificar a data', () => {
    cy.visit('https://www.uol.com.br', {
      failOnStatusCode: false,
      timeout: 60000,
    });

    // Screenshot da home
    cy.screenshot('01-home-uol');

    // Busca o link pelo texto "Segurança e privacidade"
    cy.contains('a', 'Segurança e privacidade', { timeout: 20000 })
      .should('have.attr', 'href')
      .then((href) => {
        // Screenshot do link antes de visitar
        cy.screenshot('02-link-politica-encontrado');

        // Visita a página de política
        cy.visit(href, {
          failOnStatusCode: false,
          timeout: 60000,
        });

        // Verifica o título e faz screenshot
        cy.get('h1.maintitle', { timeout: 20000 })
          .should('contain.text', 'Normas de Segurança e Privacidade');
        cy.screenshot('03-politica-carregada');

        // Verifica a data de atualização e registra evidência
        cy.contains(/Atualização:\s*\d{1,2}\s+de\s+\w+\s+de\s+\d{4}/, { timeout: 10000 })
          .should('exist');
        cy.screenshot('04-data-verificada');
      });
  });
});