describe("String Methods", () => {
    it("String Methods", () => {
          
        //    let str="Rahul Shetty Academy"
        // //    cy.log(str.replaceAll("ca","000")); // Slice the string to get "Rahul"
        // //    cy.log(str);
        
        //    let s = "Rahul Shetty Academy"
        //    let ss=s.split(" "); // Split the string into an array of words
        //     //   cy.log(ss);
        //     //   ss.forEach((item) => {
        //     //     cy.log(item); // Log each word in the array
        //     //   })
        //     //     cy.log(ss.join(" ")); // Join the array back into a string
        //     //   ss.map((item) => {
        //     //     cy.log(item);
        //     //     cy.log(item.indexOf('a')) // Log each word in the array
        //     //   })

        //     //   cy.log(ss.join(""));
        //     //   cy.log(ss) // Join the array back into a string
        //         // cy.log(ss.push("Hello")); // Add a new word to the array
        //         // cy.log(ss.forEach(item=>{
        //         //     cy.log(item); // Log each word in the array
        //         // })); // Log the updated array
        //         ss.slice(2,1)
        //         cy.log(ss); // Remove the word at index 2
        //         ss.forEach(item=>{
        //             cy.log(item); // Log each word in the array
        //         }); // Log the updated array

        //         ss.find((item,index)=>{
        //             if(item=="Academy"){
        //              cy.log("Hurray at"+index) 
        //             }// Log each word in the array
        //         }) // Log the updated array


        //         ss.keys().forEach((key) => {
        //             cy.log(key); // Log each word in the array
        //         }) // Log the updated array
        //         ss.entries().forEach((value) => {
        //             cy.log(value); // Log each word in the array
        //         }) // Log the updated array
        //         ss.entries().forEach(([index, value]) => {
        //             cy.log(index, value); // Log each word in the array
        //         })
        //         ss.pop(); // Remove the last word from the array
        //         cy.log(ss); // Log the updated array    
        //         ss.unshift("Guru"); // Add a new word to the beginning of the array
        //         cy.log(ss); // Log the updated array
        //         // ss.shift(); // Remove the first word from the array
        //         // cy.log(ss); // Log the updated array
        //         ss.splice(2, 1); // Remove the first word from the array
        //         cy.log(ss); // Log the updated array
        //          ss.splice(0, 1, "Hello"); // Remove the first word from the array and add a new word
        //         ss.forEach(item=>cy.log(item)); // Log the updated array
        //         // ss.splice(0, 1, "Hello", "World"); // Remove the first word from the array and add two new words
        //         // cy.log(ss); // Log the updated array
        //         // ss.splice(0, 1, "Hello", "World", "Guru"); // Remove the first word from the array and add three new words
        //         ss.at(0); // Get the first word from the array
        //          cy.log(ss.at(0)); // Log the updated array

                 let a=[1,2,3,4,5]
                    let b=[6,7,8,9,10]
                    let c=[...a,...b] // Merge two arrays into one
                //     c.forEach((n)=>cy.log(n)) // Log the updated array

                //    // Reduce the array to a single value
                //     cy.log(c.reduce((accumulator, currentValue) => {
                //         return accumulator + currentValue;
                //     },0)); // Log the updated array
                //     c.reverse(); 
                //     c.forEach((n)=>cy.log(n))// Reverse the order of the array
                //     cy.log(c); // Log the updated array
                //     c.sort((a,b)=>a-b); // Sort the array in ascending order
                //     c.forEach((n)=>cy.log(n)) // Log the updated array
                    c.filter((n)=>n>5).forEach((n)=>cy.log(n)) // Filter the array to get only the values greater than 5
                    c.forEach((n)=>cy.log(n)) // Log the updated array
                    c.map((n)=>cy.log(n)) // Map the array to get the square of each value
                    c.splice(0,5)
                    c.map((n)=>cy.log(n)) // Map the array to get the square of each value
                    let myMap = new Map([
                        [1, "Rahul"],
                        [2, "Shetty"],
                        [3, "Academy"]
                    ])
                    // myMap.set(4,"Hello")
                    myMap.set(5,"World")
                    // myMap.set(6,"Guru")
                    myMap.set(7,"Hello")
                    myMap.values().forEach((value)=>{
                        cy.log(value) // Log each word in the array
                    })
                    myMap.keys().forEach((key)=>{
                        cy.log(key) // Log each word in the array
                    })
                    myMap.delete(7) // Delete the word at index 2
                    // a.set(4,"Hello")
                    // a.set(5,"World")
                    // a.set(6,"Guru")
                    myMap.forEach((value,key)=>{    
                        cy.log(key+" : "+value) // Log each word in the array
                    })

                    let math=Math.pow(2,3) // Calculate the power of 2 to the 3
                    cy.log(math) // Log the updated array

                    let day=new Date()
                    

        })
    })