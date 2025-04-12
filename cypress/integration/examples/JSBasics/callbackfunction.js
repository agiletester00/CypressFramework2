function fetchdata(callback)
{
    
    setTimeout(()=>
    {
        console.log("This is fetch data");
        const data="sample data";
        callback(data);
        

    },2000);
}
function processdata(data)
{
    console.log("Processing",data);
}
function modifydata(data)
{
    console.log("Modifying",data);
}
fetchdata(processdata);
fetchdata(modifydata);