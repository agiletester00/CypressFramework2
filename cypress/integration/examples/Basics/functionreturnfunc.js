//call back function

function add(a,b)
{
    console.log(a+b);
    return a+b;
}

function funcall(callback)
{
    console.log("This is funcall")
    callback(100,200);


}
funcall(add);

add(100,200);


