describe("tester partneaire page " , ()=>{
    it("tester q'on un user scroll to partners page et move to another partners details page",()=>{
        cy.visit("http://localhost:3000");

        cy.contains("partenaires").click();

        cy.get("#partners").scrollIntoView();

        cy.contains("Partners").should('be.visible')

        cy.contains("Pour plus d’info, cliquez ici").click();
        cy.contains("Nous collaborons");

        cy.screenshot();

    })
})