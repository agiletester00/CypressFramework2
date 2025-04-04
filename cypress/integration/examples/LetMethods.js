describe("Let Methods", () => {
    it("Let Method", () => {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
        cy.get("#opentab").invoke("removeAttr", "target").click();
      
        cy.origin("https://www.qaclickacademy.com/", () => {
          cy.url().should("include", "https://www.qaclickacademy.com/");

          cy.log("URL is verified"+cy.url());
           let str="Rahul Shetty Academy"
           str.slice(0, 5); // Slice the string to get "Rahul"
           cy.log(str); 

          });
        });
        }) // Remove target attribute and click
        // cy.url().should("include", "https://www.qaclickacademy.com/");
        // cy.go("back"); // Go back to the previous page
    
    