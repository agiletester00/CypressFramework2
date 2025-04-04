class ConfirmationPage{

    submitFormDetails()
    {
        cy.get("#country").type("India")
        cy.waitUntillElementIsVisible(".suggestions ul li",7000).click()
        // cy.get(".suggestions ul li").should('be.visible').and('have.text',"India").click()
        // cy.get(".suggestions ul li",{timeout:6000}).click()
        cy.get("[type='submit']").click()
    }
    getAlertMessage()
    {
       return  cy.get(".alert")
    
    }

}export default ConfirmationPage;