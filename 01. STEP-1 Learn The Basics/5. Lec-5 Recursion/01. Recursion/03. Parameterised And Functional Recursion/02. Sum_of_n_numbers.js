
// sum of n numbers using recursion  

function summation(i, sum){
    if(i < 1) return sum

    // sum += i 
    return summation(i-1, sum+i)
}

console.log(summation(5,0));