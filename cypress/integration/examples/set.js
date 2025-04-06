const { list } = require("@badeball/cypress-cucumber-preprocessor/pretty-reporter")

describe("Set", () => {
    it("Set", () => {
        let set=new Set([1,2,3,4,5])
        cy.log(set.has(1)) // Check if the set contains the value 1
        cy.log(set.has(6)) // Check if the set contains the value 6
        cy.log(set.add(6)) // Add the value 6 to the set
        cy.log(set.add(6)) // Add the value 6 to the set again (duplicate value)
        cy.log(set.add(1)) // Add the value 7 to the set        
        cy.log(set)

        set.forEach((i)=>cy.log(i)) // Log the updated set
        cy.log(set.delete(2)) // Delete the value 2 from the set
        
        cy.log(set.clear()) // Clear all values from the set
        let a=new Map([
            [1, "Rahul"],
            [2, "Shetty"],
            [3, "Academy"]
        ])        
    })
})