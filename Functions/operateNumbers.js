// function operateNumbers(a,b,operate){
//     return operate(a,b);
// }

// const sum=(x,y)=>x+y;
// const sub=(x,y)=>x-y;

// console.log(operateNumbers(1,2,sum));



function operateNumbers(a,b,operate){
    return operate(a,b);
}

console.log(operateNumbers(4,5,function(a,b){
    return a+b;}));

