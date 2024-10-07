// for(var i  = 0; i<3; i++){
//     setTimeout(function(){
//         console.log(i);
//     }, 1000 + i);
// }


// (function fnA(a){
//     return (function fnB(b){
//         console.log(a);
//     })(1);
// })(0);



// console.log(3>2>1);

//true>1 here true is 1 so 1 is not greater than 1 so it will be false


// console.log(["1","2"] -  11);

// console.log([] == 1);

// console.log({} == []);


// function.protoype.myBind = function(ctx)
// {
//     const args = Array.prototype.slice.call(arguments, 1);
//     const originalFunction = this;
    
//     return function() {
//         const bindArgs = args.concat(Array.prototype.slice.call(arguments));
//         return ctx.originalFunction(...bindArgs);
//     };
// }
// Function.prototype.myApply = function(ctx, argsArray) {
//     // If context is not provided, use global object (or undefined in strict mode)
//     ctx = ctx || globalThis;

//     // Create a unique property on the context
//     const uniqueProp = Symbol('uniqueProp');

//     // Assign this function to the unique property of the context
//     ctx[uniqueProp] = this;

//     // Call the function with provided arguments
//     let result;
//     if (argsArray) {
//         result = ctx[uniqueProp](...argsArray);
//     } else {
//         result = ctx[uniqueProp]();
//     }

//     // Delete the temporary property
//     delete ctx[uniqueProp];

//     // Return the result
//     return result;
// };



var obj = {
    name: "John",
    age: 20,
    languagesSpeak:{
        title: "English",
    }
};

var obj2 = obj;

obj2.name = "Doe";
obj2.languagesSpeak = "Spanish";

console.log(obj.name);
console.log(obj2.name);

console.log(obj.languagesSpeak);
console.log(obj2.languagesSpeak);






