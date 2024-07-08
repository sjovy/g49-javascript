//Javascript Variables
let age = 25;
let temprature = -18.5;

let name = "Alice";
let message = "Hello World!";

let myVar = 10; //number
myVar = "10"; //string

let isRaining = true; //false

//Object data type
let person = { id: 1, name: "Alice", isStudent: true };

//array
let numbers = [1, 2, 3, 4];

let nullVar = null;
let description; //undefined

console.log(message);

const PI = 3.32;
// PI = 3.141;

console.log("PI", PI);

const BASED_API_URL = "http://localhost:8080/api/v1/";

const student = { name: "John", age: 32 };
student.name = "Thomas";
console.log(student.name);

//for loop
for (let i = 1; i < 10; i++) {
  // if (i % 2 == 0) {
  //   console.log(i, " is" + " even");
  // } else {
  //   console.log(i, " is" + " odd");
  // }

  //turnury operation
  console.log(i % 2 == 0 ? i + "even" : i + "odd");
}

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's the beginning of the week.");
    break;
  case "Sunday":
    console.log("It's the end of the week.");
    break;
  default:
    console.log("It's the middle of the week");
    break;
}

//operator
let a = 10;
let b = 10;
let c = a + b;

let n1 = 10;
let n2 = "10";
let isEqual = n1 == n2; //true
console.log(isEqual);

let isStrictEqual = n1 === n2; //false
