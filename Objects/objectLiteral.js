let person = { name: "Mayank", age: 21 };
console.log(person.name);  
console.log(person["age"]); 
person.age = 22; 
// delete person.name; 
console.log(person.age);



let obj={
    name:"Love",
    age:20,
    weight:45,
    height:"6 ft",
    greet:function(){
        console.log("heyyyy babe")
    }

};
console.log(obj);
obj.greet();
console.log(typeof(obj))
let obj2=obj