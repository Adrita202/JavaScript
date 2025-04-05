arr=[1,2,3,4,5,6,9,10,56,65];
// let evenArray=arr.filter((number)=>{
//     if(number%2==0){
//         return true;
//     }
//     else 
//         return false;
// });


let evenArray=arr.filter((number)=>{
    return number %2==0;
});

console.log(evenArray);

let brr=[1,2,'mini',45,null,true,"navinnnn"];

let brrArray=brr.filter((value)=>{
    if(typeof(value)==='string'){
        return true;
    }
    else
        return false;
});
console.log(brrArray)


