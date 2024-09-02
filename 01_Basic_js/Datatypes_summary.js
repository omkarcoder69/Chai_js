//Data types are two types:

//primitive 7 types
// String , Number , Boolean , Null , Undefined,Symbol,Bigint

//nonprimitive
//Array , Objects , Functions
//JS ME koi bhi var me koonsa bhi data hold kar sakte he let me hi char , no , null ; advantage
// Dynamic Typing (e.g., JavaScript): Variable types are determined at runtime, allowing for flexibility but potentially leading to more runtime errors if not careful. 

// Static Typing (e.g., C, Java): Variable types must be declared explicitly before use, promoting type safety and catching errors at compile time.

//unique 
const id = Symbol('22')//123
const anotherid = Symbol('100')//

console.log(id===anotherid); //strick check

const bigno =12000000000000n

// console.log(bigno);

const heros =["shaktiman" ,"krish", "chota bheem"] ;//square bracket [array]
// //object ex:
//  let om ={   //{object}
//      name ="omkar",
//       age =20
// }

let myfunction = function(){      //(function)
    console.log("hello world");
}

let om=12


// console.log(typeof myfunction); //object function
// console.log(typeof anotherid); //symbol
// console.log(typeof null); //object
// console.log(typeof undefined);//undefined
// console.log(typeof String); //function
// console.log(typeof let); //undefined
// console.log(typeof om); //number


//                                                                  ------------Stack and heap------------
// stack and heap diagram
// https://excalidraw.com/#json=BKADs2VNJCHQFMluUWseq,VA5yg9iYjhNkNvY1SVfm8w

// Stack => primitive type
// Heap => nonprimitive type

// Stack part
let hello="omkar"

let byee =hello
byee="lorem" //change the value of byeee variable let se:> 

// console.log(hello); //omkar copy the first value
// console.log(byee); //lorem

let userone={
    name:"omkar",
    id:5,
    buy:true
}

usertwo = userone

usertwo.name="sai"

console.log(usertwo);
console.log(userone);

// https://excalidraw.com/#room=8f527f74e2e39abfe60d,1w3amUmKAAvDkfo9H7vWdg
//                                                                  ------------Stack and heap------------