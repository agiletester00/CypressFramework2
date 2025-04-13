class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hello ", this.name);
    }
    greet2(user) {
        console.log("Hello ", user, this.age);
    }
}
let person1 = new Person("Selenium", 5);
let person2 = new Person("Appium", 3);
person1.greet("appium");
person1.greet2("appium");
person2.greet("appium");
person2.greet2("appium");
