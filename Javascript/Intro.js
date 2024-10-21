// This is basic syntax stuff for java script for my personal reference


// Variables and Constants
// Variables are declared with the var keyword. They can be changed.
// Constants are declared with the const keyword. They cannot be changed.
// let is another way of delaring variables. It is block scoped.
/* in summary;
    var - function scoped *it is much less frequently used now
    let - block scoped
    const - block scoped
*/
// if any of these variables are left blank (no = value), they will be undefined.
let firstName = "Dallas";
var age = 29;
const lastName = "Sherman";
console.log(firstName);
console.log(lastName);
console.log(age);

// you can log to console by using.

console.log ();

// Data Types 
// There are 7 data types in javascript
// 1. Number - a positive or negative integer or decimal. HOWEVER decimals are called floats.
/* you can also do math functions in javascript.
    + - addition
    - - subtraction
    * - multiplication
    / - division
    % - modulus
    ++ - increment
    -- - decrement
*/
// for example
let num= 5
let num2 = 10
let sum = num + num2
console.log(sum)

//or

let number = 5
let number2 = number + 1;
console.log(number2)

// 2. String - anything that is in ' " or ` is a string.

let string = 'this is a ';
let string2 = "string";
let string3 = `in javascript`;
console.log (string + string2 + string3);

// 3. Boolean - True or False

let bool = true;
let bool2 = false;
console.log(bool);
console.log(bool2);

// 4. Undefined - a variable that has been declared but not assigned a value.

let x;

// 5. Null - a variable that has been declared and assigned a value of null.

let y = null;

// 6. Symbol - a unique value that is not equal to any other value.
// 7. Object - a collection of key value pairs.
