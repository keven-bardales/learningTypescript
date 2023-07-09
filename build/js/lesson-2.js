"use strict";
let myName = 'Keven'; // typescript infers datatype
let myName2 = 'Keven2'; // we explicitly state the varaible type
// let myName2 = 42 // if emitOnError is true this wont compile to js
let myName3;
myName3 = 'keven';
let meaningOfLife;
let isLoading;
let album;
let album2;
meaningOfLife = 42;
isLoading = true;
album = 'Van Halen';
album = 1994;
const sum = (a, b) => {
    return a + b;
};
const sum2returnString = (a, b) => {
    return a + b;
};
let postId; //Union Type
let isActive; // ifn number it could be 0 or 1 boolean true or false
let re = /\w+/g; // regular expressions would select all words
