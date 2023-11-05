
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
// getName();

// var getName = () => {    // treated as variable -undefined 
//   console.log("namaste");
// }

// var getName2 = function(){

// }

// let b=7
// console.log(typeof(b))


// Rules and convention  of var => letter,numbers,_, $
var $nation ="India";
console.log($nation);

var firstName = "Krishna"; //camelcase
console.log(firstName);

var first_name = "Ram"; //underscore
console.log(first_name);

var FirstName = "Sham"; //pascal case
console.log(FirstName);

// let firstName = "KrishnaBhagvan"; //camelcase
// console.log(firstName);
//Uncaught SyntaxError: Identifier 'firstName' has already been declared (at index.js:40:5)

let lastName = "KrishnaBhagvan"; //camelcase
console.log(lastName);

const fullName = 'RamyaIyengar';
console.log(fullName);
// fullName='RashmiIyengar';
// console.log(fullName);
//index.js:49 Uncaught TypeError: Assignment to constant variable.

const people = {
    name: "Ramya"
}
people.name = "Rash";
// we are changing the value of object inside the constant, not the constant value
console.log(people);

// ARRAY

const numbers = [1,2,3,4,5];
// numbers = [1,2,3,4,5,6]; Uncaught TypeError: Assignment to constant variable.
numbers.push(6); // you can manipulate values in the array obj 
console.log(numbers);

/*
Datatypes in JS 
2 types of datatypes 
1. primitive datatypes -stores directly in the location, the variable access stored in the stack

String,Number,Boolean,Null,undefined,Symbol

Reference data types -accessed by reference,stored in heap and points to the location in memory
Arrays, Object Literals, Functions
*/

const hisName = 'Rajesh';
const age=25;
const isMale=true;
const abc = null; // storing value of nothing
let a; // if we dont intialize with a value then it is undefined
const sym = Symbol();
console.log(hisName, age, isMale, abc, a ,sym);

//reference datatype
//Arrays
const hobbies=["singing","drawing"]
//object literals
const person={
    name:'Ram',
    age:25,
    job:'it'
}

const today = new Date();

console.log(hobbies, person, today)

//Type conversion and cohesion

let value;
//number to a string

value = 5;
value = String(5*5);

//boolean to string
value = String(true)

//date to string
value = String(new Date());

//array to string
value = String([1,2,3]);

//toString method to do the conversion
value =(5).toString();
value= (true).toString();

// console.log(value); 
// console.log(typeof value);
// console.log(value.length) for string

/*
other types to Number
*/
value =Number("5");
value =Number(false);
value =Number(null);

//parseInt() method to covrert any type to number
value= parseInt('5');

console.log(value); 
console.log(typeof value);
console.log(value.toFixed(2)) //length is a property of a string which gives no of characters in string it gives undefined for number

//Type coehesion - JS will convert it for us
console.log("Type coehesion")
const value1 = '5';
const value2 = 3;
const sum = value1+value2;
console.log(sum);
console.log(typeof sum)

//template literals(es6)
let html;
const firstName='ramya';
const lName = 'iyengar';



html = `
<ul>
    <li>Firstname:${firstName}</li>
    <li>lastname:${lName}</li>

</ul>
`
document.body.innerHTML=html;




