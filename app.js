// Callback functions - to do asynchronous things in javascript which is a synchronous and single threaded language

setTimeout(function(){
console.log("Timer")
}, 1000)
function x(y){
    console.log("x called");
    y();
}

x(function y(){
    console.log("y called");
})
//if you call a function and pass a function inside another function then that function is called callback function

  

//Blocking the main thread - everything is executed in a page is through call stack, if any operation blocks the call stack is called blocking the main thread

//Event Listeners

//added click me button in html 
/*document.getElementById("clickMe")
.addEventListener("click",function clickfunc(){
        console.log("button clicked");
}); // function here is called callback function*/

//add count to check how many times the button is clicked

/*
let count=0;
document.getElementById("clickMe").addEventListener("click",function clickfunc(){
    console.log("button clicked",++count)
});
*/

//using a global variable is not a good practice so the count is not modified by any other program
//lets add closure to eventlistners
//wrap the above code in a function 

function attachEventListeners(){
    let count=0;
    document.getElementById("clickMe").addEventListener("click",function clickfunc(){
        console.log("button clicked",++count)
    });
}
attachEventListeners();

//Garbage Collection and remove eventListeners
// eventlisterners take memry - which doesnt freeup by itself