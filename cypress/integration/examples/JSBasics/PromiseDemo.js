function fetchdata() 
{
    return new Promise((resolve, reject) => { // Added reject parameter
        const data = "Sample data";
        resolve(data);
        // reject ("am rejected")
    });
}

// fetchdata().then(function(data) { // Corrected syntax
//     console.log("Processing:", data); // Corrected log message

// })

const data=await fetchdata()
console.log("Processing:",data)