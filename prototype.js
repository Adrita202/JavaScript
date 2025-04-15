function Person(fName,lname){
    this.firstName=fName
    this.lastName=lname

}

const p1=new Person('Bruce','Lee')

const p2=new Person('chark','me')

// p1.getFullName=function(){
//     return this.firstName+' '+this.lastName
// }

//console.log(p1.getFullName())

Person.prototype.getFullName=function(){
    return this.firstName+' '+this.lastName
}
console.log(p1.getFullName())
console.log(p2.getFullName())



//prototype points to an object , we can make use of that prototype object to determine all our shareable properties