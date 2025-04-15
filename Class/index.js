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


class Person{
    constructor(fName,lName){
        this.firstName=fName
        this.lastName=lName
    }
    sayMyName(){
        return this.firstName +' '+this.lastName
    }
}


const classP1=new Person('bruce','Lee')
console.log(classP1.sayMyName())


class SuperHero extends Person{
    constructor(fName,lName){
        super(fName,lName)
        this.isSuperHero=true
    }
    fightcrime(){
        console.log('Fighting crime')
    }
}

const batman=new SuperHero('Bruce','lee')
console.log(batman.sayMyName())