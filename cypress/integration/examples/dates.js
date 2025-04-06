describe("Date", () => {
    it("Date", () => {
        let date=new Date()
        let currentDate=date.getDate()
        let currentMonth=date.getMonth()+1
        cy.log(currentDate)
        cy.log(currentMonth)
        let currentYear=date.getFullYear()
        cy.log(currentYear)
        let currentDateTime=date.getTime()
        cy.log(currentDateTime)
        let currentDateString=date.toLocaleDateString()
        cy.log(currentDateString)
        let currentTimeString=date.toLocaleTimeString()
        cy.log(currentTimeString)


        })
    })
