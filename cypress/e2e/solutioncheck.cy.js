describe("discover solution page",()=>{
    it("discover title of solution if exists",()=>{
        cy.visit("http://localhost:3000");

        cy.get("#solutions").scrollIntoView();
        cy.contains("Solutions").should("be.visible");

        cy.contains("Installation photovoltaïque domestique").should("be.visible");

        cy.screenshot();
    })
})