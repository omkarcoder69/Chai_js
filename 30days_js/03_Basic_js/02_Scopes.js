// JavaScript mein "scope" ek variable ke accessibility ya visibility ka area define karta hai jahaan us variable ko access kiya ja sakta hai.

//scope == {j }

//normal program to print no
// let a=10
// const b=20
// var c=30

// console.log(a);
// console.log(b);
// console.log(c);

// //is normal in program
// var c=200000;
// let a=100;
// ///global scope
// if(true){
//     //block scope
//     let a=10
//     // const b=20
//     var c=30  //avoid this because this variable accessing outside the scope
//     console.log("inner" ,a);
// }

// console.log(a);
// console.log(b);
// console.log(c); //var is accessing outside the scope avoid...

// //node scope  and browser scope is different
                                                               //nested scope 
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function demo1(){
    const user="omkar"
    function demo2() {
       const website ="youtube"
       console.log(user);
    }
    demo1()  
}
