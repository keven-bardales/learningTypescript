"use strict";
// Type Aliasses
// interface PostId = stringOrNumber this wont work only works with types
// LITERAL TYPES
let myNmae2; // literal assignment
// myName = 'John'; wont work only with Keven
let userName;
userName = 'Keven'; // this uses intellisense help from vs Code
// FUNCTIONS
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
}; // this is a void because it does not have a return explicitly declared
logMsg('Hello');
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
let multiply = (a, b) => a * b;
logMsg(multiply(2, 2)); // now you dont have to define the parameters values everytime
let division = (a, b) => a / b; // this is for an interface
logMsg(division(100, 5));
// OPTIONAL PARAMETERS FUNCTIONS
// REQUIRED PARAMETERS NEED TO COME FIRST
const addAll = (a, b, c) => {
    // typecard
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// default param value in this type of function
const sumAll = (a = 5, b, c = 2) => {
    // C is still optional because of undefine validation
    // typecard
    return a + b + c;
};
console.log(sumAll(undefined, 3)); // this is for it using the default value since is a is the first parameter and it needs to use undefined if want to use the 5 inside the function
// Rest Parameters
// this function takes all from the numbers and basically it makes it an array
const total = (a, ...nums) => {
    return nums.reduce((prev, current) => prev + current);
};
logMsg('total' + total(1, 2, 3, 4)); // here it does not take the one since is not inside the rest parameter OUTPUT 9
const total2 = (a, ...nums) => {
    return a + nums.reduce((prev, current) => prev + current);
};
logMsg(total2(1, 2, 3, 4)); //now it should take the one also OUTPUT 10
// REST PARAMETER SHOULD BE AT THE END
// NEVER TYPE it does not return anything like in errors for example
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//TYPE GUARD WITH TYPESCRIPT
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
// use of the never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'String';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen');
};
