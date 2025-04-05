let personPrototype={
    name:"Mayank"
};

let person=Object.create(personPrototype);
console.log(person);

person.firstName="Malini";
person.lastname="shah";
person.age=22;
person.hobbies=["reading","writing","sleeping"];
console.log(person);