let stocks={
    fruits:['strawberry','grapes','banana','apple'],
    holders:['cone','cup','stick'],
    liquid:['water','ice'],
    toppings:['chocolate','peanuts']

};
let isShopOpen=true;
// let isShopOpen=false;

let order=(time,work)=>{
    return new Promise( (resolve,reject)=>{
        if(isShopOpen){
            setTimeout(()=>{
                resolve(work() )
            },time)
            
        }
        else{
            reject(console.log("Shop is closed"))
        }
    })

}
order(2000,()=>console.log(`${stocks.fruits[0]} is selected`))

.then(()=>{
    return order(1000,()=>console.log("Production started"))

})
.then(()=>{
    return order(2000,()=>console.log("Fruit is chopped"))
})

.then(()=>{
    return order(1000,()=>{
        console.log(`${stocks.liquid[1]} and ${stocks.liquid[0]} is added`)
    })
})

.then(()=>{
    return order(1000,()=>console.log("machine start"))
})

.then(()=>{
    return order(2000,()=>{
        console.log(`${stocks.holders[2]} is selected`)
    })
})

.then(()=>{
    return order(3000,()=>{
        console.log(`${stocks.toppings[0]} is selected for tooping`)
    })
})

.then(()=>{
    return order(1000,()=>{
        console.log(`ice cream served`)
    })
})



.catch(()=>{
    console.log("customer left")
})

.finally(()=>{
    console.log("day ended, shop is closed")
})