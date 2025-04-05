//class has state and behaviour

class Human{
    age=13;
    #wt=80;//private
    ht=180;

    walking(){
        console.log(`I walk,My weight:${this.#wt}`);
        //private variable accessed through this.
    }
    running(){
        console.log("I run too");
    }
}

let obj=new Human();
console.log(obj.age);
obj.walking();
// console.log(obj.#wt);