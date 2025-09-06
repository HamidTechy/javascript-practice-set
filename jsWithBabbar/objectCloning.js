// object dynamic nature
// let obj = {
//     age: 23,
//     wt: 79,
//     ht: 5.11
// }

// obj.color = "White"
//  console.log(obj)

// cloning 

let src = {
    age: 23,
    wt: 79,
    ht: 5.11
}

let dest = {...src}
// let dest = src
dest.color = "red"
src.age = 28
console.log(src)

console.log(dest)