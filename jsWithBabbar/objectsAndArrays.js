// let obj = {
//     "user Name": "Hamid Rana",
//     age : 27,
//     qualifcation : "BSit",
//     greet : ()=>{
//         console.log("Assalam o Alaikum")
//     }
// }

// // console.log(obj["user Name"])
// // console.log(obj.age)
// // obj.greet()
// let obj2 = obj
// console.log(obj2)
// // console.log(obj.greet())
// console.log(obj)

// Array creation

// let brr = [32, 4, 65, 75, 23];
// console.log(typeof(brr));
// // array constructor 

// const arr = new Array("Hamid", 85, true, 70.5);
// console.log(arr);
// console.log(arr[2]) // how to check value using index

// let myArr = [23, 34, 65, 76]
// myArr.push(34)
// myArr.pop()
// myArr.shift()

// myArr.unshift(45)
// myArr.push(12)
// myArr.push(42)
// myArr.push(92)

// console.log(myArr.slice(2,5))

// myArr.splice(2, 1, "Hamid")

// map method of javascript

// let myArr = [10, 20, 30, 45]
// let ans = myArr.map((num, )=>{
//     // return num*num;
//     // console.log(num +2)
//     // console.log(index)
//     // console.log(num)
// })
// console.log(ans)

// filter method 
// let myArr = [23, 43, 54, 65, 76]

// let ans = myArr.filter((num)=>{
//     if(num%2===0){
//         return true
//     }
//     else{
//         return false
//     }
// })
// console.log(ans)
//short code using filter
// let myArr = [23, 43, "Hamid", 65, "Rana"]

// let ans = myArr.filter((value)=>{
//     return typeof value === 'string'
// })
// console.log(ans)

// reduce function

// let arr = [10, 20, 30, 40]

// let ans = arr.reduce((acc, curr)=>{
//     return acc + curr;
// },0);

// console.log(ans)

// sort method
//ascending order
// let arr = [21, 83, 44, 15, 36 ]
// arr.sort()
// console.log(arr)
// reverse of ascending order

// let arr = [21, 83, 44, 15, 36 ]
// arr.reverse()
// console.log(arr)

// descending order with sort() method

// let arr = [21, 83, 44, 15, 36 ]

// arr.sort((a,b)=> b-a)
// console.log(arr)

//descending with sort and reverse method
// let arr = [21, 83, 44, 15, 36 ]
// arr.sort()
// arr.reverse()
// console.log(arr)

// // index of 
// let arr = [21, 83, 44, 15, 36 ]

// console.log(arr.indexOf(44))

//find()
// let arr = [21, 61, 83, 44, 15, 36 ]

// console.log(arr.find((number)=> number>35));

// ForEach loop
// let arr = [21, 35, 18, 64, 72]

// // console.log(arr.length)
// for(let index=0; index<arr.length; index++){
//     console.log("Index:",index + "  value:",arr[index])
// }

// arr.forEach((value, index) => {
//     console.log("Value: " ,value, " index: ",index)    
// });

// for..in method 

// let obj = {
//     myName: "Hamid Rana",
//     age: 27,
//     from: "Sheikhupura",
//     greet: ()=> console.log("Assalam o alaikum")
// }

// for(let key in obj){
//     console.log(key, obj[key]);
// }

//for..of method
//for..of with array
// let arr = [24, 35, 82, 19, 72]
// for(let value of arr){
//     console.log(value)
// }
// let arr = "Hamid Rana"
// for(let value of arr){
//     console.log(value)
// }

// Arrays with Functions

let arr = [10, 20, 30, 40, 50]

// let getSum = function(arr){
//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(getSum(arr))

// array with arrow function

// let getSum = (arr)=>{
//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
//         sum += arr[i]
//     } return sum;
// }

// console.log(getSum(arr))

// array with arrow functions using forEach method
// function getSum(arr){
//     let sum = 0;
//     arr.forEach(value => {
//         sum += value;
//     });
//     return sum;
// }

// console.log(getSum(arr))

