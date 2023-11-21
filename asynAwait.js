/*what is async function - it shd always return promise
if doesnt return a function if its a value, it will automatically wrap it in promise and give it to us

-Async and Await are used to handle promises
-Await is the keyword used only inside async function
*/


const p = new Promise((resolve, reject)=>{
    setTimeout(() =>{
        resolve("Promise Resolved Value");
    },10000)
   
});

/*
//always returns promise
//value
async function getData(){
    //return "Ata maji satakli";
    return p;
}



const dataPromise = getData();


// console.log(dataPromise)
dataPromise.then((result)=>console.log(result))

*/

//before async and await
// function gettingData(){
//     //js engine will not wait for promise to be resolved
//     p.then((result) => console.log(result))
//     console.log("Ramya")

// }
// gettingData();

//now
// const p1 = new Promise((resolve, reject)=>{
//     setTimeout(() =>{
//         resolve("Promise Resolved Value");
//     },5000)
   
// });
// const p2 = new Promise((resolve, reject)=>{
//     setTimeout(() =>{
//         resolve("Promise Resolved Value");
//     },10000)
   
// });

//await can only be used inside an async function
/*
async function handlePromise(){

    //js Engine was waiting for promise to resolve
    const value = await p1;
    console.log(value);
    console.log("Ramya");

    const value2 = await p2;
    console.log(value2);
    console.log("Rash");
}
handlePromise();

*/

//https://api.github.com/

//const API_URL = "https://api.github.com/users/RamyaSIyengar"
const API_URL = "https://api.github.com/uinsers/validUrl"

//Two methods using Try catch or using function.catch as shown below

async function handlePromise(){
    try{
        const data = await fetch(API_URL);
        //fetch gives you promise
        // fetch() = Response.json() =>jsonValue
        //console.log(data)
        const jsonValue = await data.json();
        console.log(jsonValue);
    }
    catch(err){
            console.log(err);
        }
    }
handlePromise();
    

// async function handlePromise(){
//         const data = await fetch(API_URL);
//         const jsonValue = await data.json();
//         console.log(jsonValue); 
//     }
// handlePromise().catch((err)=>console.log(err))



//Promise API

/*
1.Promise.all (Fail fast)
 - to handle multiple promises, it takes array of promises 
promise.all([p1,p2,p3])
p1 takes 3secs to get results, p2 - 1sec, p3-2secs
a) All of APIs are successful, output of promise.all will be result of array of these promises
[val1,val2,val3]
wait for all them to finish then only it will give the result - in this case 3sec

b) promise.all([p1,p2,p3])
one of these promises will get rejected
promise.all will throw an error if a single promise is unsuccessful
output will throw an err which thrown by unsuccessful promise
p1-3sec,p2-1sec,p3-2sec
it will throw err as soon as one of the promises throws err
 in 1 sec it throws error=>p2


2.promise.allSetteled
it will wait for all the promises to settle even they are success or failure
promise.allSetteled([p1,p2,p3])=>[val1,err2,val3]
                    3sec,1S,2Sec

3.Promise.race
a) Success - promise which finishes first will be the winner
promise.race([p1,p2,p3])
              3S,1S,2S
It will give you the value of first settled promise
After 1Sec => (val2)  

b)wht if p2 fails after 1 sec
error will be thrown
return result of frst settled promise

4.Promise.any
Promise.any([p1,p2,p3])
it will wait for frst promise to get success

([p1,p2,p3])
  3S,1S,2S
 if p2 fails after 1sec, p3 gets success then it will return (Val3)  
 
 if all of them fails =>aggregated error(err1,err2,err3) 

race will give result value of first settled promise irrespective of success or failure
any will give result of frst success
*/

//dummy promises
const p1 = new Promise((resolve, reject)=>{
    // setTimeout(()=>resolve("P1 Success"),3000);
    setTimeout(()=>reject("P1 Fail"),3000);
})
const p2 = new Promise((resolve, reject)=>{
    // setTimeout(()=>resolve("P2 Success"),1000);
    setTimeout(()=>reject("P2 Fail"),1000);
})
const p3 = new Promise((resolve, reject)=>{
    // setTimeout(()=>resolve("P3 Success"),2000);
    setTimeout(()=>reject("P3 Fail"),2000);
})

//promise.all
/*
 Promise.all([p1,p2,p3])
 .then((res) =>{
    console.log(res);
})
.catch((err)=>{
    console.error(err)
});
*/

// Promise.allSettled([p1,p2,p3])
// .then((res) =>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.error(err)
// });


// Promise.race([p1,p2,p3])
// .then((res) =>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.error(err)
// });

Promise.any([p1,p2,p3])
.then((res) =>{
    console.log(res);
})
.catch((err)=>{
    console.error(err);
    console.log(err.errors) // errors=object
    console.log(err.errors[0]) // errors=object

});

//if all promisses were rejected
//asynAwait.js:203 AggregateError: All promises were rejected

//lingo
// settled 
//resolve, success, fulfilled
//reject, failed, rejected

