const { faker } = require('@faker-js/faker');


describe('Arrays Demo', () => {
    it('Arrays Demo', () => {

        let a=[1,5,2,6,3,4,8,9,7,6]
        //even odd numbers
        let even = a.filter((num) => num % 2 == 0)
        let odd = a.filter((num) => num % 2 != 0)
        //sort numbers without using sort function
        // even.forEach(num=>cy.log(num))
        // odd.forEach(num=>cy.log(num))

        let e=[],o=[]
        for(let i of a)
        {
            if(i%2==0)
            {
               e.push(i) 
            }
            else
            {
                o.push(i)
            }
        }
        cy.log("even Array")
        e.forEach(num=>cy.log(num))

        cy.log("Odd array")
        o.forEach(num=>cy.log(num))





        



            





        })
    })
    

