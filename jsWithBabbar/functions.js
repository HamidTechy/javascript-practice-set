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

function getName(fName, lName){
    let fullName = fName + lName;
    return fullName;
}
let userName = getName("Hamid", " Latif");
console.log(userName)