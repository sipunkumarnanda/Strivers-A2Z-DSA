
// Print n to 1 using recursion 

function printNum(n){
    if(n == 0) return
    console.log(n);
    printNum(n-1)
}

printNum(10)  

// It will print N to 1 