//if declared in global scope with let/var/const it works everywhere
// var age=15;
let age=14;

console.log(age);
{
    console.log(age);
}
for(let i=0;i<2;i++)
    console.log(age)

function sayHii(){
    console.log("Hii",age)
}

//function scope
function Hello(){
    var namee="earth";
    console.log("bye .. i quit",namee);
}
Hello();
// console.log(namee);//not defined, only accessable in blocks or braces
//same for var, let, const
{//var is global scoped 
    var height=180;
}
console.log(height);
{//let only accessable in block,same with const
      let aim="die"
}
console.log(aim);//aim not defined


//temporal dead zone
