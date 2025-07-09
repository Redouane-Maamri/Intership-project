describe("check product details", () => {
    it("redirige vers les pages des produits et revient en arrière correctement", () => {
      // 1. Aller sur la page d’accueil
      cy.visit("http://localhost:3000");
  
      cy.get('#produits').scrollIntoView();
  
      cy.contains('Découvrir tous les produits').click();
  
      cy.contains("Onduleurs").click();
      cy.url().should("include", "/produits/onduleurs"); // Vérifie l'URL
  
      cy.contains("3000W").click();
      cy.url().should("include", "/produits/details/ONDL-3000W"); // Vérifie l'URL (ajuste selon ton routing)
      cy.contains("Onduleur 3000W").should("be.visible"); // Vérifie que le produit s'affiche bien
  
      cy.contains("Retour").click();
      cy.url().should("include", "/produits/onduleurs");
  
      cy.contains("Retour").click();
      cy.url().should("include", "/productsCatalogue");
  
      // 7. Revenir à l'accueil
      cy.contains("Home").click();
      cy.url().should("eq", "http://localhost:3000/");
    });
  });
  