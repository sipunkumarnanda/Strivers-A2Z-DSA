
// Factorial of n using parameterized func 

function factorial(n, fact){
    if(n == 0){
        console.log(fact);
        return
    }

    return factorial(n-1, n * fact)
}

factorial(3, 1)