//Types of functions
// 1. Function Declaration  
// 2. Function Expression
// 3. Arrow Function
// 4. Anonymous Function
// 5. Immediately Invoked Function Expression (IIFE)
// 6. Constructor Function
// 7. Generator Function
// 8. Async Function
// 9. Callback Function
// 10. Higher Order Function
// 11. Recursive Function
// 12. Method Function
// 13. Setter and Getter Function
// 14. Promise Function
// 15. Class Function
// 16. Module Function
// 17. Self-Executing Function
// 18. Named Function Expression
// 19. Function with Default Parameters
// 20. Function with Rest Parameters
// 21. Function with Spread Operator
// 22. Function with Destructuring
// 23. Function with Closures
// 24. Function with Callbacks

// 1. Function Declaration
// A function declaration is a way to define a function in JavaScript.
// It is hoisted, meaning you can call the function before it is defined in the code.
function add(a, b) {
    return a + b;
}

// 2. Function Expression
// A function expression is a way to define a function as a value of a variable.
// It is not hoisted, meaning you must define the function before you call it.
const multiply = function(a, b) {
    return a * b;
};

// 3. Arrow Function
// An arrow function is a concise way to define a function in JavaScript.
// It has a shorter syntax compared to function expressions and declarations.
const divide = (a, b) => a / b;

// 4. Anonymous Function
// An anonymous function is a function without a name.
// It is often used as a callback function or in function expressions.
setTimeout(function() {
    console.log('Anonymous function executed');
}, 1000);

// 5. Immediately Invoked Function Expression (IIFE)
// An IIFE is a function that is defined and executed immediately.
// It is often used to create a private scope and avoid polluting the global scope.
(function() {
    console.log('IIFE executed');
})();

// 6. Constructor Function
// A constructor function is used to create objects.
// It is called with the `new` keyword.
function Person(name) {
    this.name = name;
}
const person1 = new Person('John');

// 7. Generator Function
// A generator function is a special type of function that can be paused and resumed.
// It uses the `yield` keyword to return values one at a time.
function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}
const generator = generateSequence();

// 8. Async Function
// An async function is a function that uses the `async` and `await` keywords to work with promises.
// It makes asynchronous code easier to read and write.
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}

// 9. Callback Function
// A callback function is a function that is passed as an argument to another function.
// It is executed after the outer function completes its task.
function greet(name, callback) {
    console.log('Hello, ' + name + '!');
    callback();
}

// 10. Higher Order Function
// A higher-order function is a function that takes one or more functions as arguments
// or returns a function as its result.
function operate(a, b, fn) {
    return fn(a, b);
}

// 11. Recursive Function
// A recursive function is a function that calls itself.
// It is often used to solve problems that can be broken down into smaller, self-similar subproblems.
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// 12. Method Function
// A method function is a function that is a property of an object.
const calculator = {
    add: function(a, b) {
        return a + b;
    }
};

// 13. Setter and Getter Function
// Setter and getter functions are used to control access to object properties.
// They allow you to define custom logic for getting and setting the values of properties.
const obj = {
    _age: 0,
    get age() {
        return this._age;
    },
    set age(value) {
        if (value >= 0) {
            this._age = value;
        }
    }
};

// 14. Promise Function
// A promise function is a function that returns a promise.
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation.
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved');
    }, 2000);
});

// 15. Class Function
// A class function is a function that is part of a class.
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log('Generic animal sound');
    }
}

// 16. Module Function (in a module)
// A module function is a function that is part of a module.
// Modules are used to organize code into reusable units.
// export function moduleFunction() {
//   console.log('Module function');
// }

// 17. Self-Executing Function (same as IIFE)
// A self-executing function is the same as an IIFE (Immediately Invoked Function Expression).
(function() {
    console.log('Self-executing function');
})();

// 18. Named Function Expression
// A named function expression is a function expression that has a name.
// The name is only accessible within the function itself.
const myFunc = function namedFunction() {
    console.log('Named function expression');
};

// 19. Function with Default Parameters
// A function with default parameters allows you to specify default values for function parameters.
// If a parameter is not provided when the function is called, the default value will be used.
function greetPerson(name = 'Guest') {
    console.log('Hello, ' + name);
}

// 20. Function with Rest Parameters
// A function with rest parameters allows you to pass an indefinite number of arguments to a function as an array.
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

// 21. Function with Spread Operator
// The spread operator allows you to expand an iterable (e.g., an array) into individual elements.
function display(a, b, c) {
    console.log(a, b, c);
}
const numbers = [1, 2, 3];
display(...numbers);

// 22. Function with Destructuring
// Destructuring allows you to extract values from objects or arrays and assign them to variables in a concise way.
function printPerson({ name, age }) {
    console.log(name, age);
}
const person = { name: 'Alice', age: 30 };
printPerson(person);

// 23. Function with Closures
// A closure is a function that has access to variables from its surrounding scope, even after the outer function has finished executing.
function outerFunction() {
    let outerVar = 'Hello';
    function innerFunction() {
        console.log(outerVar);
    }
    return innerFunction;
}
const closureExample = outerFunction();

// 24. Function with Callbacks (same as 9)
// A callback function is a function that is passed as an argument to another function.
// It is executed after the outer function completes its task.
function fetchDataNew(url, callback) {
        fetch(url)
            .then(response => response.json())
            .then(data => callback(data))
            .catch(error => console.error("Error fetching data:", error));
    }