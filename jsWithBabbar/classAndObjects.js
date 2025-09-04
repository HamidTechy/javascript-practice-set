
// class Human{
//     //properties
//     //by default they are public members 
//     city;
//     age = 27;
//     #weight  = 70;  // private member
//     heigt = 5.11;

//     constructor(newCity, newAge, newWeight){
//         this.city = newCity;
//         this.age = newAge;
//         this.#weight = newWeight;
//     }
//     //behavious
//     #walking(){
//         console.log("I am walking right now my weight is ", this.#weight)
//     }
//     running(){
//         console.log("I am running ",)
//     }
//     get fetchWeight(){
//         return this.#weight;
//     }
//     set modifyweight(val){
//         this.#weight = val
//     }
//     get fetchWalking(){
//         return this.#walking();
//     }

// }

// let obj = new Human("Sheikhupura", 28, 78);
// // console.log(obj.fetchWeight)
// // obj.walking();

// // console.log(obj.city)
// // console.log(obj.age)
// // console.log(obj.fetchWeight);

// obj.fetchWalking


// default parameter
// function sayName(fName="Latif", lName="khan"){
//     console.log(fName, lName)
// }
// sayName("Hamid")
// sayName("Hamid", "Khan")
// sayName()

// parameter dependent
// function sayName(fName="Latif", lName=fName.toUpperCase()){
//     console.log(fName, lName)
// }
// sayName();


//object as default parameter
// function sayName(name="Majid", desc={age:29,wt:80}){
//     console.log("Hello",name + " how are you", desc)
// }
// sayName("Hamid",{age:35, wt: 70})
// // sayName("Hamid")
// sayName()

// array as default parameter

// function sayName(name="Latif", desc=["Amir","Abid","Sajid","Majid","Hamid"]){
//     console.log("Hello",name + " Your sons names are", desc)
// }
// sayName("Parween",)
// sayName()

// null and undefined as default parameter 
//null
// function sayName(name="Latif"){
//     console.log("Hello",name)
// }
// sayName(null);

//undefined

// function sayName(name="Latif"){
//     console.log("Hello",name)
// }
// sayName(undefined);