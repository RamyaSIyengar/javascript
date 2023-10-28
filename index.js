
// everything in Js happens inside an execution context
// Hoisting in js means you can access variables and func before even intialized it
// getName();
// console.log(x);
// console.log(getName); // 

// var x=7;

// function getName(){
//       console.log("javascript");
// }

// diff ways of writing function
//Arrow function
getName();

var getName = () => {    // treated as variable -undefined 
  console.log("namaste");
}

var getName2 = function(){

}

let b=7
console.log(typeof(b))




