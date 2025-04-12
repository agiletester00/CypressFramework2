let str="Kommu Sandeep Kumar";


let str1=str.toLocaleLowerCase().split("");

console.log(str1)

let map=new Map();


for (let ch of str1) 
{
     if(ch!=" " && ch!="")
    {
     map.set(ch,(map.get(ch)||0)+1)
    // console.log(ch);
    if("AEIOUaeiou".includes(ch))
    {
        console.log(ch+" is vowel")

        // map.set(ch,(map.get(ch)||0)+1)
    }
    else
    {
        console.log(ch+" is consonant")
    }
}
}


console.log(map)   
console.log(map.size) 

