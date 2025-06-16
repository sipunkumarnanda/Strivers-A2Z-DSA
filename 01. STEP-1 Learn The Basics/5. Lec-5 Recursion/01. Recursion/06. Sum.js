
// Sum of n numbers using recursion

function sum(n){
    if(n == 0) return 0

    return n + sum(n-1)
}

console.log(sum(5));

// 1 + 2 + 3 + 4 + 5 = 15