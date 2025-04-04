
import LandingPage from "../../support/pageobjects/landingPage"
const landingPage=new LandingPage()
describe("This is my first suite",()=>
{
    // it("My first test",()=>
    // {
    //     cy.visit("https://www.google.com")
    // })

    it('Visits the Rahul Shetty', () =>
        {
           cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
           // cy.get('.search-keyword').type("ca")
           cy.get(landingPage.searchBar).type("ca")
           cy.get(landingPage.productList).find(landingPage.productName).each((name)=>
           {
             const textVeg=name.find(landingPage.vegName).text();
             
             if(textVeg.includes('Cashews'))
             {
               cy.wrap(name).find(landingPage.button).click()
             }
 
           })
           cy.get(landingPage.shoppingCart).click()
           cy.get(landingPage.vegName).should('contain', 'Cashews')
           cy.contains(landingPage.proceedToCheckoutText).should('have.text','PROCEED TO CHECKOUT').click()
           cy.get(landingPage.cartSection).should('have.attr','placeholder')
           cy.contains(landingPage.placeOrderButton).click()
           cy.get(landingPage.wrapper).find(landingPage.label).should('have.text','Choose Country');

        })



})