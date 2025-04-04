import { Given,When,Then,And } from "@badeball/cypress-cucumber-preprocessor";

Given('I visit the {string} page', (pageName) => {
  cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
});

When('I click the {string} button', (buttonText) => {
  if (buttonText === 'Alert') {
    cy.get('#alertbtn').click();
  } else if (buttonText === 'Confirm') {
    cy.get('#confirmbtn').click();
  }
});

Then('I should see an alert message {string}', (message) => {
  cy.on('window:alert', (str) => {
    expect(str).to.equal(message);
  });
});

Then('I should see a confirm message', () => {
  cy.on('window:confirm', (str) => {
    expect(str).to contains("Hello , Are you sure you want to confirm?");
  });
});

Then('I click on Cancel button', () => {
  cy.on('window:confirm', (str) => {
    return false;
  });
});
