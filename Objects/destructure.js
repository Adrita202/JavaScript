// const { name, age } = { name: 'Alice', age: 30 };
// console.log(name); 
// console.log(age);


// const person = {
//     name: 'Bob',
//     address: {
//       city: 'Kolkata',
//       zip: 700001
//     }
//   };
  
//   const {
//     address: { city }
//   } = person;
  
//   console.log(city); // 'Kolkata'
  

//   const[one,two]=[1,2,3]



const pipi={
    firstName:"sponge",
    lastName:"Bob",
    age:10,
    job:"Fry cook",
}

const popo={
    firstName:"starrr",
    lastName:"Bob",
    age:19,
    
}

// const {firstName,lastName,age,job}=pipi;
// console.log(firstName);
// console.log(lastName);
// console.lof(age);
// console.log(job);

const {firstName,lastName,age,job="unemployed"}=popo;
console.log(firstName);
console.log(lastName);
console.lof(age);
console.log(job);


function displayPerson({firrstname,lastName,age,job}){

}