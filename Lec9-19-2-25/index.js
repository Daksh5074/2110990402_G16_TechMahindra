// reachdRestraunt(function(){
// console.log("Reached Restraunt")
// })
// .then(TableFinding)
// .then(MenuDiscover)
// .then(PriceCheck)
// .then(StarterOrder)
// .then(mainCourse)

// //REDUCE 
// const myRestrauntPromise =new Promise(ResizeObserver,reject){
//     if(1:30>time>2:30){
//         resolve("YES SUCCESSFULY REACHED")
//     }
//     else{
//         reject("CANT REACH AT TIME ")
//     }
// }

// const githubData =fetch("https://github.com/pratiyushray");
// setTimeout(()=>{
//     console.log(githubData);
// },1000)

// const cart =["shoes","watches","bags","glasses","shirts"];
// createOrder(cart,callback){
//     console.log("ORDER CREATION")
//     orderPayment(orderId,callback){
//         console.log("order payment")
//         orderSummary(orderId,callback){
//             console.log("Order Summary")
//         }
//     }
// }

const cart =["shoes","watches","bags","glasses","shirts"];

function createOrder(cart){
const myPromise=new Promise(function(resolve,reject){
    if (cart.length>0){
        console.log("order created successfully")

        resolve("12345");
    }
    else{
        const err=new Error("order failed")
        reject(err.message)
    }
});
    return myPromise;
}
function orderPayment(orderId){
    console.log("order payment successfull",orderID);
}
function orderSummary(orderId){
    console.log("order summary created");
}
function updateWallet(){
    console.log("wallet Updated")
} 

//console.log(createOrder(cart));

createOrder(cart)
.then(function (orderId){
    return orderPayment(orderId)
})
.then(function (orderId){
    return orderSummary(orderId);
})
.then(function(orderId){
    return updateWallet
})


function orderPayment(orderId){
    console.log("order payment successfull",orderID);
}
function orderSummary(orderID){
    console.log("order summary created",orderId);
}
function updateWallet(){
    console.log("wallet Updated")
}



createOrder(cart)
.then(function orderPayment(orderId){
    console.log("order payment sucessful",orderId)
})
.then(function orderSummary(orderId){
    console.log("order Summary".orderId)
})

// createOrder(cart)
// .then(orderPayment(orderId))
// .then(orderSummary(orderid))
// .then(updateWallet)