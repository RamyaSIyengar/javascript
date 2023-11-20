// const cart = ["shoes", "pants", "Kurta"]

// Api.createOrder(cart, function(){

//     api.proceedToPayment( function(){

//         api.showOrderSummary(function(){

//             api.updateWallet()

//         });

//     })

//     })

/*1. Before promise we used to depend on callback functions which would result in 1.) Callback Hell (Pyramid of doom) | 2.) Inversion of control
2. Inversion of control is overcome by using promise.
  2.1) A promise is an object that represents eventual completion/failure of an asynchronous operation.
  2.2) A promise has 3 states: pending | fulfilled | rejected.
  2.3)  As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
  2.4) A promise resolves only once and it is immutable. 
  2.5) Using .then() we can control when we call the cb(callback) function.

3. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
4. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then() */
   
const cart = ["shoes", "pants", "Kurta"];
/*
createOrder(cart, function(orderId) {
    proceedToPayment(orderId, function (PaymentInfo){
        ShowOrderSummary(PaymentInfo, function(){
            updateWalletBalance();
        })
    });
});
*/

const promise = createOrder(cart);
// {data: undefined }

//object.function
promise.then(function (orderId) {
    proceedToPayment(orderId);
});

//OR we can combine above two 

createOrder(cart)
.then(function (orderId){
    return proceedToPayment(orderId);
})
.then(function (PaymentInfo){
    return ShowOrderSummary(PaymentInfo);
    })
.then(PaymentInfo => updateWalletBalance(PaymentInfo));

//promises - is an object that represents eventual completion of asynchronous operation

//fetch is a API function given by browsers to us to make external calls

const GITHUB_API = "https://api.github.com/users/akshaymarch7"

const user = fetch(GITHUB_API);
//fetch returns us a promise




promise.then(function(){
    proceedToPayment(orderId);
})


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
    if(orderId){
        resolve(orderId);
    }

});
 
    return promise1
}

function validateCart(cart){
    return true
}
    
       
