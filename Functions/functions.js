function printCount(){
    for(let i=1;i<=10;i++){
        console.log(i)
    }
}
printCount();


function getAverage(num1,num2){
    let avg=(num1+num2)/2;
    console.log("Avg:",avg);
}
getAverage(50,10);


function getSum(a,b,c){
    let sum=a+b+c;
    return sum;
}


// let ans=getSum(5,20,15);
// console.log("ans:",ans);

// function getMultiplication(a,b){
//     return a*b;
// }

// let m=getMultiplication(2,5);
// console.log(m);


let solve=function(a,b){
    return a*b;
}
let mul=solve(2,5);
console.log(mul);


let sqNum=function(num){
    return num*num;
}
console.log(sqNum(5));



let squareNumber=function(num){
    let ans=num**2;
    return ans;

}

let ans=squareNumber(5);
console.log(ans);