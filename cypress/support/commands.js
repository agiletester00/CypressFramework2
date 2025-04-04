// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { faker } from '@faker-js/faker';

Cypress.Commands.add('waitUntillElementIsVisible', (selector,timeout=10000) => 
    {
        cy.log(`Waiting for element ${selector} to be visible`);

        cy.get(selector, { timeout }).should('be.visible');
    })

Cypress.Commands.add('LoginApi',()=>{
    cy.request('POST','https://rahulshettyacademy.com/api/ecom/auth/login',
    {userEmail: "agiletester00@gmail.com", userPassword: "Red@rose1"}).
    then((response)=>{
        expect(response.status).to.equal(200)
        Cypress.env('token',response.body.token)
    })
})

Cypress.Commands.add('AddToCartApi',(productName)=>{
    cy.request({
        method:'POST',
        url:'https://rahulshettyacademy.com/seleniumPractise/addToCart',
        form:true,
        body:{
            product:productName,
            quantity:1
        },
        headers:{
            'Authorization':`Bearer ${Cypress.env('token')}`
        }
    }).then((response)=>{
        expect(response.status).to.equal(200)
    })
})

Cypress.Commands.add('switchToIframe',(selector)=>{ 
    cy.get(selector).then(function($iframe)
    {
        const $body=$iframe.contents().find('body')
        cy.wrap($body).as('iframe')
    })
})

Cypress.Commands.add('fillRandomName', (selector) => {
    cy.get(selector).type(faker.person.fullName());
  });
  
  Cypress.Commands.add('fillRandomEmail', (selector) => {
    cy.get(selector).type(faker.internet.email());
  });
  
  Cypress.Commands.add('fillRandomAddress', (selector) => {
    cy.get(selector).type(faker.location.streetAddress());
  });
  
  Cypress.Commands.add('fillRandomPhoneNumber', (selector) => {
    cy.get(selector).type(faker.phone.number());
  });
  
  Cypress.Commands.add('fillRandomProductPrice', (selector) => {
    const price = faker.commerce.price({ min: 10, max: 1000 });
    cy.get(selector).type(price.toString());
  });
  
  Cypress.Commands.add('fillRandomParagraph', (selector) => {
      cy.get(selector).type(faker.lorem.paragraph());
  });