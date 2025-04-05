 //class has state and behaviour

class Human{
    age=13;
    #wt=80;//private
    ht;

    walking(){
        console.log(`I walk,My weight:${this.#wt}`);
        //private variable accessed through this.
    }
    running(){
        console.log("I run too");
    }

    constructor(newAge,newHeight,newweight){
        this.age=newAge;
        this.ht=newHeight;
        this.#wt=newweight;

    }

    get fetchWt(){
        return this.#wt;
    }
    set modifyWt(val){
        this.#wt=val;
    }
}

let obj=new Human(50,166,20);
console.log(obj.age);
console.log(obj.ht);
console.log(obj.fetchWt);
obj.walking();
// console.log(obj.#wt);