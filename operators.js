// let a=25;
// let b=10;
// let sum=a+b;
// console.log(sum);
// let ex=b**2;
// console.log(ex);

// let div=a/b;

// console.log(div);

// let m=a/2;
// console.log(m);


let x = 10;
let y = 4;

console.log(++x);    // 11
console.log(--y);    // 3
console.log(x);      // 11
console.log(y); //3


let a = 10;
let b = 4;
console.log(a++);      // 10
console.log(b--);      // 4

console.log(a);        // 11
console.log(b);        // 3


a+=10;
console.log(a);

let t1="a";
let t2="bob";
let res=t1>t2;
console.log(res);

console.log(5<=10);
let age=12;
let stat=(age>18)?'Vote':'can not vote';
console.log(stat );

let ans=(true && false && true);
console.log(ans);


let ans1=(false && false && false);
console.log(ans1);


let ans2=(true || false || true);
console.log(ans2);

let ans3=(true && "meow")
console.log(ans3);

console.log(0 && "hello");  // 0 (falsy)
console.log(1 && "hello");  // "hello" (both truthy, returns last one)

console.log(0 || "hello");  // "hello" (first truthy)
console.log("" || 0 || "JS"); // "JS" (first truthy)
