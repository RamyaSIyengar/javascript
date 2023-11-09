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

