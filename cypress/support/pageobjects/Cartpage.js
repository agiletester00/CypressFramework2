import ConfirmationPage from "./ConfirmationPage";

class CartPage
{
    sumofProducts()
    {
        let sum=0
             return cy.get(".table tr td:nth-child(4) strong").each((num)=>
            {
               let  val=num.text().split(" ")[1].trim()
               cy.log(val)
               sum=sum+parseInt(val);
            }).then(()=>{
               return sum;
                
            })

    }
    checkOutItems()
    {
        cy.contains("button","Checkout").click()
        return new ConfirmationPage()
    }
}export default CartPage;