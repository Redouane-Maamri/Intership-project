describe("check product details", () => {
    it("redirige vers les pages des produits et revient en arrière correctement", () => {
      // 1. Aller sur la page d’accueil
      cy.visit("http://localhost:3000");
  
      cy.get('#produits').scrollIntoView();
  
      cy.contains('Discover all products').click();
  
      cy.contains("Structures").click();
      cy.url().should("include", "/produits/structures"); // Vérifie l'URL
  
      cy.contains("Structure Aluminium 30°").click();
      cy.url().should("include", "/produits/details/STR-ALU-30"); // Vérifie l'URL (ajuste selon ton routing)
      cy.contains("STR-ALU-30").should("be.visible"); // Vérifie que le produit s'affiche bien
  
      cy.contains("Retour").click();
      cy.url().should("include", "/produits/structures");
  
      cy.contains("Retour").click();
      cy.url().should("include", "/productsCatalogue");
  
      // 7. Revenir à l'accueil
      cy.get('[aria-label="Home"]').click();
      cy.url().should("eq", "http://localhost:3000/");

      cy.contains("News").click();

      
    });
  });
  