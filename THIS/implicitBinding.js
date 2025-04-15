// function sayMyName(nm){
//     console.log(`My name is ${nm}`)


// }
// sayMyName("Meoww")

//IMplicit binding

const person={
    name:'min',
    sayMyName:function(){
        console.log(`My name is ${this.name}`)
    },

}

person.sayMyName();
//The implicit binding rule staess that when a function is invoked with the dot notation,the object to lthe left to the dot is what 'this'keyword is referencing


//Explicit binding