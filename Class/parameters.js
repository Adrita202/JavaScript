// function sayName(myName="Jini")//default name
// {
//     console.log("My name is ",myName);
// }

// sayName("mayank");
// sayName();

// function sayName(fName="Arya",lName="Adhikari")//default name
// {
//     console.log("My name is ",fName,"",lName);
// }

// sayName("Saranya");
// sayName();


function sayName(fName="Mini",lName=fName.toLowerCase()){
    console.log("My name is ",fName,"",lName);

}
sayName();

//object as parameters
function solve(value={age:15,wt:45,ht:190}){
    console.log("My name is:",value);
}
solve();

//array as parameters

function abc(value=["bye","bae","hello"]){
    console.log("My name is:",value);
}
abc();

//null as parameter
function ac(value="bye"){
    console.log("My name is:",value);
}
ac(null);

//undefined as parameter
function bc(value="bye"){
    console.log("My name is:",value);
}
bc(undefined);

//function as parameter


// function getAge(){
//     return 190;
// }
// function utility(name,age){
//     console.log(name,"",age);
// }
// utility("Meow",20);
// utility();//undefined undefined
// utility("meow");//meow,undefined



function getAge(){
    return 190;
}
function utility(name="jini",age=getAge()){
    console.log(name,"",age);
}
utility();