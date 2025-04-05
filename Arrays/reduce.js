let arr=[10,20,30,40]
let ans=arr.reduce((acc,current)=>{
    return acc+current;

},0);
console.log(ans);


let brr=[9,8,7,2,4,10,56,50];
brr.sort();
console.log(brr);


brr.sort((a,b)=>a-b);
console.log(brr);

// brr.sort((a,b)=>b-a);
// console.log(brr);

console.log(brr.indexOf(10));