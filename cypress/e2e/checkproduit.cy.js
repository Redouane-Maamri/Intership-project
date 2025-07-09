describe("check product details", () => {
    it("redirige vers les pages des produits et revient en arrière correctement", () => {
      // 1. Aller sur la page d’accueil
      cy.visit("http://localhost:3000");
  
      cy.get('#produits').scrollIntoView();
  
      cy.contains('Découvrir tous les produits').click();
  
      cy.contains("Disjoncteur").click();
      cy.url().should("include", "/produits/disjoncteur"); // Vérifie l'URL
  
      cy.contains("16A").click();
      cy.url().should("include", "/produits/details/DISJ-001"); // Vérifie l'URL (ajuste selon ton routing)
      cy.contains("16A").should("be.visible"); // Vérifie que le produit s'affiche bien
  
      cy.contains("Retour").click();
      cy.url().should("include", "/produits/disjoncteur");
  
      cy.contains("Retour").click();
      cy.url().should("include", "/productsCatalogue");
  
      // 7. Revenir à l'accueil
      cy.contains("Home").click();
      cy.url().should("eq", "http://localhost:3000/");

      cy.contains("Contact").click();

      cy.screenshot();
    });
  });
  