
///<reference types='cypress-iframe'/>
import LandingPage from "../../support/pageobjects/landingPage"
 
const landingPage=new LandingPage()
describe("This is my first suite",()=>
{
  beforeEach("Practise",()=>{
    cy.visit(Cypress.env('url')+"/AutomationPractice/")
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Return false to prevent Cypress from failing the test
      return false;
    }); 
  })
    
      it("Frames",()=>
      {
        cy.get('#courses-iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).find("[href='mentorship']").eq(0)
        .click();
       // cy.get().its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).find().eq().click()
      })
        
      




      

})

