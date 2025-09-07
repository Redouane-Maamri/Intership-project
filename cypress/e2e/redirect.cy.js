describe("Test de visite et redirection depuis la section Produits", () => {
    it("devrait scroller, cliquer sur le bouton et rediriger vers /productsCatalogue", () => {
      // 1. Visite la page d'accueil
      cy.visit("http://localhost:3000");
  
      // 2. Scrolle jusqu'à la section Produits (section avec l'ID #produits)
      cy.get('#produits').scrollIntoView();
  
      cy.contains('Discover all products').click();
  
      cy.url().should('include', '/productsCatalogue');
  
      cy.contains('Catalogue de produits');

      cy.get('[aria-label="Home"]').click();

      cy.contains("About").click();

      cy.get('[aria-label="Home"]').click();

      cy.get('#produits').scrollIntoView();
  
      cy.contains('Discover all products').click();


      const sousProduits = ["Onduleurs", "Structures", "Bifacial"];
      sousProduits.forEach((item) => {
        cy.contains(item).should("exist");
      });

      cy.screenshot();


    });
  });
  