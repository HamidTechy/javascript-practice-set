
class Human{
    //properties
    //by default they are public members 
    age = 27;
    #weight  = 70;  // private member
    heigt = 5.11;

    //behavious
    walking(){
        console.log("I am walking right now my weight is ", this.#weight)
    }
    running(){
        console.log("I am running ",)
    }
}

let obj = new Human();
obj.walking()