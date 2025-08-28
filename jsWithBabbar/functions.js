// function firstName(){
//     console.log("Hamid")
// }
// firstName()

// print numbers using function and loop
// function printCounting(){
//     for(let i=1; i<=10; i++){
//         console.log(i);
//     }
// }
// printCounting()
// with single parameter and argument
// function with parameter

// function returnNum(num){
//     console.log("Number is :", num);
// }

// returnNum(5)

// double parameter and argument
// function returnAvg(num1, num2){
//     let avg = (num1 + num2)/2;
//     console.log("Avrg : ", avg)
// }

// returnAvg(5, 9)

//return functions
// function returnSum(a, b, c){
//     let sum = a + b + c;
//     return sum;
// }
// let takeSum  = returnSum(3, 4, 5)
// console.log(takeSum)

//string as argument in functions 
// function getName(fName, lName){
//     let fullName = fName + " "+ lName;
//     return fullName;
// }
// let userName = getName("Hamid", "Latif");
// console.log(userName)

// without space in concatination it will be concidered by as int type 
// function getName(fName, lName){
//     let fullName = fName + lName;
//     return fullName;
// }
// let userName = getName(23, 12);
// console.log(userName)

// function expression

// let getMultiply = function(a, b){
//     return a * b;
// }
// let ans = getMultiply(2,5)
// console.log(ans)

// let getsquare = function(a){
//     return a**2;
// }
// let answer = getsquare(5)
// console.log(answer)

// Arrow function
// let getMultiply = (a, b) =>{
//     return a*b;
// }
// let ans = getMultiply(3, 5)
// console.log(ans)


// All three ways to write function
//normal function
function getSum(a, b){
    return a + b;
}
let ans1 = getSum(3,4)
console.log(ans1)

// function expression

const getMultiply = function (a, b){
    return a * b;
}
let ans2 = getMultiply(3,4)
console.log(ans2)

// Arrow function

const getdivision = (a, b)=>{
    return a / b;
}
let ans3 = getdivision(12,4)
console.log(ans3)