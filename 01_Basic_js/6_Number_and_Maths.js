const score =100

// console.log(score);

const balance = new Number(299)  // specify to the value is number

// console.log(balance);

// console.log(balance.toString().length); //total length of number
// console.log(balance.toFixed(2)); //used in ecommerce website calculation
// console.log(balance.toFixed());

const otherno = 120.33

// console.log(otherno.toPrecision(50));//practice this add the no in last(33)

// --------amount format in us,ind---------
const amt = 100000
// console.log(amt.toLocaleString('en-IN'));  //in indian amount format
// console.log(amt.toLocaleString('us-In'));  //in indian amount format


//+++++++++++++++maths+++++++++++++++
//method
// console.log(Math.abs(-4)); // Math.abs() returns the absolute value of a number. In this case, it returns 4 because the absolute value of -4 is 4.
// console.log(Math.round(3.8)); // Math.round() returns the value of a number rounded to the nearest integer. In this case, it returns 4 because 3.9 is closer to 4 than to 3.
// console.log(Math.floor(4.9));//ouput will be 4 (locks the value)
// console.log(Math.max(5,6,8,2,3)); //maximum value
// console.log(Math.min(5,6,8,2,3)); // minimum value
// console.log(Math.min(5,6,8,2,3));

// console.log(Math.random()); //o0 ya 1 bich me random value ati he
// console.log((Math.random()*10)+1); //ye calculation se value 0 nhii ayegi bhas 1 talak ajayegi
// console.log(Math.floor(Math.random()*10))+1;

//maths:  the Math object is a built-in global object that provides mathematical functions and constants. It allows you to perform common mathematical operations and calculations within your JavaScript code.
// const min =10
// const max =20

// console.log(Math.floor(Math.random() * (max - min + 1))+ min);

// console.log(Math.floor(Math.random()*(max - min +2))+min);