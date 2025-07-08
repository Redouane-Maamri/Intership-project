describe("Tester l'envoi des données via le formulaire de contact", () => {
    it("doit afficher le formulaire, le remplir et soumettre", () => {
      cy.visit("http://localhost:3000");
  
      // 1. Cliquer sur le lien vers la page Contact
      cy.contains(/contac/i).click(); // insensible à la casse
  
      // 2. Vérifie que le formulaire est visible
      cy.contains("Nom complet").should("be.visible");
  
      // 3. Remplir le formulaire
      cy.get('input[name="nom"]').type("Redouane Maamri");
      cy.get('input[name="email"]').type("redouane@test.com");
      cy.get('input[name="phone"]').type("+212600000000");
      cy.get('textarea[name="message"]').type("Ceci est un message de test.");
  
      // 4. Cliquer sur le bouton "Envoyer"
      cy.get('button[type="submit"]').click();
  
      // 5. Vérifier que l’alerte de succès s'affiche (simulé car alert())
      cy.on('window:alert', (txt) => {
        expect(txt).to.contains("Message envoyé avec succès");
      });
  
      // 6. Screenshot après envoi
      cy.screenshot("formulaire-envoye");
    });
  });
  