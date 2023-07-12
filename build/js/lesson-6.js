"use strict";
class Coder {
    constructor(name, music, age, lang = 'TypeScript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Dave = new Coder('Dave', 'Rock', 42);
console.log(Dave.getAge());
// console.log(Dave.age);  this wont compile if onEmitError is set to true
// console.log(Dave.lang);  this wont compile if onEmitError is set to true
// console.log(Dave.age) this is wrong because they are private values
// properties are called members
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Keven = new WebDev('Acer', 'Keven', 'reggaeton', 21);
console.log(Keven.getLang()); // i write typescript wuhuuuu
// console.log(Keven.music); this wont compile also
console.log(Keven.getAge());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Guitarist1 = new Guitarist('name of guitarist', 'guitar');
console.log(Guitarist1.play('plays'));
////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const David = new Peeps('David');
console.log(Peeps.count); // this count is set up on the class itself not in the instance of the class itself
console.log(Steve.id); // this outputs 2 because was the second instance to be created
//////////////////////////////////////////
// getters and Setters
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        // get is an special word for getters and setters
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error('Param is not an array of strings');
        }
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil Younbg', 'Led Zep'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ Top'];
console.log(MyBands.data);
// MyBands.data = 'Van Halen'; // you cannot assign this to array
/* MyBands.data = ['Van Halen', 54654];  */ // this wont compile if onEmit si set true but also we made a validation to throw an error when setting something that is not a type of string
