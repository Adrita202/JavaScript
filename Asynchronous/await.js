let stocks={
    fruits:['strawberry','grapes','banana','apple'],
    holders:['cone','cup','stick'],
    liquid:['water','ice'],
    toppings:['chocolate','peanuts']

};


 let isShopopen=true  ;

 function time(ms){
    return new Promise((resolve,reject)=>{
        if(isShopopen){
            setTimeout(resolve,ms);
        }
        else{
            reject(console.log("shop closed"))
        }
    });
 }

 async function kitchen(){
    try{
        await time(2000)
        console.log(`${stocks.fruits[1]} selected`)

        console.log("start production")
        
        await time(2000)
        console.log("fruit chopped")

        await time(1000)
        console.log(`${stocks.liquid} and ${stocks.liquid[1]} added`)

        
    }
    catch(error){
        console.log("customer left",error)
    }
    finally{
        console.log("day ended")
    }
 }
 kitchen();