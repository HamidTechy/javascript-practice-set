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
let myArr = [23, 43, 54, 65, 76]

let ans = myArr.filter((num)=>{
    if(num%2===0){
        return true
    }
    else{
        return false
    }
})
console.log(ans)
