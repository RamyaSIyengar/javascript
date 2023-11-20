const cart = ["coords", "jumpsuits","widepants"];

/*
const promise = createOrder(cart); //orderId
//console.log(promise)

promise
.then(function(orderId){
    //proceedToPayment(orderId);
    console.log(orderId)
})
.catch(function (err){
    console.log(err.message)
})
*/

createOrder(cart)
.then(function(orderId){
    console.log(orderId)
    return orderId;
})
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(PaymentInfo){
    console.log(PaymentInfo);
})

.catch(function (err){
    console.log(err.message)
})

//Catch -The callback to execute when the Promise is rejected.

//creating promise 

function createOrder(cart){

    const promise1 = new Promise(function(resolve, reject){
    //createOrder
    //validateCart
    //orderId
    
    if(!validateCart(cart)){
        const err = new Error("cart is not valid");
        reject(err);
    }
    //logic for createOrder
    //const orderId =  = DBcall.getOrderId
    const orderId = "12345";
    // if(orderId){
    //     resolve(orderId);
    // }
    if(orderId){
        setTimeout(function(){
            resolve(orderId)
        },5000)
    }

});
 
    return promise1
}
  
function proceedToPayment(orderId){
    ///logic
    return new Promise(function(resolve, reject){
        resolve("Payment Successful");
    })
}

function validateCart(cart){
    return true
}
      

//promise chaining
