// object dynamic nature
// let obj = {
//     age: 23,
//     wt: 79,
//     ht: 5.11
// }

// obj.color = "White"
//  console.log(obj)

// cloning 

// let src = {
//     age: 23,
//     wt: 79,
//     ht: 5.11
// }

// let dest = {...src}
// // let dest = src
// dest.color = "red"
// src.age = 28
// console.log(src)

// console.log(dest)

// object.assign and two object cloning same time 

// let src = {
//     age: 23,
//     wt: 79,
//     ht: 5.11
// }
// let src2 = {
//     value: 101,
//     city: "sheikhupura",
// }

// let dest = Object.assign({}, src, src2);

// src.age = 28;
// dest.color = "bright";
// console.log(src);
// console.log(dest);


//cloning with iteration


let src = {
    age : 28,
    wt: 80,
    ht: 5.9
}

let dest = {};
for(let key in src){
    let newKey = key;
    let newValue = src[key];
    dest[newKey] = newValue;
} 
src.ht = 6;
console.log(src)
console.log(dest)