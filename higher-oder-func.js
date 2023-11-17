// const radius =[3,1,2,4];

// const calculateArea = function (radius){
//     const output=[];
//     for (let i=0; i<radius.length; i++){
//         output.push(Math.PI * radius[i] *radius[i]);
//     }
//     return output;
// };

// console.log(calculateArea(radius));
 
// const calculateCircumference =function (radius){
//     const output=[];
//     for (let i=0; i<radius.length; i++){
//         output.push(2 * Math.PI * radius[i]);
//     }
//     return output;
// }
// console.log(calculateCircumference(radius));


// const calculateDiameter =function (radius){
//     const output=[];
//     for (let i=0; i<radius.length; i++){
//         output.push(2 * radius[i]);
//     }
//     return output;
// }
// console.log(calculateDiameter(radius));


const radius =[3,1,2,4];

const area = function(radius) {
    return Math.PI * radius * radius;
}

const circumference = function(radius){
    return 2*Math.PI*radius;
}

const diameter = function(radius){
    return 2*radius;
}

// const calculate = function (radius,logic){
//     const output = [];
//     for (let i=0; i<radius.length; i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
//}

Array.prototype.calculate = function (logic){
    const output = [];
    for (let i=0; i<this.length; i++){
        output.push(logic(this[i]));
    }
    return output;
}

// this calculate function wriiten is equivalent to map function

console.log(radius.map(area));
console.log(radius.calculate(area))

// console.log(calculate(radius, area));

// console.log(calculate(radius, circumference));

// console.log(calculate(radius, diameter));



// Map filter reduce

/*map function is used to transform an array
*/

const arr = [5,1,3,2,6];

function double(x){
    return 2*x;
}

function triple(x){
    return x*3;
}

function binary(x){
    return x.toString(2);
}

//const output = arr.map(double)
// const output = arr.map(triple);
let output = arr.map(binary)
 output = arr.map(function binary(x){
    return x.toString(2);
})// both above statements are same
console.log(output);


//filter
//const arr = [5,1,3,2,6];

function isOdd(x){
    return x%2;
}
function isEven(x){
    return x%2===0;
}

function greaterThan4(x){
    return x>4;
}
// const outpt = arr.filter(isOdd);
// const outpt = arr.filter(isEven);
const outpt = arr.filter((x)=>{return x>4});

console.log(outpt);

//reduce

