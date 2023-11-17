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

// javascript  Runtme environment
// javascript engine, api, 
// learn abt ECMASCript, spydermonkey

// JS Engine
/* 3 major steps 
 Code -> parsing -> complilation -> execution

 1. parsing
 during parsing phase, the code is broken into TOKENS 
 let a= 7 => let is one token, a is one token  
 syntax parser => job of this sp is to convert the code into AST - Abstract syntax tree
 AST is passed to compilation phase
astexplorer.net to see ast for a js code

 2. compilation 
 JIT compilation - JUst in time compilation
 diff between interpreter and compiler
 interpreter - code is executed line by line. code is fast
 compiler -code is compiled frst even before execution and new code is formed which is a optimized version of the code
more efficiency in compiler
js can be both 

AOT - ahead of time compiler
finally the byte code goes to execution phase

3. execution -
memry heap and call stack
memry heap  - is where all the memory is placed, where all the variables and function are placed memory

garbage collector - uses Mark and sweep algorithm
google inlineing, copy elision, inline caching, Mark and sweep algorithm

V8 JS Engine - orinoco - oilpay
*/

// Trust issues with SetTimeout

console.log("start");

setTimeout(function cb(){
    console.log("Callback");
}, 5000);

console.log("End");

//millipn lines

let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate+10000){
    endDate = new Date().getTime();
}

console.log("while expires");