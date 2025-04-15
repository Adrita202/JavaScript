function outer(){
    let counter=0
    function inner(){
        counter++
        console.log(counter)
    }
    return inner
}
const fn=outer()
// console.log(ou/ter())
fn()
fn()

