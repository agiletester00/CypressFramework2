
import LandingPage from "../../support/pageobjects/landingPage"
const landingPage=new LandingPage()
describe("This is my first suite",()=>
{
  beforeEach("Practise",()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Return false to prevent Cypress from failing the test
      return false;
    }); 
  })
    it("child Windows",()=>
      {
        cy.get("#opentab").then((el)=>
        {
            const url=el.prop('href')
            cy.visit(url)
            cy.origin(url,()=>
            {
              cy.get(".button .main-btn").click()
              
              // cy.get(".ud-heading-lg").should('have.text','My courses')
            })
        })

      })
      it("Frames",()=>
      {
        cy.get("#frame-button").click()
      })
              

})

