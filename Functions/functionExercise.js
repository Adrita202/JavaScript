//maximum of three

function findMax(a,b,c){
    if (a>b && a>c){
        return a;
    }
    else if (b>a && b>c){
        return b;
    }
    else
        return c;
}
console.log(findMax(10,25,15));

function findMax(a,b,c){
    return Math.max(a,b,c);
}
console.log(findMax(10,25,15));


//function declaration
function square(num){
    return num*num;
}
let sq=square(4);
console.log(sq);

//function expression

let isEven=function(n){
    if(n%2==0)
        return true;
    else
        return false
}
console.log(isEven(5))

// let mul=(n1,n2)=>{
//     return n1*n2};
    
let mul=(n1,n2)=>n1*n2;
console.log(mul(5,2));
