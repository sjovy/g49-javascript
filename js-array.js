let numbers = [1, 2, 3, 4];
console.log(numbers[2]);

numbers[1] = 10;

numbers.push(6, 7);
numbers.pop();
console.log(numbers);

numbers.forEach((number) => console.log(number));

let evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);
console.log(numbers);
let doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);

const names = ["John", "Negar", "Alice"];
console.log(names.sort());

const points = [100, 23, 56, 2, 90];
console.log(points.sort((a, b) => b - a));
