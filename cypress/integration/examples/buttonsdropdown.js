
import LandingPage from "../../support/pageobjects/landingPage"
const landingPage=new LandingPage()
describe("This is my first suite",()=>
{
  beforeEach("Practise",()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
  })
      //  it('Radio button Test ', () =>
      //   {
      //     cy.get("input[value='radio2']").check()
      //     cy.get("input[value='radio2']").should('be.checked')
      //     cy.get('[type="checkbox"]').first().check()
      //     cy.get('[type="checkbox"]').last().check()
      //     // cy.log("Radio")
                               
      //   })
      //   it('checkbox Test ', () =>
      //     {
      //       // cy.get([type='radio']).
      //       cy.get('#checkBoxOption1').check().should('be.checked')
      //       cy.log("checkbox ")
                                 
      //     })
      //     it('Select Static DropDown',()=>
      //     {  
      //       cy.get('select').select('option2').should('have.value','option2')

      //     })
          // it('Select Dynamic DropDown',()=>
          //   {  
          //     cy.get('#autocomplete').type('ind')
          //     cy.get('.ui-menu-item div').each(($el, index, $list) =>
          //     {
          //       if($el.text()===('India'))
          //       {
          //             cy.wrap($el).click();
          //       }
          //     })
          //       cy.get('#autocomplete').should('have.value','India')
          //     })
        

            it("Element Visiblity Test",()=>
            {
              cy.get('#displayed-text').should('be.visible');
              cy.get('#hide-textbox').click()
              cy.get('#displayed-text').should('not.be.visible')
            })

            it("Alerts",()=>{
              cy.get('#alertbtn').click()
              cy.get('#confirmbtn').click()
              // cy.on('window:confirm', (str) => {
              //   expect(str).to.equal("Hello , Are you sure you want to confirm?")
              //   return false;
              // })
              cy.on('window:confirm',()=>{return false})
              cy.on('window:alert',(str)=>{
                expect(str).to.equal("Hello , share this practice page and share your knowledge")
              })
              
            })
              

})

