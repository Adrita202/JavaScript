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


let crr=[-1,2,3,-4,-5,-10,4,6,8,9,11]
// let pos=crr.filter(n=>n>0);
let pos=crr.filter(n=>n<0);
console.log(pos);


const products = [
    { id: 1, name: 'A', price: 10 },
    { id: 2, name: 'B', price: 20 },
  ];
let expensive=products.filter(p=>p.price>15)
console.log(expensive);


const words = ["apple", "grapefruit"];
const longWords = words.filter(word => word.length > 6);
console.log(longWords);



const scores = [95, 67, 89, 45, 76, 30];
let passedScores=scores.filter(score=>score>=60);
console.log(passedScores);