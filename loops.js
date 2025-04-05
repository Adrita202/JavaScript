for(let i=1;i<=6;i++){
    if(i==4){
        break;
    }
    else{
        console.log(i);
    }
}

console.log("meow")
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // Skips iteration when i = 3
    }
    console.log(i);
}
console.log("forEach loop");

let numbers = [1, 2, 3, 4, 5, 6, 7];

let sum = 0;
numbers.forEach(function(number){
    sum += number;
})

console.log(sum);
console.log("meow");

let arr=[10,20,30,40,50]
for (let value of arr){
    console.log(value);

}
let fullName="meow";
for (let value of fullName){
    console.log(value);
}




