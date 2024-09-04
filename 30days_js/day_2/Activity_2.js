// Activity 1: Arithmetic Operations

// task1
n1 = 5;
n2 = 10;
console.log(n1 + n2);

// task2
n1 = 5;
n2 = 10;
console.log(n1 - n2);

// task3
n1 = 5;
n2 = 10;
console.log(n1 * n2);

// task4
n1 = 5;
n2 = 10;
console.log(n1 / n2);

// task5
n1 = 5;
n2 = 10;
console.log(n1 % n2);

// Activity 2: Assignment Operators

// task6
n1 = 5;
n2 = n1 + 5;
console.log(n2);

// task7
n1 = 5;
n2 = n1 - 5;
console.log(n2);

// task8
console.log(10 > 5);
console.log(10 < 5);

// task9
console.log(20 >= 10);
console.log(20 <= 10);

// task10
console.log(6 == 10);
console.log(10 === 20);

// Activity 4: Logical Operators

// task11
u = "omkar";
p = 100;
if ((u = "omkar" && p == 100)) {
  console.log("login successfull");
} else {
  console.log("login failed");
}

// 12
u = "omkar";
p = 100;
if ((u = "omkar" || p == 100)) {
  console.log("login successfull");
} else {
  console.log("login failed");
}

// 13 revise the topic
use = true;
set = !use;
console.log(set);

// Activity 5: Ternary Operator

// 14
pn = 5;
let no = pn > 0 ? true : false;
console.log(no);

// Feature Requests

// 1
a = 10;
b = 20;
function Arithmetic() {
  console.log("add", a + b);
  console.log("sub", a - b);
  console.log("mult", a * b);
  console.log("divide", a / b);
  console.log("reminder", a / b);
}
Arithmetic();

// 2
// Define two numbers for comparison
let num1 = 10;
let num2 = 5;

// Comparison Operators
console.log(`Equality: ${num1} == ${num2} is ${num1 == num2}`); // Output: Equality: 10 == 5 is false
console.log(`Inequality: ${num1} != ${num2} is ${num1 != num2}`); // Output: Inequality: 10 != 5 is true
console.log(`Greater Than: ${num1} > ${num2} is ${num1 > num2}`); // Output: Greater Than: 10 > 5 is true
console.log(`Less Than: ${num1} < ${num2} is ${num1 < num2}`); // Output: Less Than: 10 < 5 is false
console.log(`Greater Than or Equal: ${num1} >= ${num2} is ${num1 >= num2}`); // Output: Greater Than or Equal: 10 >= 5 is true
console.log(`Less Than or Equal: ${num1} <= ${num2} is ${num1 <= num2}`); // Output: Less Than or Equal: 10 <= 5 is false

// Logical Operators
console.log(
  `AND: ${num1} > ${num2} && ${num1} != ${num2} is ${
    num1 > num2 && num1 != num2
  }`
); // Output: AND: 10 > 5 && 10 != 5 is true
console.log(
  `OR: ${num1} > ${num2} || ${num1} == ${num2} is ${
    num1 > num2 || num1 == num2
  }`
); // Output: OR: 10 > 5 || 10 == 5 is true
console.log(`NOT: !(${num1} > ${num2}) is ${!(num1 > num2)}`); // Output: NOT: !(10 > 5) is false

// Combining Conditions
console.log(
  `Combining Conditions: ${num1} > ${num2} && ${num1} != ${num2} && ${num1} >= ${num2} is ${
    num1 > num2 && num1 != num2 && num1 >= num2
  }`
); // Output: Combining Conditions: 10 > 5 && 10 != 5 && 10 >= 5 is true
