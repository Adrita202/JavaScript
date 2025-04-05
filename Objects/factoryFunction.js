// function createPerson(){
//     return{
//         firstName:"malini",
//         lastname:"pandey",
//         age:38,
//         hobbies : ["sleeping", "writing", "playing"]

//     }
// }

// let person=createPerson();
// console.log(person);

//pass parameter,


function createPerson(fname,lname,age,hobbies){
    return{
        firstName:fname,
        lastname:lname,
        age:age,
        hobbies:hobbies,
        sayHi:function(){
            console.log(`Hi, I'm ${this.firstName}.I'm ${age} years old`)
        }
    }
}


let person2=createPerson("Mini","Gupta",29,["dancing","snorkling"])
console.log(person2);
person2.sayHi();