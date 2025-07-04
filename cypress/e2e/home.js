describe('Home Page', () => {
    it('should display the text "Bienvenue"', () => {
      cy.visit('http://localhost:3000');  // Make sure your React app runs on this URL
      cy.contains('Home').should('exist');  // Check if "Bienvenue" text is visible
    });
  });
  