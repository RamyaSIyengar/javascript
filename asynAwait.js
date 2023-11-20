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


