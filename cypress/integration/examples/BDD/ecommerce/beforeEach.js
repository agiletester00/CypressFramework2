import HomePage from "../../../../support/pageobjects/HomePage";
before(function()
{
        this.homePage=new HomePage()
        cy.fixture('example').then(function(data)
            {
                this.data=data;
                // this.homePage=new HomePage()
               
            })
})