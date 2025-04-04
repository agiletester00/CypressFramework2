describe("Interncept Concept",()=>
{
    it("Intercept Request and Response",()=>{
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");  

    
    cy.intercept({
        method : "GET",
        url : "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
     },
    {
        statusCode : 200,
        body : [{
                    "book_name": "RestAssured with Java",
                    "isbn": "LSA",
                    "aisle": "2303"
                }]

    }
    ).as('resp')
    cy.get("[data-toggle='modal']").click()
    cy.wait('@resp')
    cy.get("tbody tr").children().last().should('have.text','RestAssured with Java')
    //cy.get("tr td:nth-child(4)").should('have.text','RestAssured with Java')

    })

    


})