// TYPESCRIPT ASSERTIONS

// Alias

type One = string;

type Two = string | number;

type Three = 'hello';

// Convert to more or less specifific

let aVariable: One = 'hello';

let secondVariable = aVariable as Two; // less specific type

let thirdVariable = secondVariable as Three;

let d = <One>'World';
let e = <string | number>'World'; // this cant be use in tsx files

const addOrConcat = (
  a: number,
  b: number,
  c: 'add' | 'concat'
): number | string => {
  if (c === 'add') return a + b;
  return '' + a + b;
};

let myVal: string = addOrConcat(2, 2, 'concat') as string;

// be careful on this since typescript has no problem iwth this but a string is required

// mistakes can be made with assertions

let nextVal: number = addOrConcat(2, 2, 'concat') as number;

// 10 as string; typescript still checks assertions when it cans

// This is overriding types on typescript
// FORESCASTING two assertions at the same time

10 as unknown as string;

// THE DOM

const img = document.querySelector('img')!; // HTMLImageElement by inferring

img?.src; // possibly null so add the ! to img

img.src; // now is not necessary to add the exclamnation mark

const id = document.querySelector('#myId'); //Element

const myImg = document.getElementById('idImage')! as HTMLImageElement; //HTMLElement

// img.src object is posible null but it may not be in the document at all

// so lets create a new img with assertion

const img2 = document.querySelector('#imgId') as HTMLImageElement;

// SO we know better than typescript this is a image selected by id since we created the site so we overRule it by using assertion and telling to it that it is an image Element in html file

img2.src = 'iamgelInk'; // now it is working fine
/* 
myImg.src src does not exist in HTMLElement type so we even though with '!' assertion we are telling typescript that it still shows the error that src is not a property on MyImg */

// another way of saying this

const nextImg = <HTMLImageElement>document.getElementById('img');
