// myName("hamid")
// function myName(name){
//     console.log(name)
    
// }


// fatherName("Latif")
// var fatherName = (pName)=>{
//     console.log(pName)
// }

// variable hoisting

// console.log(age)
// var age = 26;

// const obj1 = new Human();
// class Human{

// }


// function expression
// let myVar = function (){
//     console.log("Hamid Rana");
// }

// myVar()

// functions pass an argument

// function greetMe(greet, fullName){
//     console.log("Hello Mr", fullName)
//     greet()
// }


// function greet(){
//     console.log("Assalam o alaikum")
// }

// greetMe(greet, "Hamid")

// return function

// function solve(number){
//     return function(number){
//         return number * number
//     }
// }
// let ans = solve(5)

// console.log(ans(10))

// another way to return function

// function solve(){
//     return function (number){
//         return number * number
//     }
// }

// let ans = solve()
// console.log(ans(5))

// return function with string 

// function greet(salam){
//     return function(name){
//         return `${salam} ${name}`
//     }
// }

// let ans = greet("assalam o alaikum")
// console.log(ans("Hamid"))

// variable with string in inner function

// function person(name){
//     return function(year){
//         return `${name} is ${year*12} months old`
//     }
// }
// let ans = person("Hamid")

// console.log(ans(27))

// function in data structue like array

// let arr = [
//     function(a,b){
//         return a+b;
//     },
//     function(a,b){
//         return a-b;
//     },
//     function(a,b){
//         return a*b;
//     }
// ]

// let ans = arr[2]
// console.log(ans(5,8))

// functions with object 

// let obj = {
//     name: "Hamid",
//     age: 26,
//     greet : function(){
//         console.log("Assalam o alaikum")
//     }
// }

// console.log(obj.age)
// obj.greet();


