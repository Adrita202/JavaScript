//hoistinggg
sayMyName("Meoww");

function sayMyName(name){
    console.log(name);
}

//variable hoisting


var age;//it  is done by compiler
console.log(age); //undefined if called before assignment
var age=34;


