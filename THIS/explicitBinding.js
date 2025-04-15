function sayMyname(){
    console.log(`My name is ${this.name}`)
}

const person={
    name:'Joeyyy'
};


sayMyname.call(person)

// const greetBound=greet.bind(person);
// greetBound();


const person1 = {
    name: "Adrita",
    skills: ["JavaScript", "Python", "Cyber Security"]
  };

  function introduce(greet,ending){
    console.log(`${greet},I'm ${this.name}`);
    console.log(`I know: ${this.skills.join(', ')}`);
    console.log(ending);

  }
  introduce.apply(person1,["Hey babe", "Nice to meet you!"]);