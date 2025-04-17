const promise=new Promise((resolve,reject)=>{

    setTimeout(()=>{



        resolve("bringing tacos")
    },5000)

})

//success anf failure callbacks
const onFulFillment=()=>{
    console.log("Set of the table for tacos")
}

promsise.then(onFulFillment)

const onRejection=()=>{
    console.log("start cooking pasta")
}


//promise.All

const promise1=promise.resolve(3);
const promise2=45;
const promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,5000,"foodddd")
});

Promise.all([promise1,promise2,promise3]).then((values)=>{
    console.log(values)
})
