//Compile-time Error 
// syntax error 
// console.log(1;

// Runtime Error
// reference error  
// console.log(i)

// try{
//     console.log("Try block start here")
//     console.log(x)
//     console.log("try Block ends here")
// }
// catch(err){
//     console.log("Hi I am catch block")
//     // console.log("Your error is here", err)
// }
// finally{
//     console.log("I am finally block i will always run ")
// }

// custome error

// try {
//     console.log(x)
// }
// catch{
//     throw new Error("Hi this is custome error and here is my message: ")
// }

let errorCode = 401;
if(errorCode == 401){
    throw new Error("Invalid credentials")
}