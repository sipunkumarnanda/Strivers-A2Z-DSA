
// Multiple Recursion calls
// Fibonacci numbers using recursion nth fibonacci numbers 
// 1 1 2 3 5 8 13 21 34 55 89 144

// Print nth position fibonacci 

function fibonacci(n){
    if(n <= 1) return n

    let last = fibonacci(n-1)
    let slast = fibonacci(n-2)

    return last + slast
}

let res = fibonacci(6)

console.log(res);