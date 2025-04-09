let arr=[1,2,3,4,5]

// const bubble=[1,'apple',true,{name:"Jonny"},[4,5,6]]
// console.log(bubble);
// console.log(arr);
// console.log(typeof(arr))


let crr=new Array();
console.log(crr);

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




let colors=['red','blue']
colors.push('green');
colors.unshift('yellow');
colors.splice(2,0,'purple');
console.log(colors);