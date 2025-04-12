describe('MySQL Database connection Example', () => 
  {
    
    it("Demo of Database", () => {
      let sqlquery="SELECT * FROM actor LIMIT 10";
      cy.task("queryDb", sqlquery).then((result) => {
        // Assert that the result is an array with a length of 5
         expect(result).to.have.length(5);
        cy.log(JSON.stringify(result));
      });
    })
})


