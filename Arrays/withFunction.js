let arr=[10,20,30,40,5];
// function getSum(arr){
//     let len=arr.length;
//     let sum=0;
//     for(let i=0;i<len;i++){
//         sum=sum+arr[i];
//     }
//     return sum;
// }
// let total=getSum(arr);
// console.log(total);


function getSum(arr){
    let sum=0;
    arr.forEach(element=>{
        sum=sum+element;
    });

}

let getSum=function(arr){
    let sum=0;
    arr.forEach(element => {
        sum=sum+element;
        
    });
    return sum;
}
let total=getSum(arr);
console.log(total);