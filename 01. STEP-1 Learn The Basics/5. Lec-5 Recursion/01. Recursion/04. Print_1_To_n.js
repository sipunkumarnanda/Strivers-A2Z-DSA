
// Print 1 to n using recursion 

function printNums(n){
    if(n == 0) return

    printNums(n-1)
    console.log(n);
}

printNums(10)