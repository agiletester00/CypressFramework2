import CartPage from "./Cartpage"

class ProductPage{

pageValidation()
{
    cy.contains("Shop Name").should('be.visible')
}

getCardCount()
{
    return cy.get("app-card")
}
selectProduct(productName)
{
    cy.get("app-card").filter(`:contains("${productName}")`).contains('button',"Add ").click()
   
}
selectFirstProduct()
{
    cy.get("app-card").eq(0).find(".btn-info").click()
}
goToCart()
{
    cy.contains('a','Checkout').click()
    return new CartPage()
}

proceedToCheckOut()
{
    cy.contains("button","Checkout").click()
    return new CartPage()
}


}export default ProductPage;