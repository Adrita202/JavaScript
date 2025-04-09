let myList=[];
myList.push("apple","banana");
myList.unshift("grapes")
myList.splice(2,0,"orange");

console.log(myList)
let longWords=myList.filter(word=>word.length>5);
console.log(longWords);

let total=myList.reduce((acc,curr)=>acc+curr.length,0)
console.log(total);

const numbers = [5, 12, 8, 130, 44];

let m1=numbers.map(n=>n+10);
console.log(m1);
let fB=m1.find(n=>n>100)
console.log(fB);


const result=m1
    .filter(n=>n%2==0)
    .map(n=>n*n)

console.log(result);
