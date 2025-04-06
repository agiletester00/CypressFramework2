describe("Swapping of Numbers",()=>{
    it("Swaping with temo",()=>{
        let a=12,b=98,temp;
        temp=a;
        a=b;
        b=temp;
        cy.log("String a and b : "+a,b)


    })

    it("Swapping without a temp variable",()=>{
        let a=12,b=34
        cy.log(a,b)

        a=a+b
        b=a-b
        a=a-b
        cy.log("String a and b : "+a,b)

    })
    it("Array print",()=>{
        // let n=[[1,2],[3,2],[4,5]]
        let n1=[2,6,7,8,1,3,5]
        let num=1,index=-1
        //Linear Search

        for(let i=0;i< n1.length;i++)
        {
            if(num==n1[i])
            {
                index=i;
                break;
            }   
        }
        cy.log("Item is at position "+(++index))
        for(let i of n1)
            cy.log(i)
        cy.log(n1)


    })

    it("")



})