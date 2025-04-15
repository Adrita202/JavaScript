function Person(name){

    //this={}
    this.name=name
}

const p1=new Person('Viswas')
const p2=new Person('Batman')

//when a function is invoken with the new keyword within the function this keyword will always reference a new empty object

console.log(p1.name);