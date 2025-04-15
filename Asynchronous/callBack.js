// function one(call_two){
//     console.log("step 1 done. call step 2");
//     call_two()
// }
// function two(){
//     console.log("step 2")
// }
// one(two);


let stocks={
    fruits:['strawberry','grapes','banana','apple'],
    holders:['cone','cup','stick'],
    liquid:['water','ice'],
    toppings:['chocolate','peanuts']

};




let order=(fruit_name,call_production)=>{
    //onsole.log("Order placed, call produstion");

    setTimeout(()=>{
        console.log(`${stocks.fruits[fruit_name]} is selected`)
        call_production();
    },2000);
    
};

let production=()=>{
    //console.log("Order recieved, starting production");
    setTimeout(()=>{
        console.log(`production started`);
        setTimeout(()=>{
            console.log(`fruit is chopped`);
            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)


                setTimeout(()=>{
                    console.log(`machine started`);

                    setTimeout(()=>{
                        console.log(`${stocks.holders[0]} selected`)

                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} added as topping`);

                            setTimeout(() => {
                                console.log("Ice cream served")
                            }, 2000);
                        }, 3000);
                    },2000);
                },1000);
            },1000);
        },2000);
    },1000);
};

order(0,production);