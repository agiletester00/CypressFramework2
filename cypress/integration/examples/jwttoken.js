describe("Interncept Concept", () => {
    it("Intercept Request and Response", () => {
        cy.LoginApi().then(function () {
            cy.visit("https://rahulshettyacademy.com/client",
                {
                    onBeforeLoad: function (window) {
                        window.localStorage.setItem('token', Cypress.env('token'))
                    }
                })

        })

    })

})