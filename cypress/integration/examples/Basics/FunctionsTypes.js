//function declaration

function add()
{
    console.log("Hello add")

}


//function expression

let addfun  =function()
{
    console.log("Hello addfun");
}

addfun();


//Arrow function

let arrfun= ()=>console.log("Hello arrow function");
arrfun();

//IIFE Immediate invoked function exp
(function()
{
    console.log("hello IIFE")
}
)();



//call back function

function callBackFunction()
{
    console.log("Hello call back function");
}
function callFunction(callBa)

{
    console.log("Hello call function");
    callBa();
}
callFunction(callBackFunction);

