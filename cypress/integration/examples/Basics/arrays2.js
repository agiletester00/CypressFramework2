let arr=[]
arr[0]=1
arr[1]=2
arr[2]=3
// arr{2}=4
arr[5]=4;
arr[3]=5

let as=arr.reduce((acc,curr)=>{
    console.log(acc,curr)
    return acc+curr
},0)

console.log(arr)
arr.fill(9,2)
    
console.log(arr)
  
console.log(as)