"use strict";
// TYPESCRIPT ASSERTIONS
// Convert to more or less specifific
let aVariable = 'hello';
let secondVariable = aVariable; // less specific type
let thirdVariable = secondVariable;
let d = 'World';
let e = 'World'; // this cant be use in tsx files
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// be careful on this since typescript has no problem iwth this but a string is required
// mistakes can be made with assertions
let nextVal = addOrConcat(2, 2, 'concat');
// 10 as string; typescript still checks assertions when it cans
// This is overriding types on typescript
// FORESCASTING two assertions at the same time
10;
// THE DOM
const img = document.querySelector('img'); // HTMLImageElement by inferring
img === null || img === void 0 ? void 0 : img.src; // possibly null so add the ! to img
img.src; // now is not necessary to add the exclamnation mark
const id = document.querySelector('#myId'); //Element
const myImg = document.getElementById('idImage'); //HTMLElement
// img.src object is posible null but it may not be in the document at all
// so lets create a new img with assertion
const img2 = document.querySelector('#imgId');
// SO we know better than typescript this is a image selected by id since we created the site so we overRule it by using assertion and telling to it that it is an image Element in html file
img2.src = 'iamgelInk'; // now it is working fine
/*
myImg.src src does not exist in HTMLElement type so we even though with '!' assertion we are telling typescript that it still shows the error that src is not a property on MyImg */
// another way of saying this
const nextImg = document.getElementById('img');
