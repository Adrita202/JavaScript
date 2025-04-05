sayHello();

function sayHello(){
    console.log("Hello guyzzz");
}//this works


//but this doesn't workkk for function expression syntaxx
sayBye();
let sayBye=function(){
    console.log("Byeeee");
}//Cannot access 'sayBye' before initialization


//const object1=new Human();
class Human{
    //making object before class also doesn't work
}
