let stocks={
    fruits:['strawberry','grapes','banana','apple'],
    holders:['cone','cup','stick'],
    liquid:['water','ice'],
    toppings:['chocolate','peanuts']

};


// let isShopopen=true  ;

// async function order(){
//     try{}
//     catch(error){}
//     finally{

//     }

// }
// order.then(()=>{

// });


let toppingsChoice=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(console.log("what topping u love?")

            )
        },3000);
    })
}
async function kitchen(){
    console.log("A")
    console.log("B")
    await toppingsChoice()
    console.log("c")
    console.log("d")
    console.log("e")
}
kitchen()

console.log("other work 1")
console.log("other work 2")
console.log("other work 3")