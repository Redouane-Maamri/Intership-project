describe("check product details", () => {
    it("redirige vers les pages des produits et revient en arrière correctement", () => {
      // 1. Aller sur la page d’accueil
      cy.visit("http://localhost:3000");
  
      cy.get('#produits').scrollIntoView();
  
      cy.contains('Discover all products').click();
  
      cy.contains("Parafoudre").click();
      cy.url().should("include", "/produits/parafoudre"); // Vérifie l'URL
  
      cy.contains("Parafoudre DC 1500 V").click();
      cy.url().should("include", "/produits/details/PROT-PARA-SL"); // Vérifie l'URL (ajuste selon ton routing)
      cy.contains("PROT-PARA-SL").should("be.visible"); // Vérifie que le produit s'affiche bien
  
      cy.contains("Retour").click();
      cy.url().should("include", "/produits/parafoudre");
  
      cy.contains("Retour").click();
      cy.url().should("include", "/productsCatalogue");
  
      // 7. Revenir à l'accueil
      cy.get('[aria-label="Home"]').click();
      cy.url().should("eq", "http://localhost:3000/");

      cy.contains("News").click();

      
    });
  });
  