/**
 *  What is conversion operation?
 *  a conversion operation refers to the process of changing the data type of a variable from one type to another. It can be done using various functions or operations provided by  such as double(), char(), int8(), etc.
 * 
 */
let score ="123abc" //string
let score1 = 33 //number

// console.log(score);
// console.log(typeof score );
// console.log(typeof score1 );

let valueInNumber = Number(score)

// console.log(typeof score);
// console.log(typeof valueInNumber );
// console.log( valueInNumber );
// console.log(typeof NaN );

// //in js is not a perfect language thats why typescript made (strict rule)

// console.log(valueInNumber);

// // "33" => 33
// // "33abc" => Not an number
// // true=> 1; false => 0

let isLoggedin = 2 //true 1
// let isLoggedin = null //false 0
let booleanIsLoggedin = Boolean(isLoggedin) //  logged in variable converts in boolean variable

console.log(booleanIsLoggedin);
console.log(typeof null); //object

// 1=> true //2=> false
// "" => false
// "hitesh" => true
//  null  => false
// undefined => false

let stringIn = "12"

let stringOut = String(stringIn)


let name="omkar"

let full = Boolean(name)

// console.log(full);
// console.log(typeof stringOut);
// console.log(stringOut);


//-------operations 7-------
let value = 3

let nvalue = -value

// console.log(nvalue);

// console.log(2+2); //addition
// console.log(2-2); //subtraction
// console.log(2*2); //multiply
// console.log(2/2); //divide
// console.log(2**2); //doublemultiply
// console.log(2%2); //

let t1="hello"
let t2=" omkar"

let t3 = t1 +t2

// console.log(t3);

//dont use this technique
// console.log("1" + 2); //output 12 
// console.log(1 + "2"); //output 12 
// console.log("1" + 2 +2); //output 122
// console.log(2+3+"5"); //first calculate the no last print string

// console.log((3+4)+(5*3));//() use parenthesis in this sit

// console.log(+true); //1
// console.log(+"");// 0

let num1 ,num2,num3

num1 = num2 =num3 =2+2

// console.log(num1,num2,num3)

let gameCounter =100
--gameCounter //value increment /decrement

// console.log(gameCounter);
