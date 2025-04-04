import { Given,When,Then,And } from "@badeball/cypress-cucumber-preprocessor";



Given("I m on E-commerce2 page",function()
{
    cy.visit("https://rahulshettyacademy.com/loginpagePractise/")
    // cy.pause();
    // cy.get("#username").type(faker.person.fullName())
    cy.fillRandomName("#username")
    // cy.get("#name").should('have.value',faker.person.fullName())
    cy.fillRandomEmail("#password")
    // cy.get("#password").type(faker.person.firstName())
    // cy.get("#password").should('have.value','password')
    
  
})

