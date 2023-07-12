// INDEX SIGNATURES

// Usefull when created objects but not know names of the object keys

interface TransactionObj {
  readonly [index: string]: number; // index Signature
  Pizza: number;
  Books: number;
  Job: number;
}

/* interface TransactionObj {
  readonly [index: string]: number; // index Signatures
} */

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
  Dave: 45,
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);

// Dinamically accesing this

let prop: string = 'Pizza';

console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction]; /// implicity is any type
  }

  return total;
};

console.log(todaysNet(todaysTransactions));

// todaysTransactions.Pizza = 40 // index Signature only permits reading

console.log(todaysTransactions['Dave']);

/////////////////////////////

interface Student {
  // [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: 'Doug',
  GPA: 3.5,
  classes: [100, 80],
};

// console.log(student.test)

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`); // this is an option to index Signatures to loop throught the object
}

Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]); // we dont know the type so we reference it in type of student
});

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, 'name'); // this autoCompletes the method since we are defining this as keyof Student

/////////////////////////////////////////

/* interface Incomes {
  [key: string | number]: number;
  Pizza: string

} */

// LITERAL TYPES

type Streams = 'salary' | 'bonues' | 'sidehustle';

type Incomes = Record<Streams, number | string>;

const monthlyIncomes: Incomes = {
  salary: 500,
  bonues: 100,
  sidehustle: 250,
};

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}