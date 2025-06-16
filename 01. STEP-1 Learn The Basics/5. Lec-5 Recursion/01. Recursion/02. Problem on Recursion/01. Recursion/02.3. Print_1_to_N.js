
// Print n to 1 using recursion 

function printNum(n){
    if(n == 0) return
    
    printNum(n-1)

    console.log(n);
}

printNum(10)  

// It will print N to 1 