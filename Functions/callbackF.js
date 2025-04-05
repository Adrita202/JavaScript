// function greet(name,callback){
//     console.log(`Hello ${name}!`);
//     callback();
// }
// function showMsg(){
//     console.log("Wlcome Js!");
// }
// greet("Adrita",showMsg);




function calculate(a,b,operation){
    return operation(a,b);
}
const subtract=(a,b)=>a-b;
const sum=(x,y)=>x+y;
const mul=(x,y)=>x*y;

console.log(calculate(4,1,subtract));
console.log(calculate(1,100,sum));
console.log(calculate(5,4,mul));


console.log("Returning another function");
function multiplier(factor){
    return function(number){
        return number*factor;
    };
}
const double=multiplier(2);
console.log(double(5));



function process(num,callback){
    console.log("Processing number:",num);
    callback(num);
}
process(5,function(n){
    console.log("Square:",n*n);
});








console.log("Asynchronus exp");
console.log("start");
setTimeout(()=>{
    console.log("Executed after 2 sec");
},2000);
console.log("End");
