// let a=12,b=98,temp;
// temp=a;
// a=b;
// b=temp;
// console.log("String a and b : "+a,b)

// let n=[1,3,5,2,8,3,4,6]

// let even=[],odd=[]

// for(let i of n)
// {
//     if(i%2==0)
//         even.push(i)
//     else
//         odd.push(i)
// }
// console.log(even)
// console.log(odd)
class ArraysDemo{
    
let n=[1,3,5,2,8,3,4,6]
let n1=(sortingArray(n))
console.log(n1);


function sortingArray(a)
{
    if(!a.length==0)
    for(let si=0;si<a.length-1;si++)
    {
        for(let j=0;j<a.length-si-1;j++)
        {
            if(a[j]>a[j+1])
            {
                a[j]=a[j]+a[j+1]
                a[j+1]=a[j]-a[j+1]
                a[j]=a[j]-a[j+1]
            }
        }
    }

    console.log(a)
    return a;


    }
}export default ArraysDemo;

