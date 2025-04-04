
///<reference types='cypress-iframe'/>
import LandingPage from "../../support/pageobjects/landingPage"

const landingPage = new LandingPage()
describe("This is my first suite", () => {
  beforeEach("Practise", () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Return false to prevent Cypress from failing the test
      return false;
    });
  })

  it("date pickers", () => {
    const day = '25'
    const month = '6'
    const year = '2024'
    const date = [month, day, year]

    cy.get(".react-date-picker").click()
    cy.get(".react-calendar__navigation").click()
    cy.get(".react-calendar__navigation").click()
    cy.contains(".react-calendar__tile", year).click()
    cy.get("abbr").eq(parseInt(month) - 1).click()
    // cy.get("abbr",'26').contains('26').click();
    cy.contains("abbr", day).click();
    cy.get(".react-date-picker__inputGroup__input").each((el, index) => {
      expect(el).to.have.value(date[index])


    })


  })








})

