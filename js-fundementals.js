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

//1.Function Declaration
function greetDeclaration(name) {
  console.log("Hello " + name + "!");
}
greetDeclaration("Negar");

function addition(n1, n2) {
  return n1 + n2;
}
console.log(addition(10, 20));

//2. Function Expression
const greetExpression = function (name) {
  console.log("Hello " + name + "!");
};
greetExpression("Elnaz");

//3. Arrow Function
const greetArrow = (name) => console.log("Hello " + name + "!");

greetArrow("JS");

const _addition = (n1, n2) => {
  const result = n1 + n2;
  return result;
};
console.log(_addition(10, 30));

function sum(...numbers) {
  // let total = 0;
  // for (let number of numbers) {
  //   total += number;
  // }
  let total = 0;
  numbers.forEach((number) => {
    total += number;
  });
  return total;
}
console.log(sum(1, 2, 3, 4, 5)); //15

let _name = "Alice";
let _age = 21;

let _message =
  "Hello, my name is " + _name + " and I am " + _age + " years old.";
console.log(_message);

let templateMessage =
  //template literal (backtick `)
  `Hello, my name is ${_name} and I am ${_age} years old.`;
console.log(templateMessage);

const g = 5;
const h = 10;
const theResult = `The sum of g and h is ${g + h}`;
console.log(theResult);

function add(x = 0, y = 0) {
  return x + y;
}
function subtraction(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y === 0) {
    throw new Error("Cannot divide by zero");
  }
  return x / y;
}

function calculate(num1, num2, operation) {
  return operation(num1, num2);
}

console.log(calculate(10, 0, subtraction));

try {
  console.log(calculate(10, 0, divide));
} catch (error) {
  console.log("Caught an error: ", error.message);
} finally {
  console.log("Finally block has been executed");
}

let text = "HEllo, World!";
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.indexOf("World"));
console.log(text.slice(0, 5));

//Date
const currentDate = new Date(); //current date
console.log(currentDate);
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth() + 1);
console.log(currentDate.getSeconds());

// console.log(currentDate.toLocaleDateString());
console.log(currentDate.toLocaleDateString("sv-SE"));
