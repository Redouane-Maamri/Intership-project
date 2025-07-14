describe("check product details", () => {
    it("redirige vers les pages des produits et revient en arrière correctement", () => {
      // 1. Aller sur la page d’accueil
      cy.visit("http://localhost:3000");
  
      cy.get('#produits').scrollIntoView();
  
      cy.contains('Discover all products').click();
  
      cy.contains("Tableau électrique").click();
      cy.url().should("include", "/produits/tableau-%C3%A9lectrique"); // Vérifie l'URL
  
      cy.contains("Tableau modulaire").click();
      cy.url().should("include", "/produits/details/TAB-003"); // Vérifie l'URL (ajuste selon ton routing)
      cy.contains("Tableau modulaire").should("be.visible"); // Vérifie que le produit s'affiche bien
  
      cy.contains("Retour").click();
      cy.url().should("include", "/produits/tableau-%C3%A9lectrique");
  
      cy.contains("Retour").click();
      cy.url().should("include", "/productsCatalogue");
  
      // 7. Revenir à l'accueil
      cy.get('[aria-label="Home"]').click();
      cy.url().should("eq", "http://localhost:3000/");

      cy.contains("News").click();

      cy.screenshot();
    });
  });
  