// Normal function

function add (a,b){
    return a + b;
}


// Curried function


function curryAdd(a){
    return function (b){
        return add (a,b);
    }
}




const add5 = curryAdd(5);
console.log(add5(3));
console.log(add5(4));
