// Type Aliasses

type stringOrNumber = string | number;

type stringOrNumberArrayManual = (string | number)[]; // Alias

type stringOrNumberArrayAuto = stringOrNumber[];

type Guitarist3 = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArrayAuto;
};

type UserId = stringOrNumber;

type User = {
  userId: UserId;
};

// interface PostId = stringOrNumber this wont work only works with types

// LITERAL TYPES

let myNmae2: 'Keven'; // literal assignment

// myName = 'John'; wont work only with Keven

let userName: 'Keven' | 'John' | 'Eymi';

userName = 'Keven'; // this uses intellisense help from vs Code

// FUNCTIONS

const add = (a: number, b: number): number /**Returns a number */ => {
  return a + b;
};

const logMsg = (message: any) => {
  console.log(message);
}; // this is a void because it does not have a return explicitly declared

logMsg('Hello');
logMsg(add(2, 3));

let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = (a, b) => a * b;

logMsg(multiply(2, 2)); // now you dont have to define the parameters values everytime

// functions can be used more with types but can also be used with interfaces

interface anotherMathFunction {
  (a: number, b: number): number;
}

let division: anotherMathFunction = (a, b) => a / b; // this is for an interface

logMsg(division(100, 5));

// OPTIONAL PARAMETERS FUNCTIONS
// REQUIRED PARAMETERS NEED TO COME FIRST

const addAll = (a: number, b: number, c?: number): number => {
  // typecard
  if (typeof c !== 'undefined') {
    return a + b + c;
  }
  return a + b;
};

// default param value in this type of function

const sumAll = (a: number = 5, b: number, c: number = 2): number => {
  // C is still optional because of undefine validation
  // typecard
  return a + b + c;
};

console.log(sumAll(undefined, 3)); // this is for it using the default value since is a is the first parameter and it needs to use undefined if want to use the 5 inside the function

// Rest Parameters

// this function takes all from the numbers and basically it makes it an array
const total = (a: number, ...nums: number[]): number => {
  return nums.reduce((prev, current) => prev + current);
};

logMsg('total' + total(1, 2, 3, 4)); // here it does not take the one since is not inside the rest parameter OUTPUT 9

const total2 = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, current) => prev + current);
};

logMsg(total2(1, 2, 3, 4)); //now it should take the one also OUTPUT 10

// REST PARAMETER SHOULD BE AT THE END

// NEVER TYPE it does not return anything like in errors for example

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

//TYPE GUARD WITH TYPESCRIPT

const isNumber = (value: any): boolean => {
  return typeof value === 'number' ? true : false;
};

// use of the never type
const numberOrString = (value: number | string): string => {
  if (typeof value === 'string') return 'String';
  if (isNumber(value)) return 'number';
  return createError('This should never happen');
};
