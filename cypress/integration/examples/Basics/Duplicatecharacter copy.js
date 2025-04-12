let str="Selenium";

let s=str.toLowerCase().split("");
let i=1,length=s.length
for (let ch of s)
{
    let sub=str.slice(i,length)
    // console.log(sub)
    if(sub.includes(ch))
    {
        console.log(ch);
        break;
    }

    i++;
}