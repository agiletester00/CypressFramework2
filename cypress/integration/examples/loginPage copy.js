// import cypress = require("cypress");
import HomePage from "../../support/pageobjects/HomePage";
import ProductPage from "../../support/pageobjects/Productpage";



describe("Login Page",()=>
{


before(function()
{
        this.homePage=new HomePage()
        cy.fixture('example').then(function(data)
            {
                this.data=data;
                // this.homePage=new HomePage()
            })
})


    it("Login Test",function(){
        const productName=this.data.productName
        // Cypress.env('url')
        cy.visit( Cypress.env('url')+"/loginpagePractise/")
        const productPage = this.homePage.login(this.data.username,this.data.password)
        productPage.pageValidation()
        productPage.getCardCount().should('have.length',4)
        productPage.selectProduct(productName)
        productPage.selectFirstProduct()
        const cartPage = productPage.goToCart()
        cartPage.sumofProducts().then(function(sum)
        {
            expect(sum).to.be.lt(200000)
        })
        const confirmationPage=cartPage.checkOutItems()
        confirmationPage.submitFormDetails()
        confirmationPage.getAlertMessage().should('contain',"Success")

   


    })






})