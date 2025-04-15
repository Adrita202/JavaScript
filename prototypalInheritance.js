function Person(fName,lname){
    this.firstName=fName
    this.lastName=lname

}

Person.prototype.getFullName=function(){
    return this.firstName+' '+this.lastName
}
function SuperHero(fName,lname){
    this.isSuperHero=true
    Person.call(this,fName,lname)
}

SuperHero.prototype=Object.create(Person.prototype)

SuperHero.prototype.fightCrime=function(){
    console.log('fighing crime')
}

const batman=new SuperHero('Bruce','lee')
SuperHero.prototype.constructor=SuperHero
console.log(batman.getFullName())

