function normalfunction(){
    console.log('Hello')
    console.log('world')

}
normalfunction()
function* generatorFunction(){
    yield 'hello'
    yield 'world'
}

const generatorObject=generatorFunction()
for (const word of generatorObject){
    console.log(word)
}