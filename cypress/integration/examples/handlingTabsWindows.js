
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
            // it("child windows",()=>
            // {
            
            //   cy.get('#opentab').invoke('removeAttr','target').click()
            //   cy.origin('https://www.qaclickacademy.com/',()=>{
            //     cy.url().should('include','https://www.qaclickacademy.com/')
            //     cy.get('.float-left a').should('have.class','main-btn')
            //   })
            // })
            // it("Handling Table Data",()=>
            // {
            //   cy.get('[name="courses"] tr td:nth-child(2)').each(($el,index,$list)=>
            //     {
            //       // const cName=$el.text();
            //       if($el.text()==="Master Selenium Automation in simple Python Language")
            //       { 
            //         cy.get('[name="courses"] tr td:nth-child(2)').eq(index).next().should('have.text','25')        
            //       }


            //     })  
            // })
            it("Mouse Hover",()=>{
              cy.get(".mouse-hover-content").scrollIntoView().invoke('show')
              cy.contains("Top").click()
              cy.url().should('include','top')

            })
              

})

