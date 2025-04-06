let a=12,b=98,temp;
temp=a;
a=b;
b=temp;
console.log("String a and b : "+a,b)

let n=[1,3,5,2,8,3,4,6]

let even=[],odd=[]

for(let i of n)
{
    if(i%2==0)
        even.push(i)
    else
        odd.push(i)
}
console.log(even)
console.log(odd)

