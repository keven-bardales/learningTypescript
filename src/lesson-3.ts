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

let bands: string[] = [];

bands.push('Van Helen');

// Tuple

let myTuple: [string, number, boolean] = ['dave', 42, true]; // this is TUPLE

let mixed = ['John', 1, false]; // this is UNION

mixed = myTuple;

// myTuple = mixed; this is wrong it requires three elements

// myTuple[3] = 42 this is wrong 4th position is not defined

// myTuple[2] = 42; this position does not have number type

// OBJECTS

let myObj: object;

myObj = [];
console.log(typeof myObj); // output object eventhough is an array object is its type of

myObj = bands; // this will work even though bands is an array of strings

myObj = {}; // you decalre it is an object

const exampleObj = {
  prop1: 'Dave',
  prop2: true,
};

// exampleObj.prop1 = 5 this is wrong this should be string

// TYPES

type Guitarist = {
  name?: string;
  active: boolean;
  albums: (string | number)[]; // union type that is an array
  isActive: number | boolean;
};

let guitarrist1: Guitarist = {
  name: 'A name',
  isActive: 0,
  active: false,
  albums: ['OU8123', 5150, 1984],
};

let guitarrist2: Guitarist = {
  name: 'A Keven',
  isActive: 1,
  active: true,
  albums: ['I', 'II', 'IV'],
};

guitarrist1 = guitarrist2; // no issue here they have the same type
// if anything was removed from guitarrist2 there woiuld be a conflict

// guitarrist1.year = 40; we cant just add another property that does not exist

let guitarrist3: Guitarist = {
  name: 'OTher',
  active: true,
  albums: ['h', 564, 'hhaa'],
  isActive: true,
};

// optional PARAMETERS OF OBJECTS IN FUNCIONS can be also identified in thbis case if the naame is undefined it will return a different value and we can definitively do that validation in the code and also typeScript will let us know about it

const greetGuitarist = (guitarrist: Guitarist) => {
  const { name } = guitarrist;

  if (guitarrist.name) {
    return `Hello ${name?.toLocaleLowerCase()}`;
  }
  return 'hello no guitar name';

  //   return `Hello ${name.toLocaleLowerCase()}`; // name could be possibly undefined
};

console.log(greetGuitarist(guitarrist1));

const guitarristWithNoName: Guitarist = {
  active: true,
  albums: [1, 2, 3],
  isActive: false,
};

console.log(greetGuitarist(guitarristWithNoName));

// INTERFACE

interface Book {
  name: string;
  active?: boolean | number;
  id: string | number;
}

// ENUMS

// Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added tro the language and runtime

enum Grade {
  U = 1, // This will make alll the order change, //0this are values by default
  D, //1this are values by default
  C, //2 this are values by default
  B,
  A,
}

console.log(Grade.U); // output 0

console.log(Grade);

export type Guitarist2 = {
  name?: string;
  active: boolean;
  albums: (string | number)[]; // union type that is an array
  isActive: number | boolean;
};
