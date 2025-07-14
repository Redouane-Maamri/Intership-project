describe("Test de visite et redirection depuis la section Produits", () => {
    it("devrait scroller, cliquer sur le bouton et rediriger vers /productsCatalogue", () => {
      // 1. Visite la page d'accueil
      cy.visit("http://localhost:3000");
  
      // 2. Scrolle jusqu'à la section Produits (section avec l'ID #produits)
      cy.get('#produits').scrollIntoView();
  
      // 3. Clique sur le bouton "Découvrir tous les produits"
      cy.contains('Discover all products').click();
  
      // 4. Vérifie que l'URL contient bien /productsCatalogue
      cy.url().should('include', '/productsCatalogue');
  
      // 5. Vérifie que la page cible contient le texte attendu
      cy.contains('Catalogue de produits');

      cy.get('[aria-label="Home"]').click();

      cy.contains("About").click();

      cy.get('[aria-label="Home"]').click();

      cy.get('#produits').scrollIntoView();
  
      // 3. Clique sur le bouton "Découvrir tous les produits"
      cy.contains('Discover all products').click();


      const sousProduits = ["Onduleurs", "Câbles solaires", "Protection"];
      sousProduits.forEach((item) => {
        cy.contains(item).should("exist");
      });

      cy.screenshot();


    });
  });
  