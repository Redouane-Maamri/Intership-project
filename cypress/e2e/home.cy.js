// cypress/e2e/home.cy.js
describe('Page de contact', () => {
  it('devrait afficher le texte Bienvenue', () => {
    cy.visit('http://localhost:3000/contact'); // adapte l’URL à ton projet
    cy.contains('Email').should('be.visible');

    // cy.screenshot();
  });
});
