//dates



let mydate = new Date()

console.log(mydate); //not in proper format
console.log(mydate.toString()); //time in good format
console.log(mydate.setFullYear()); //nan
console.log(mydate.toDateString()); //invalid date
console.log(mydate.toLocaleString());
console.log(mydate.getDay());

//interview questions
// console.log(typeof mydate);  //object

//made your own date
// let mycreatedate = new Date(2003,6,12)

//customize date
let mycreatedate = new Date("2022-2-10") // us date format
let mycreatedates = new Date("01-02-2019") //ind date format

// console.log(mycreatedate.toLocaleString());

//timestamps
//Yes, exactly! In JavaScript, Date.now() returns the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC
// let myTmestamp = Date.now()
// let r = new Date

// console.log(myTmestamp);
// console.log(mycreatedate.getTime());

console.log(Math.floor(Date.now()/1000));

///
let newDate = new Date()

// console.log(newDate.getMonth());

newDate.toLocaleString('default',{
    weekday: "long",
})

console.log(newDate);