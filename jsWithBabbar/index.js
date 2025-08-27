// var a = 30;
// var a = 32;
// a = 56;

// let a = 23;
// let a = 45; // redecleration is not allowed
// a = 23

// const a = 234;
// // const a = 33;  // redecleration is not 
// a = 43;   // reassignment is not allowed

// Arithmetic operator
let a = 5;
let b = 3
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);

// assignment operator
// a = a+5;
// a +=5;
// a = a-5;
// a -=5;
// a *= 5
// a /= 5;

// Comparison Opreator 
// console.log(10<5);
// console.log(10>5);
// console.log(10<=5);
// console.log(10>=5);
// console.log("5"==5);
// console.log(5==5);
// console.log("5"===5);
// console.log(5===5);
// console.log('5'!==5);
// console.log(5!==5);
// console.log(5!=5);
// console.log('10'!=5);

// Ternary Operator
// let age = 3;
// let voterStatus = (age > 18)? "i can Vote": "I cannot Vote";
// console.log(voterStatus)

// conditional operator

// let ans = (true && true && true);
// let ans = (true && false && true);
// let ans = (true || false || false);
// let ans = (false || false || false );
// let ans = (!true);
// let ans = (!false);
// console.log(false && 'hamid') // it wil return false
// console.log(true && 'hamid') // this is true because this is truthy
// console.log(false && 8) // this is false 
// console.log(false || 'hamid') // this is truthy due to OR result will be 
// console.log(false || 8 || 21);

//Bitwise Operator
// all bitwise operate on binary level and outputs will be on binary based 
// console.log(2&5); // and operator will check on binary level
// console.log(2|5);
// console.log(2^5);
// console.log(~(2)); 
// console.log(10>>1);
// console.log(5<<1);
// console.log(5<<4);

// Conditional Operator
// if else

// let age = 9;
// if(age>18){
//     console.log("You can vote")
// }
// else{
//     console.log("Cannot Vote")
// }

// multiple ifelse
// let number = 8;

// if(number == 1){
//     console.log("A")
// }
// else if(number == 2){
//     console.log("B")
// }
// else if(number == 3){
//     console.log("C")
// }
// else if(number == 4){
//     console.log("D")
// }
// else if(number == 5){
//     console.log("E")
// }
// else{
//     console.log("F")
// }

//Nested ifelse

// let number = 4
// let age = 23;
// if(number == 1){
//     console.log("A")
// }
// else if(number == 2){
//     console.log("B")
// }
// else if(number == 3){
//     console.log("C")
// }
// else if(number == 4){
//     if(age>18){
//         console.log("You can vote")
//     }
//     console.log("D")
// }
// else if(number == 5){
//     console.log("E")
// }
// else{
//     console.log("F")
// }

//switch statment

// let num = 4;
// switch(num){
//     case 1: console.log("A");
//     break;
//     case 2: console.log("B");
//     break;
//     case 3: console.log("C");
//     break;
//     case 4: console.log("D");
//     break;
//     case 5: console.log("E");
//     break;
//     default: console.log("all is Well")
// }

//For loop
// for(let i=1; i<10; i++){
//     console.log("Number",i);
// }

// reverse counting
// for(let i=10; i>0; i--){
//     console.log(i)
// }

// break keyword 
// for(let i=10; i>0; i--){
//     if(i==4){
//         break;
//     }
//     else{
//         console.log(i);
//     }

// }

//Continue keyword
// for(let i=10; i>0; i--){
//     if(i==4){
//         continue;
//     }
//     else{
//         console.log(i);
//     }

// }

//while  loop with inifitine practice
// let i = 1;
// while(i<6){
//     if(i==4){
//         console.log("hi")
//         i++;
//         continue;
//     }
//     else{
//         console.log(i)
//     }
//     i++;
// }
//do while loop
// let k = 1;
// do{
//     console.log(k)
//     k++;
// }while(k<6)

// different style of writing string in javastrings 
let fName = "Hamid"
let lName = 'Latif'
let strPara = `Hi my name is ${fName}`

console.log(fName)
console.log(lName)
console.log(strPara)