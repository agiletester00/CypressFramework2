const students=[{name:"Alice",score : 55},
                {name:"Bob",score : 75},
                {name:"Tom",score :35},
                {name:"Xon",score :15},
                {name:"Mon",score : 10}];


               let passsTudents =students.filter(s=>s.score>=36)
    console.log(passsTudents)

    let upper=passsTudents.map(s=>s.name.toUpperCase())
    console.log(upper)

    // let sum=passsTudents.reduce(function(aac,st)
    // {
    //     acc=acc+st.score;
    //     return acc;

    // },0)

     let sum=passsTudents.reduce(function(acc,st)
        {
            acc=acc+st.score;
            return acc;

        },0)

        console.log(sum);

     //with predicate function
        let sum1=passsTudents.reduce((acc,st)=>acc+st.score,0)
        console.log(sum1);
        console.log(sum1==sum)




