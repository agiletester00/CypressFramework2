describe("Drop Down", () => {
    it("Drop Down", () => {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.get("select").select("option2").should("have.value", "option2")
        cy.get("#checkBoxOption1").check().should("be.checked").and("have.value", "option1")
        cy.get("[value='radio1']").scrollIntoView().check().should("be.checked")
        cy.get("#autocomplete").type("ind").then(() => {   
            // cy.get(".ui-menu-item div").each(($el, index, $list) => {
            //     if ($el.text() === "India") 
            //     {
            //         cy.wrap($el).click()
            //     }
            // })
            cy.get(".ui-menu-item div").each(element => {
                
                if (element.text()=== "India") {
                    cy.wrap(element).click()
                }
            })        





        }) 
        cy.get("#autocomplete").should("have.value", "India")
            

    })
})