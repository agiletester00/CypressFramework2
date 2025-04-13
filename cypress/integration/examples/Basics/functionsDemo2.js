let person ={
    name:"Selenium",
    age:5,
    greet:function(){
        console.log("Hello ",this.name);
    },
        greet2:function(user){
        console.log("Hello ",user,this.age);
    }
}
person.greet("appium");
person.greet2("appium");
// greet("Selenium");
// greet2("Selenium") ;

// greet();
// greet2();
