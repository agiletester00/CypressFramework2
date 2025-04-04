import { Given,When,Then,And } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from '@faker-js/faker';

Given("I m on E-commerce page",function()
{
    cy.visit( Cypress.env('url')+"/loginpagePractise/")
})
Given("I m on Home page",function()
{
    cy.visit( Cypress.env('url')+"/loginpagePractise/")
})

When("I login to the application",function(){
     this.productpage = this.homePage.login(this.data.username,this.data.password)
    // this.productpage = this.homePage.login(,)
    this.productpage.pageValidation()
    this.productpage.getCardCount().should('have.length',4)
})
When("I login to the application portal",function(dataTable){
    this.productpage = this.homePage.login(dataTable.rawTable[1][0],dataTable.rawTable[1][1])
    this.productpage.pageValidation()
    this.productpage.getCardCount().should('have.length',4)
})


When("I add items to the cart and checkout",function()
{
    this.productpage.selectProduct(this.data.productName)
    this.productpage.selectFirstProduct()
    this.cartPage = this.productpage.goToCart()
})
Then("Validate the total price limit",function()
{
    this.cartPage.sumofProducts().then(function(sum)
    {
        expect(sum).to.be.lt(200000)
    })  
})
Then("Select the country submit and verify Success Message",function()
{
    const confirmationPage=this.cartPage.checkOutItems()
    confirmationPage.submitFormDetails()
    confirmationPage.getAlertMessage().should('contain',"Success")
})