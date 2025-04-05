let arr=[1,2,3,4,5]
console.log(arr);
console.log(typeof(arr))

let brr=new Array("hello",1,true,"mini")
console.log(brr);
console.log(typeof(brr));


console.log(brr[1])
brr.push("meowww")
console.log(brr);
console.log(brr.pop());
console.log(brr.shift());//remove left most element
console.log(brr);

brr.unshift("Ohh again");
console.log(brr);
brr.push(45);
brr.push(55)
brr.push("jini")
brr.push("not againnn")
console.log(brr);
console.log(brr.slice(2,5));

brr.splice(1,0,"kunuuu");

console.log(brr);