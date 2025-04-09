let src={
    age:12,
    wt:68,
    ht:180
};

src.color="pink";
console.log(src);
src.age=45;

//spread operator
let dest={...src};
console.log(dest);

//assign method

// let dest2=Object.assign({},src);
// src.color="black";
// console.log("src:",src);
// console.log("Dest2=",dest2);

let src2={
    value:101,
    name:"meow"
};

let dest3=Object.assign({},src,src2);
console.log("Dest3=",dest3);

//Iteration Method

let dest4={};
for(let key in src){
    // console.log(key);
    let newKey=key;
    let newValue=src[key];
    //insert new value
    dest4[newKey]=newValue;
}
console.log("Dest4=",dest4);