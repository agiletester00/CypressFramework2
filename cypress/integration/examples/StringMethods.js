describe("String Methods", () => {
    it("String Methods", () => {
          
           let str="Rahul Shetty Academy"
        //    cy.log(str.replaceAll("ca","000")); // Slice the string to get "Rahul"
        //    cy.log(str);
        
           let s = "Rahul Shetty Academy"
           let ss=s.split(" "); // Split the string into an array of words
            //   cy.log(ss);
            //   ss.forEach((item) => {
            //     cy.log(item); // Log each word in the array
            //   })
            //     cy.log(ss.join(" ")); // Join the array back into a string
            //   ss.map((item) => {
            //     cy.log(item);
            //     cy.log(item.indexOf('a')) // Log each word in the array
            //   })

            //   cy.log(ss.join(""));
            //   cy.log(ss) // Join the array back into a string
                // cy.log(ss.push("Hello")); // Add a new word to the array
                // cy.log(ss.forEach(item=>{
                //     cy.log(item); // Log each word in the array
                // })); // Log the updated array
                ss.slice(2,1)
                cy.log(ss); // Remove the word at index 2
                ss.forEach(item=>{
                    cy.log(item); // Log each word in the array
                }); // Log the updated array
           


        })
    })