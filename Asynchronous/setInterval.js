function greet(){
    console.log("hello")
}
setInterval(greet,2000)
//runs forever

const interValId=setInterval(greet,2000,"bshjsgc")
clearInterval(interValId)

setInterval(function run(){
    console.log("gsddgsj")
},2000);