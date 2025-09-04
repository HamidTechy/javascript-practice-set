
class Human{
    //properties
    //by default they are public members 
    city;
    age = 27;
    #weight  = 70;  // private member
    heigt = 5.11;

    constructor(newCity, newAge, newWeight){
        this.city = newCity;
        this.age = newAge;
        this.#weight = newWeight;
    }
    //behavious
    #walking(){
        console.log("I am walking right now my weight is ", this.#weight)
    }
    running(){
        console.log("I am running ",)
    }
    get fetchWeight(){
        return this.#weight;
    }
    set modifyweight(val){
        this.#weight = val
    }
    get fetchWalking(){
        return this.#walking();
    }

}

let obj = new Human("Sheikhupura", 28, 78);
// console.log(obj.fetchWeight)
// obj.walking();

// console.log(obj.city)
// console.log(obj.age)
// console.log(obj.fetchWeight);

obj.fetchWalking
