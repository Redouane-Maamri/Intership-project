describe("Tester page Partenaire", () => {
    it("L'utilisateur scroll vers la section partenaires et clique pour voir les détails", () => {
      // 1. Ouvre la page d'accueil
      cy.visit("http://localhost:3000");
  
      // 2. Clique sur le lien 'partenaires' dans la navbar
      cy.contains("partenaires").click();
  
      // 3. Scroll vers la section avec l'id 'partners'
      cy.get("#partners").scrollIntoView();
  
      cy.contains("Pour plus d’info, cliquez ici")
        
        .click({ force: true }); // force to avoid "element covered" error
  
      // 6. Vérifie que la page des détails est bien affichée
      cy.contains("Nous collaborons").should("be.visible");
  
      // 7. Prend une capture d'écran pour vérification
      cy.screenshot();
    });
  });
  