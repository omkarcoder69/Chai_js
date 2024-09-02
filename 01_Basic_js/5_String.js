// ------ imp the key start from 0------ 
const name ="Omkar"
const repo=5

// console.log(name +repo +"hello")  //outdated in js

// console.log(`hello my name is ${name} i have ${repo} year experience in js`); //modern js 

// console.log(`hello  i am from mumbai bharat i am ${repo}`);

const gname = new String('omkar') //2nd type of string to apply in js (try in browser)
//two types of inbuilt ->  prototpye(To access string object)->prototype(object) and primitive value (means single value)
// const gname="omkar"


//master string
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------- inbuilt string objects----------------

//undefined because this letter not exist
// console.log(gname[5]); 

//key position from 0 to 4-5 according to your code
// console.log(gname [4] ); 

//  prototype access {}=>scope
// console.log(gname.__proto__ );

// search character ouput comes in positive or negative
// console.log(gname.search('om'));

// counts the total charcter word in variable start from 1
// console.log(gname.length); 

// //copy the value from stack in upper case
// console.log(gname.toLocaleUpperCase());

// //copy the value from stack in lower case
// console.log(gname.toLocaleLowerCase());

// //character position in string format
// console.log(gname.charAt('3'));

// //character position in number format
// console.log(gname.indexOf('r'));

// ---------------- inbuilt string objects----------------
// reason for why substring not use 3rd position :- when you use the substring method, the second parameter represents the index before which to end the extraction. 

//ouput from 0 th position to 1st position   (om)
 const nstring = gname.substring(0,2) 
//  console.log(nstring);

// The output of astring would be "om" because the slice(0, -3) method extracts characters from the start of the string up to, but not including, the last three characters. So, for the string "omkar", the output astring would be "om".
const astring = gname.slice(0,-3) //reverse
// console.log(astring);

const nstringone = "   hitesh   "
// console.log(nstringone); //without trim  (ignore the space)
// console.log(nstringone.trim()); //with trim (no space aloud)

const url ="https://www.google.co.in/"

// console.log(url.replace('in','bharat')); //replace the value
// console.log(url.replace('google','omkar'));

//output in positive or negative
console.log(url.includes('google')) //find the value ()
console.log(url.includes('remo')); //not find

//eg when the glass break break into  peaces (meaning of split)
console.log(gname.split()); //split in group


//concat The concat() function concatenates the string arguments to the calling string and returns a new string. 
// console.log(gname.concat(' ',repo)); //spacing
// console.log(gname.concat(',',repo));