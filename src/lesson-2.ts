let myName = 'Keven'; // typescript infers datatype

let myName2: string = 'Keven2'; // we explicitly state the varaible type

// let myName2 = 42 // if emitOnError is true this wont compile to js

let myName3: string;

myName3 = 'keven';

let meaningOfLife: number;
let isLoading: boolean;
let album: any;
let album2: string | number;

meaningOfLife = 42;
isLoading = true;
album = 'Van Halen';
album = 1994;

const sum = (a: number, b: number) => {
  return a + b;
};

const sum2returnString = (a: number, b: string) => {
  return a + b;
};

let postId: string | number; //Union Type

let isActive: number | boolean; // ifn number it could be 0 or 1 boolean true or false

let re: RegExp = /\w+/g; // regular expressions would select all words
