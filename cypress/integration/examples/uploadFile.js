describe('Upload File', () => {
  it('should upload a file', () => {
    cy.visit('https://rahulshettyacademy.com/upload-download-test/index.html'); // Replace with your actual URL
    cy.get("#downloadButton").click(); // Click the download button to download the file
    cy.wait(2000); // Wait for the file to download (adjust as needed)     

    const filePath = Cypress.config("fileServerFolder")+"/cypress/downloads/download.xlsx"; // Replace with the path to your file
    cy.log(filePath)
    cy.get("#fileinput").selectFile(filePath);
    cy. // Attach the file to the input element


    // Adjust the selector as needed
  });

  //getting multiple elements from the page
  
  it('should get multiple elements', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/'); // Replace with your actual URL
    cy.get("div[class='tableFixHead'] tr td:nth-child(2)").each(($el) => {
      const text = $el.text();
      cy.log(text); // Log the text of each element
    });
  });
})