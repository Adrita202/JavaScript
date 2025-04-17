console.log("I")
console.log("eat")

setTimeout(()=>{
    console.log("ice craem")
},4000);
console.log("with a ")
console.log("spoon")


function greet(name){
    console.log(`hello ${name}`)
}

setTimeout(greet,2000,"sponge bob")


//clear timeout
function greet(){
    consolr.loh("hello")
}
const timeoutId=setTimeout(greet,2000,"mmm")
clearTimeout(timeoutId)

function greet(){
    console.log("hdkjgudsj")
}
setTimeout(greet,0)