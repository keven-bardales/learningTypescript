"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let stringArr = ['one', 'hey', 'Keven'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
// stringArr[0] = 42; // eveerything in the array is only strings
stringArr[0] = 'John';
// stringArr.push(42) this wont also work
stringArr.push('hey');
guitars[0] = 1984; // no issue on the position even though the first position was a string
guitars.unshift('Jim');
// guitars.unshift(true); // wonmt work
// stringArr = guitars this is wrong because guitars has multiple values
guitars[0] = stringArr[0]; //this is ok
mixedData = guitars; //this is ok
// guitars = mixedData this wont work beacause they have different types
let test = [];
let bands = [];
bands.push('Van Helen');
// Tuple
let myTuple = ['dave', 42, true]; // this is TUPLE
let mixed = ['John', 1, false]; // this is UNION
mixed = myTuple;
// myTuple = mixed; this is wrong it requires three elements
// myTuple[3] = 42 this is wrong 4th position is not defined
// myTuple[2] = 42; this position does not have number type
// OBJECTS
let myObj;
myObj = [];
console.log(typeof myObj); // output object eventhough is an array object is its type of
myObj = bands; // this will work even though bands is an array of strings
myObj = {}; // you decalre it is an object
const exampleObj = {
    prop1: 'Dave',
    prop2: true,
};
let guitarrist1 = {
    name: 'A name',
    isActive: 0,
    active: false,
    albums: ['OU8123', 5150, 1984],
};
let guitarrist2 = {
    name: 'A Keven',
    isActive: 1,
    active: true,
    albums: ['I', 'II', 'IV'],
};
guitarrist1 = guitarrist2; // no issue here they have the same type
// if anything was removed from guitarrist2 there woiuld be a conflict
// guitarrist1.year = 40; we cant just add another property that does not exist
let guitarrist3 = {
    name: 'OTher',
    active: true,
    albums: ['h', 564, 'hhaa'],
    isActive: true,
};
// optional PARAMETERS OF OBJECTS IN FUNCIONS can be also identified in thbis case if the naame is undefined it will return a different value and we can definitively do that validation in the code and also typeScript will let us know about it
const greetGuitarist = (guitarrist) => {
    const { name } = guitarrist;
    if (guitarrist.name) {
        return `Hello ${name === null || name === void 0 ? void 0 : name.toLocaleLowerCase()}`;
    }
    return 'hello no guitar name';
    //   return `Hello ${name.toLocaleLowerCase()}`; // name could be possibly undefined
};
console.log(greetGuitarist(guitarrist1));
const guitarristWithNoName = {
    active: true,
    albums: [1, 2, 3],
    isActive: false,
};
console.log(greetGuitarist(guitarristWithNoName));
// ENUMS
// Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added tro the language and runtime
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U); // output 0
console.log(Grade);
