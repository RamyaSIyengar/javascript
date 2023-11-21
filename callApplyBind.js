let name1 = {
    firstName:"Ramya",
    lastName:"Iyengar",
    printFullName: function(){
        console.log(this.firstName+" "+this.lastName);
    }
}
// this is directed to object name1
name1.printFullName();

let name2 = {
    firstName:"Rash",
    lastName:"Iyengar",
}

//using call method we can do function borrowing
//function which needs to be called, each method has access to special func call
// first argument is  The object to be used as the current object.
name1.printFullName.call(name2)



// in general, we dont keep our methods inside which we use them often, we can make a function outside the object

let name3 = {
    firstName:"Ramya",
    lastName:"Iyengar",
    }


printFullName = function(hometown,state){
    console.log(this.firstName+" "+this.lastName +" from "+hometown+ ", "+state);
}

//call Method - 
printFullName.call(name3,"Tiptur", "Karnataka")

let name4 = {
    firstName:"Rash",
    lastName:"Iyengar",
}

// printFullName.call(name4, "SanJose", "california")


//Apply method - only diff between call and apply is how we pass the arguments
//in apply method we pass arguments in a array list not as individual as in call method
printFullName.apply(name4, ["SanJose", "California"]);



//Bind Method
//binds the method with a object returns us the copy of the method which can be called later
//-bind a copy of the method and use it later rather than invoking it rightaway
let printName = printFullName.bind(name3, "Mysore", "Karnataka")
console.log(printName)
printName();