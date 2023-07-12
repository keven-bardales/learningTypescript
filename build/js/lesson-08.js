"use strict";
// GENERICS
const echo = (arg) => arg;
const isObject = (arg) => {
    return typeof arg === 'object' && !Array.isArray(arg) && arg !== null;
};
console.log(isObject(true));
console.log(isObject('John'));
console.log(isObject([1, 2, 3]));
console.log(isObject(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObject(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue(true));
console.log(isTrue(0));
console.log(isTrue(1));
console.log(isTrue(2));
console.log(isTrue(undefined));
console.log(isTrue(null));
console.log(isTrue({ 1: { user: 'Keven' } }));
console.log(isTrue(NaN));
console.log(isTrue(isNaN(5)));
console.log(isTrue(-0));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObject(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
console.log(checkBoolValue(false));
console.log(checkBoolValue(true));
console.log(checkBoolValue(0));
console.log(checkBoolValue(1));
console.log(checkBoolValue(2));
console.log(checkBoolValue(undefined));
console.log(checkBoolValue(null));
console.log(checkBoolValue({ 1: { user: 'Keven' } }));
console.log(checkBoolValue(NaN));
console.log(checkBoolValue(isNaN(5)));
console.log(checkBoolValue(-0));
const processUser = (user) => {
    //process the user with logic here
    return user;
};
// it identifies it is not receiving the type id in the object
console.log(processUser({ id: 1, name: 'Dave' }));
// console.log(processUser({ name: 'Dave' }));
const getUsersProperty = (users, key) => {
    return users.map((user) => user[key]);
};
// console.log(getUsersProperty(users, 'email'))
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject('John');
console.log(store.state);
store.state = 'Dave';
console.log(store.state);
// store.state = 12 not possible typescript is inferring it is a string
const myState = new StateObject([15]);
myState.state = ['Dave', 42, true];
