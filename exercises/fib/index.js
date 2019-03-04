// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


// My solution of Fibonacci


// linear runtime complexity 

// Gnerics version of memoize
function memoize (fn){
    debugger;
    // storage for result 
    const cache = {};
    //  anonuymus function 
    return function (...args){
        debugger; 
        if (cache[args]){
            return cache[args]; 
        }

        // Apply fn(slowFib) function to this (where this is anonoymus function) with arguments (an array of arguments)
        debugger; 
        const result = fn.apply(this, args); 
        // save result to cache 
        cache[args] = result; 
        // return result 
        return result; 
    }
} 

function slowFib(n){

    if (n < 2 ){
     
        return n ; 
        
    }    
    return  fib(n-1) + fib(n - 2);
}

const fib = memoize(slowFib); 

// not memoized function of  fibonacci 
function fibRegular(n){

    if (n < 2 ){
     
        return n ; 
        
    }    
    return  fib(n-1) + fib(n - 2);
}

//Tutor Iterative solution 

function fibIterative (n){
   const result = [0, 1] ; 
   for (let i = 2 ; i <=n; i++){
        const a = result[i -1 ]; 
        const b = result [i - 2]; 
        result.push(a+b); 
   }
   return result[n];
}


function fibMySolutions(n) {
    debugger; 
    let arrFib = [0, 1]; 
    for (let i = 1 ; i <  n ; i++){

        arrFib[i + 1] = arrFib[i] + arrFib[i-1]; 
    }
    return arrFib[arrFib.length-1]; 
}
fib(5);

module.exports = fib;
