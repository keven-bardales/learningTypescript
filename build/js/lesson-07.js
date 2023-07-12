"use strict";
// INDEX SIGNATURES
/* interface TransactionObj {
  readonly [index: string]: number; // index Signatures
} */
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Dave: 45,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
// Dinamically accesing this
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction]; /// implicity is any type
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
// todaysTransactions.Pizza = 40 // index Signature only permits reading
console.log(todaysTransactions['Dave']);
const student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 80],
};
// console.log(student.test)
for (const key in student) {
    console.log(`${key}: ${student[key]}`); // this is an option to index Signatures to loop throught the object
}
Object.keys(student).map((key) => {
    console.log(student[key]); // we dont know the type so we reference it in type of student
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'name'); // this autoCompletes the method since we are defining this as keyof Student
const monthlyIncomes = {
    salary: 500,
    bonues: 100,
    sidehustle: 250,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
