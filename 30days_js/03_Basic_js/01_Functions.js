//! not equal to
//parenthesis

// function myDemo()
// {
//     console.log("O");
//     console.log("m");
//     console.log("k");
//     console.log("a");
//     console.log("r");
// }
// myDemo()

// function add2no(n1,n2) //function parameter 
// {
//    console.log(n1+n2);
// }

// add2no(2,3)

// //

// function add2no(n1,n2) //function parameter 
// {
//    return n1 + n2  
// //   return n3 = add2no(2,3); //you cant access out side the scope
//   //ek bar return likhne ke bad koi code execute nhi hogya
//   console.log("hello");
// }
// let n3 = add2no(2,3);
// console.log("result",n3);

// function loginum(un)
// {
//     if(un===undefined)
//     {
      
//             return  false;
//             console.log();
            
       
//     }
//    else{
//     return `${un} logged in`;
//    }
// }
// console.log(loginum()); //undefined bacause user di dn given value
// console.log(loginum(undefined)); 
// console.log(loginum(undefined));
// ----------------------------------------------------------------------------------------------------------------------------------
//... iska matlab arrange karke 1 box ke andar ayega (rest)
// ...rest  .j.spread dono same he kam alag situation pe ate he
//...  rest ouput array format me deta he kyu ki ye ek inbuilt class he array me
//jab ham parameter me task denge tab wo jitne var delcare honge utne wo values vr me store karega baki ka array format me show karega
// e.g ->
// function Add2No(num1 ,num2,...no) 
// { 
//         return no;
// }
// console.log(Add2No(200,100,600));

const user ={
        name: "omkar",
        price:20000
}

function handleObject(anyobject) {
        console.log(`Username is ${anyobject.name} and price is${anyobject.price}`);
}
handleObject(user);
handleObject({
        name: "sai",
        price: 2000
})

//people prefer type script for type testing in js take more code to do so...

let arr1 = [10,20,30,40]

function Handlearray(dev) {
 console.log(arr1[2]);        
}
        
Handlearray(arr1)
