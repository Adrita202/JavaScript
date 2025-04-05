// function CreatePerson(){
//     this.firstName="Mayank",
//     this.lastName="shah",
//     this.age=22,
//     this.hobbies=["sleeping", "writing", "playing"]
// }
// let person=new CreatePerson();

// console.log(person);


//pass parameters o constructors

function CreatePerson(fName, lName, age,hobbies){
    
    this.firstName = fName,
    this.lastName = lName,
    this.age = age,
    this.hobbies = hobbies
    this.sayHi = function() {
        console.log(`Hi, I'm ${this.firstName} ${this.lastName} and I'm ${this.age} years old!`);
    };

}
let person2 = new CreatePerson("Mini", "So", 24,["sleep","dance"]);

console.log(person2);
person2.sayHi();
console.log(person2.age);